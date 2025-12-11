// Firebase 구성 (방금 받은 값 그대로 넣기)
const firebaseConfig = {
  apiKey: "AIzaSyBo1Ezg6tzCDDCGpBNWmJfCLe8hUsmLYi4",
  authDomain: "dreamyo-e42bb.firebaseapp.com",
  projectId: "dreamyo-e42bb",
  storageBucket: "dreamyo-e42bb.firebasestorage.app",
  messagingSenderId: "266927967076",
  appId: "1:266927967076:web:e5aca8599bc776b0774871",
  measurementId: "G-F6MPL89R9D"
};

// Firebase 초기화
firebase.initializeApp(firebaseConfig);

// 서비스 연결
const auth = firebase.auth();
const db = firebase.firestore();
