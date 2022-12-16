// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDggKyTkEBHiA0JPOYyWQCtEdZvMr0EU_k",
  authDomain: "next-foru.firebaseapp.com",
  projectId: "next-foru",
  storageBucket: "next-foru.appspot.com",
  messagingSenderId: "1044102376720",
  appId: "1:1044102376720:web:2269bef89f9ad6a184c995",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function getPosts() {
  const posts = Array();
  const querySnapshot = await getDocs(collection(db, "posts"));
  querySnapshot.forEach((post) => {
    const data = post.data();
    const id = post.id;
    posts.push({ ...data, id });
  });

  return posts;
}
