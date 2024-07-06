// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDWIIqLBqX6aorZHo4B1kRmp9DXxyOZTzM',
  authDomain: 'gateway-dynamic.firebaseapp.com',
  projectId: 'gateway-dynamic',
  storageBucket: 'gateway-dynamic.appspot.com',
  messagingSenderId: '489587285146',
  appId: '1:489587285146:web:5a5804d6b65a645465d323',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
