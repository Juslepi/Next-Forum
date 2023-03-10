import { Comment } from "../types/types";

import styles from "./Comment.module.css";

type CommentProps = {
  comment: Comment,
}

const Comment = ({ comment }: CommentProps) => {
  return (
    <div className={styles.comment}>
      <h5>{comment.title}</h5>
      <p>{comment.content}</p>
      <p className={styles.footer}>Posted by {comment.poster} </p>
    </div>
  );
};

export default Comment;
