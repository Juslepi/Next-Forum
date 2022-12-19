import styles from "../styles/PostBanner.module.css";

type PostBannerProps = {
  post: any;
};

const PostBanner = ({ post }: PostBannerProps) => {
  const { poster, title, timestamp } = post;
  
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.header}>
          <div className={styles.avatar}>{poster[0]}</div>
        </div>
        <div className={styles.body}>
          <h6>{title}</h6>
          <p>{poster}</p>
        </div>
      </div>
      <div className={styles.right}>
        <p className={styles.timestamp}>{timestamp} Posted ago</p>
      </div>
    </div>
  );
};

export default PostBanner;
