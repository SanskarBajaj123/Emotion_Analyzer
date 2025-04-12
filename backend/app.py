from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
import pickle
import re
import numpy as np
from tensorflow.keras.preprocessing.sequence import pad_sequences

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Global variables for model and tokenizer
model = None
tokenizer = None

# Emotion label mapping
emotion_mapping = {
    0: "sadness",
    1: "anger",
    2: "love",
    3: "surprise",
    4: "fear",
    5: "joy"
}

def load_assets():
    """Load the model and tokenizer"""
    global model, tokenizer
    if model is None:
        print("Loading model...")
        model = tf.keras.models.load_model('best_model_lstm.h5')
    if tokenizer is None:
        print("Loading tokenizer...")
        with open('tokenizer.pickle', 'rb') as handle:
            tokenizer = pickle.load(handle)

def clean_text(text):
    """Clean and preprocess the input text"""
    if not isinstance(text, str):
        return ""
    text = text.lower()
    text = re.sub(r'http\S+|www\S+|https\S+', '', text)
    text = re.sub(r'@\w+|#\w+', '', text)
    text = re.sub(r'[^\w\s]', '', text)
    text = re.sub(r'\s+', ' ', text).strip()
    return text

def predict_emotion(text):
    """Predict emotion from text"""
    cleaned = clean_text(text)
    sequence = tokenizer.texts_to_sequences([cleaned])
    padded = pad_sequences(sequence, maxlen=100, padding='post')
    prediction = model.predict(padded, verbose=0)[0]
    pred_class = int(np.argmax(prediction))
    confidence = round(float(prediction[pred_class]) * 100, 2)
    return emotion_mapping.get(pred_class, "unknown"), confidence

@app.route('/api/predict', methods=['POST'])
def api_predict():
    load_assets()
    data = request.get_json()

    if not data or 'text' not in data:
        return jsonify({'error': 'No text provided'}), 400

    text_input = data['text']

    # Bulk text analysis
    if isinstance(text_input, list):
        results = []
        for txt in text_input:
            emotion, confidence = predict_emotion(txt)
            results.append({
                'text': txt,
                'emotion': emotion,
                'confidence': confidence
            })
        return jsonify({'results': results})

    # Single text analysis
    emotion, confidence = predict_emotion(text_input)
    return jsonify({
        'text': text_input,
        'emotion': emotion,
        'confidence': confidence
    })

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'ok'})

if __name__ == '__main__':
    print("Starting Flask server...")
    load_assets()
    app.run(host='0.0.0.0', port=5000, debug=False)
