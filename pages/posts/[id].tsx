import { getPosts } from "../../util/firebase";
import { getTimeDifferenceString } from "../../util/date";
import NewPostForm from "../../components/NewPostForm";

import styles from "./Post.module.css";

const Page = ({ post }: any) => {
  const { title, poster, timestamp, content } = post;
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <p>{poster}</p>
      <p>{getTimeDifferenceString(timestamp)}</p>
      <p>{content || ""}</p>
      <NewPostForm formOpen={true} />
    </div>
  );
};

export default Page;

export async function getStaticPaths(): Promise<any> {
  const posts = await getPosts();
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any): Promise<any> {
  const posts = await getPosts();
  const { id } = params;
  const post = posts.find((p) => p.id === id);
  
  return {
    props: {
      post: post,
    },
  };
}
