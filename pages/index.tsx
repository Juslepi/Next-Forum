import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PostBanner from "../components/PostBanner";
import { getPosts } from "../util/firebase";

import styles from "../styles/Home.module.css";

export default function Home() {
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getPosts();

      setPosts(res);
    };

    fetchPosts();
  }, []);

  return (
    <div className={styles.container}>
      <Navbar />
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}><PostBanner post={post}/></li>
        ))}
      </ul>
    </div>
  );
}
