import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { createPost, createComment } from "../util/firebase";

import styles from "../styles/NewPostForm.module.css";

type NewPostFormProps = {
  formOpen: boolean;
  setFormOpen?: Dispatch<SetStateAction<boolean>>;
  commenting?: boolean;
  postToCommentId: string;
};

const NewPostForm = ({
  formOpen,
  setFormOpen,
  commenting = false,
  postToCommentId,
}: NewPostFormProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitPost = async (e: FormEvent) => {
    e.preventDefault();
    if (title === "" || content === "") return;

    await createPost("anonymous", title, content);
    setTitle("");
    setContent("");
    location.reload();
  };

  const submitComment = async (e: FormEvent) => {
    e.preventDefault();
    if (title === "" || content === "") return;

    await createComment("anonymous", title, content, postToCommentId);
    setTitle("");
    setContent("");
    location.reload();
  };

  const closeForm = (e: FormEvent) => {
    e.preventDefault();
    if (setFormOpen) setFormOpen(false);
  };

  return (
    <div className={`${styles.container} ${!formOpen ? "hidden" : ""}`}>
      <form className={styles.postForm}>
        <input
          autoFocus
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post Title"
          required
        />
        <textarea
          draggable="false"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Your post here"
        />
        <div className={styles.buttonRow}>
          <button onClick={commenting ? submitComment : submitPost}>
            Send post
          </button>
          {setFormOpen ? (
            <button id={styles.closeButton} onClick={closeForm}>
              Close
            </button>
          ) : (
            ""
          )}
        </div>
      </form>
    </div>
  );
};

export default NewPostForm;
