from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
import pickle
import re
import numpy as np
from tensorflow.keras.preprocessing.sequence import pad_sequences

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the model and tokenizer
print("Loading model and tokenizer...")
model = tf.keras.models.load_model('best_model_lstm.h5')
with open('tokenizer.pickle', 'rb') as handle:
    tokenizer = pickle.load(handle)

# Emotion mapping (reverse of what was used during training)
emotion_mapping = {
    0: "sadness",
    1: "anger",
    2: "love",
    3: "surprise",
    4: "fear",
    5: "joy"
}

# Text preprocessing function (same as in training)
def clean_text(text):
    """Clean and preprocess text"""
    if isinstance(text, str):
        # Convert to lowercase
        text = text.lower()
        
        # Remove URLs
        text = re.sub(r'http\S+|www\S+|https\S+', '', text)
        
        # Remove user mentions and hashtags
        text = re.sub(r'@\w+|#\w+', '', text)
        
        # Remove non-alphanumeric characters
        text = re.sub(r'[^\w\s]', '', text)
        
        # Remove extra spaces
        text = re.sub(r'\s+', ' ', text).strip()
        
        return text
    return ""

# Predict emotion for a given text
def predict_emotion(text):
    cleaned = clean_text(text)
    sequence = tokenizer.texts_to_sequences([cleaned])
    padded = pad_sequences(sequence, maxlen=100, padding='post')
    prediction = model.predict(padded)[0]
    pred_class = np.argmax(prediction)
    confidence = float(prediction[pred_class]) * 100  # Convert to percentage
    return emotion_mapping.get(pred_class, "unknown"), confidence

@app.route('/api/predict', methods=['POST'])
def api_predict():
    data = request.json
    if not data or 'text' not in data:
        return jsonify({'error': 'No text provided'}), 400
    
    text = data['text']
    
    # For bulk analysis
    if isinstance(text, list):
        results = []
        for tweet in text:
            emotion, confidence = predict_emotion(tweet)
            results.append({
                'text': tweet,
                'emotion': emotion,
                'confidence': confidence
            })
        return jsonify({'results': results})
    
    # For single text analysis
    emotion, confidence = predict_emotion(text)
    return jsonify({
        'text': text,
        'emotion': emotion,
        'confidence': confidence
    })

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'ok'})

if __name__ == '__main__':
    print("Starting Flask server...")
    app.run(host='0.0.0.0', port=5000, debug=True)