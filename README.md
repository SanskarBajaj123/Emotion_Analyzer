##🧠 Real-Time Emotion Detection from Tweets
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/SanskarBajaj123/Sentiment_Analyzer/issues)

> Instantly analyze the sentiment of any text with machine learning magic! ✨

## 🌟 [Try it live!](https://emotion-analyzer-site.onrender.com/)


## 📝 Overview

**Emotion_Analyzer** is a powerful and intuitive full-stack web app that classifies the emotion expressed in a tweet into six categories: Happy, Sad, Angry, Fear, Surprise, and Disgust. It leverages a **BiLSTM deep learning model**, trained on labeled Twitter data, and features a modern **React.js frontend** with a **Flask API** backend. The app is deployed on **Render** for real-time accessibility.

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
- Trained on a labeled Twitter dataset with six emotional categories.

### 🧹 Preprocessing Pipeline
- Removes special characters and URLs  
- Converts text to lowercase  
- Applies stemming (via NLTK)  
- Pads sequences for LSTM input  
- Encodes labels using one-hot encoding  

### 🧠 Emotion Classification
- BiLSTM model with Embedding and Dropout layers  
- Adam optimizer with categorical cross-entropy loss  
- Evaluated using K-Fold Cross-Validation  
- Compared with Random Forest and XGBoost for benchmarking  

### ⚡ Real-Time Prediction
- Flask REST API receives tweet text and returns emotion  
- React.js frontend displays the prediction to users instantly  

---

## 🧪 Model Performance

| Model         | Accuracy |
|---------------|----------|
| Random Forest | 87.35%   |
| XGBoost       | 88.05%   |
| **BiLSTM**    | **91.30%** ✅

---

## 🚀 Installation & Usage

### ✅ Prerequisites
- Python 3.11+  
- Node.js and npm  

### 📥 Clone the Repository
```bash
git clone https://github.com/SanskarBajaj123/Emotion_Analyzer.git
cd Emotion_Analyzer
```

### ⚙️ Backend Setup (Flask)
```bash
cd backend
pip install -r requirements.txt
python app.py
```

### 💻 Frontend Setup (React)
```bash
cd frontend
npm install
npm start
```

### ▶️ Running the Flask Server
```bash
python app.py
```
> API will run at: `http://localhost:5000`  
> Frontend will run at: `http://localhost:3000`

---




## 🔮 Future Improvements

- 🌈 Multi-language NLP support  
- 📊 Sentiment and emotion analytics dashboard  
- 📱 Native mobile app with React Native  
- 🧠 Enhanced accuracy with transformer models like BERT  
- 🔌 Real-time tweet streaming via Twitter API  
- 🧵 Context-aware emotion detection  

---

## 🤝 Contributing

Contributions are welcome and appreciated!  
Here’s how to contribute:

1. Fork the repository  
2. Create your branch:  
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes:  
   ```bash
   git commit -m 'Add AmazingFeature'
   ```
4. Push to the branch:  
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request 🚀

---

## 📄 License

This project is licensed under the **MIT License**.  
See the `LICENSE` file for more details.

---

## 👨‍💻 Author

**Sanskar Vinodkumar Bajaj**  
- 🔗 [GitHub](https://github.com/SanskarBajaj123)  
- 🔗 [LinkedIn](https://www.linkedin.com/in/sanskar-bajaj8377/)

---

⭐️ *If you found this project helpful, feel free to give it a star and share it with others!*
