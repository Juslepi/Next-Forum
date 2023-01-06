import { Dispatch, FormEvent, SetStateAction, useState, useContext } from "react";
import { createPost, createComment } from "../util/firebase";
import { useUserContext } from "../context/userContext";

import styles from "../styles/NewPostForm.module.css";

type NewPostFormProps = {
  formOpen: boolean;
  setFormOpen?: Dispatch<SetStateAction<boolean>>;
  commenting?: boolean;  
  postToCommentId?: string;
};

const NewPostForm = ({
  formOpen,
  setFormOpen,
  commenting, // Indicates if the form responds to existing post with a comment
  postToCommentId,
}: NewPostFormProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { user } = useUserContext();

  // Used for submit event handling if commenting prop passed in as false
  const submitPost = async (e: FormEvent) => {
    e.preventDefault();
    if (title === "" || content === "") return;

    await createPost(user || "anonymous", title, content);
    setTitle("");
    setContent("");
    location.reload();
  };

  // Used for submit event handling if commenting prop passed in as true
  const submitComment = async (e: FormEvent) => {
    e.preventDefault();
    if (title === "" || content === "") return;
    if (!postToCommentId) return

    await createComment(user || "anonymous", title, content, postToCommentId);
    setTitle("");
    setContent("");
    location.reload();
  };

  // Closes form if setFormOpen is passed as prop
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

          {/* Close button for form if the form is toggleable */}
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
