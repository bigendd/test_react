import React, { useState } from "react";

export const PostForm = ({ onPostCreated }) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && body) {
            const newPost = { title, body };
            if (onPostCreated) onPostCreated(newPost);
            setTitle("");
            setBody("");
            setMessage("Post créé avec succès !");
        }
    };

    return (
        <div className="post-form">
            <h2>Créer un nouveau post</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Titre:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="body">Contenu:</label>
                    <textarea
                        id="body"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit">Publier</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};
