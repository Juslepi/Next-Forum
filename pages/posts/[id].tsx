import { getPosts } from "../../util/firebase";
import NewPostForm from "../../components/NewPostForm";

import styles from "./Post.module.css";

const Page = ({ post }: any) => {
  const { title, poster, timestamp, content } = post;
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <p>{poster}</p>
      <p>{timestamp}</p>
      <p>{content || ""}</p>
      <NewPostForm formOpen={true} />
    </div>
  );
};

export default Page;

export async function getStaticPaths(): Promise<any> {
  const posts = await getPosts();
  console.log(posts);

  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any): Promise<any> {
  const posts = await getPosts();
  console.log(posts);

  const { id } = params;
  const post = posts.find((p) => p.id === id);

  return {
    props: {
      post: post,
    },
  };
}