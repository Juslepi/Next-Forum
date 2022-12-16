import React from "react";

import styles from "../styles/PostBanner.module.css";

type PostBannerProps = {
  post: any;
};

const PostBanner = ({ post }: PostBannerProps) => {
  const { id, poster, title, timestamp } = post;
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.avatar}>{poster[0]}</div>
      </div>
      <div className={styles.body}>
        <h6>{title}</h6>
        <p>{poster}</p>
      </div>
      {/* <p className={styles.timestamp}>Posted ago</p> */}
    </div>
  );
};

export default PostBanner;
