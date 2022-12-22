import { useEffect, useState } from "react";
import Link from "next/link";
import PostBanner from "../../components/PostBanner";
import { getPosts } from "../../util/firebase";
import NewPostForm from "../../components/NewPostForm";
import { Post } from "../../types/types";
import styles from "../../styles/Home.module.css";

const RESULTS_PER_PAGE = 5;

type Props = {
  posts: Post[]
}

export default function Home({ posts }: Props) {
  const [formOpen, setFormOpen] = useState(false);
  const [pages, setPages] = useState<Array<Array<Post>>>([]); // Fetch results split into pages
  const [currentPage, setCurrentPage] = useState(0); // Indicates current page that client is on

  useEffect(() => {
    // Split posts to multiple pages
    const chunks = Array();
    for (let i = 0; i < posts.length; i += RESULTS_PER_PAGE) {
      const chunk = posts.slice(i, i + RESULTS_PER_PAGE);
      chunks.push(chunk);
    }
    setPages(chunks);
  }, [posts, setPages]);

  // Returns values for navigation links
  const navigationLinks = () => {
    const rtrn = [];
    const x = posts.length / RESULTS_PER_PAGE;

    for (let i = 0; i < x; i++) {
      rtrn.push(i);
    }
    return rtrn;
  };

  return (
    <div className={styles.container}>
      <ul className={styles.banner_container}>
        {pages.length
          ? pages[currentPage].map((post: Post) => (
              <Link href={`/posts/${post.id}`} key={post.id}>
                <li>
                  <PostBanner post={post} />
                </li>
              </Link>
            ))
          : ""}
      </ul>

      {/* Render navigation links for pages */}
      <div className={styles.link_row}>
        {navigationLinks().map((link) => (
          <button
            key={link}
            onClick={() => setCurrentPage(link)}
            className={currentPage === link ? styles.active : ""}
          >
            {link + 1}
          </button>
        ))}
      </div>

      {/* New Post Button */}
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

export async function getStaticProps(): Promise<any> {
  return {
    props: {
      posts: await getPosts(),
    },
  };
}
