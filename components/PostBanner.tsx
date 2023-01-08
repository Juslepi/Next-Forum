import { getTimeDifferenceString } from "../util/date";
import { Post } from "../types/types";

import styles from "./PostBanner.module.css";

type PostBannerProps = {
  post: Post,
};

const PostBanner = ({ post }: PostBannerProps) => {
  const { poster, title, timestamp, comments } = post;
  const replyCount = comments?.length;
  
  console.log(post);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.avatar}>{poster[0]}</div>
      </div>
      <div className={styles.body}>
        <h6>{title}</h6>
        <p>{poster}</p>
        <p className={styles.timestamp}>{getTimeDifferenceString(timestamp)}</p>
        <p>{replyCount === 1 ? "1 reply" : `${replyCount} replies`}</p>
      </div>
    </div>
  );
};

export default PostBanner;
