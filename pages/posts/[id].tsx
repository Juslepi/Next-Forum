import { getPosts } from "../../util/firebase";
import { getTimeDifferenceString } from "../../util/date";
import NewPostForm from "../../components/NewPostForm";
import { Post } from "../../types/types";

import styles from "./Post.module.css";

type Props = {
  post: Post;
};

const Page = ({ post }: Props) => {
  const { title, poster, timestamp, content, id, comments } = post;

  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <p>{poster}</p>
      <p>{getTimeDifferenceString(timestamp)}</p>
      <p>{content || ""}</p>
      <NewPostForm formOpen={true} commenting={true} postToCommentId={id} />
      <div className={styles.comment_container}>
        <h3>Comments</h3>
        {comments?.map((comment, i) => (
          <div key={i} className={styles.comment}>
            <h5>{comment.title}</h5>
            <p>{comment.content}</p>
          </div>
        ))}
      </div>
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
