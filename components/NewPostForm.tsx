import { FormEvent, useState } from "react";
import { createPost } from "../util/firebase";

import styles from "../styles/NewPostForm.module.css";

const NewPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault()
    
    if (title === "" || content === "") return;
    createPost("anonymous", title, content);
  };

  return (
    <form className={styles.postForm}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={submit}>Send post</button>
    </form>
  );
};

export default NewPostForm;
