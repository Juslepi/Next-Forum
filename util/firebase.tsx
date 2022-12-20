// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDocs,
  collection,
  serverTimestamp,
  addDoc,
  orderBy,
  query  
} from "firebase/firestore";
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
const postCollectionRef = collection(db, "posts");

export async function getPosts() {
  const posts = Array();

  const docs = query(postCollectionRef, orderBy("timestamp", "desc"))
  const querySnapshot = await getDocs(docs);

  querySnapshot.forEach((post) => {
    const data = post.data();
    const id = post.id;
    data.timestamp = data.timestamp.toDate().toString()
    posts.push({ ...data, id });
  });

  return posts;
}

export async function createPost(poster: string, title: string, content: string) {
  const newPost = {
    poster,
    content,
    title,
    timestamp: serverTimestamp(),
    comments: Array()
  };
  await addDoc(postCollectionRef, newPost)
}
