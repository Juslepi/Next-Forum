import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import PostBanner from "../../components/PostBanner";
import { getPosts } from "../../util/firebase";
import NewPostForm from "../../components/NewPostForm";
import styles from "../../styles/Home.module.css";

export default function Home({ posts }: any) {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className={styles.container}>
      <ul>
        {posts.map((post: any) => (
          <Link href={`/posts/${post.id}`} key={post.id}>
            <li>
              <PostBanner post={post} />
            </li>
          </Link>
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
      <div className={styles.form}>
        <NewPostForm formOpen={formOpen} setFormOpen={setFormOpen} />
      </div>
    </div>
  );
}

export async function getStaticProps(context: any): Promise<any> {
  return {
    props: {
      posts: await getPosts(),
    },
  };
}
