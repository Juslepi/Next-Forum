import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { createPost } from "../util/firebase";

import styles from "../styles/NewPostForm.module.css";

type NewPostFormProps = {
  formOpen: boolean;
  setFormOpen?: Dispatch<SetStateAction<boolean>>;
};

const NewPostForm = ({ formOpen, setFormOpen }: NewPostFormProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();

    if (title === "" || content === "") return;
    createPost("anonymous", title, content);
  };

  const closeForm = (e: FormEvent) => {
    e.preventDefault();
    if (setFormOpen) setFormOpen(false);
  };

  return (
    <div className={`${styles.container} ${!formOpen ? "hidden" : ""}`}>
      <form className={styles.postForm}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post Title"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Your post here"
        />
        <div className={styles.buttonRow}>
          <button onClick={submit}>Send post</button>
          <button id={styles.closeButton} onClick={closeForm}>Close</button>
        </div>
      </form>
    </div>
  );
};

export default NewPostForm;
