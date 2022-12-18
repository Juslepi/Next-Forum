import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import PostBanner from "../../components/PostBanner";
import { getPosts } from "../../util/firebase";
import NewPostForm from "../../components/NewPostForm";
import styles from "../../styles/Home.module.css";

export default function Home() {
  const [posts, setPosts] = useState<any>([]);
  const [formOpen, setFormOpen] = useState(false);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getPosts();
      setPosts(res);
    };

    fetchPosts();
  }, []);

  return (
    <div className={styles.container}>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <PostBanner post={post} />
          </li>
        ))}
      </ul>
      <div className={styles.toolbar}>
        <button
          className={formOpen ? "hidden" : ""}
          onClick={() => setFormOpen(true)}
        >
          New Post
        </button>
      </div>
      <NewPostForm formOpen={formOpen} setFormOpen={setFormOpen} />
    </div>
  );
}
