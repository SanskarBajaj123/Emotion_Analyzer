# 🧠 EmotiSense – Real-Time Emotion Detection from Tweets
MIT License • Contributions Welcome

Instantly detect the emotional tone behind tweets using deep learning magic! ✨

---

🌟 **[Try it Live!](https://your-render-url.com)** *(replace with your actual Render link)*

---

## 📝 Overview

**EmotiSense** is a powerful and intuitive full-stack web app that classifies the emotion expressed in a tweet into six categories: Happy, Sad, Angry, Fear, Surprise, and Disgust. It leverages a **BiLSTM deep learning model**, trained on labeled Twitter data, and features a modern **React.js frontend** with a **Flask API** backend. The app is deployed on **Render** for real-time accessibility.

---

## ✨ Features

- 🔍 **Real-Time Analysis** – Instant emotion detection for any tweet or short text  
- 🧠 **Deep Learning Model** – BiLSTM trained with 91.30% accuracy  
- 📊 **Model Benchmarking** – Compared with Random Forest (87.35%) and XGBoost (88.05%)  
- 🔄 **REST API** – Clean Flask API for easy backend integration  
- 📱 **Responsive Design** – Seamless experience across devices  
- 🚀 **Deployed on Render** – Scalable and accessible full-stack deployment  
- 🖥️ **User-Friendly UI** – Built with React.js for smooth interaction  
- ⚡ **Efficient NLP Preprocessing** – Tokenization, stemming, padding, label encoding  

---

## 🛠️ Technologies Used

### 🔧 Backend
- Python  
- Flask  
- TensorFlow & Keras  
- NLTK  
- Scikit-learn  

### 💻 Frontend
- React.js  
- Axios  
- HTML/CSS  

### ☁️ Deployment
- Render  

---

## 🔧 How It Works

### 📂 Data Foundation
- Trained on labeled Twitter dataset with six emotional categories.

### 🧹 Preprocessing Pipeline
- Removes special characters and URLs  
- Converts to lowercase  
- Applies stemming (NLTK)  
- Pads sequences for LSTM input  
- Encodes labels using one-hot encoding  

### 🧠 Emotion Classification
- BiLSTM model with Embedding and Dropout layers  
- Adam optimizer and categorical cross-entropy loss  
- Evaluated using K-Fold Cross-Validation  
- Benchmarked against Random Forest and XGBoost  

### ⚡ Real-Time Prediction
- Flask REST API receives tweet text and returns emotion  
- React.js frontend displays prediction to user instantly  

---

## 🧪 Model Performance

| Model         | Accuracy |
|---------------|----------|
| Random Forest | 87.35%   |
| XGBoost       | 88.05%   |
| **BiLSTM**    | **91.30%** ✅

---

## 🚀 Installation

### ✅ Prerequisites
- Python 3.11+  
- Node.js and npm  

### 📥 Clone the Repository
```bash
git clone https://github.com/SanskarBajaj123/EmotiSense.git
cd EmotiSense
⚙️ Backend Setup (Flask)
bash
Copy
Edit
cd backend
pip install -r requirements.txt
python app.py
💻 Frontend Setup (React)
bash
Copy
Edit
cd frontend
npm install
npm start
💻 Usage
▶️ Running the Flask Server
bash
Copy
Edit
python app.py
API will run at http://localhost:5000

🌐 Frontend Access
Go to http://localhost:3000 to use the web interface.

🔌 API Endpoint
POST /predict
Request:

json
Copy
Edit
{
  "text": "I'm feeling great today!"
}
Response:

json
Copy
Edit
{
  "emotion": "Happy"
}
Example API Request in Python
python
Copy
Edit
import requests
response = requests.post(
    "http://localhost:5000/predict",
    json={"text": "I really enjoyed this movie!"}
)
print(response.json())
🔮 Future Improvements
🌈 Multi-language NLP support

📊 Sentiment and emotion analytics dashboard

📱 Native mobile app with React Native

🧠 Use transformer-based models (e.g., BERT)

🔌 Real-time tweet streaming via Twitter API

🧵 Context-aware emotion detection

🤝 Contributing
Contributions are welcome!

Fork the repository

Create your branch: git checkout -b feature/AmazingFeature

Commit your changes: git commit -m 'Add AmazingFeature'

Push to the branch: git push origin feature/AmazingFeature

Open a pull request 🚀

📄 License
Distributed under the MIT License.
See LICENSE file for more information.

👨‍💻 Author
Sanskar Vinodkumar Bajaj
🔗 GitHub
🔗 LinkedIn

