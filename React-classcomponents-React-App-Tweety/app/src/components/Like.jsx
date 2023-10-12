import React, { useState, useEffect } from "react";
import CustomInput from "./Input";

const LikeApp = () => {
  const initiallikes = JSON.parse(localStorage.getItem("likes"));
  const [likes, setlikes] = useState(initiallikes);
  const [text, setText] = useState("");
  const [editIndex, setEditIndex] = useState(0);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    localStorage.setItem("likes", JSON.stringify(likes));
  });

  const addlike = () => {
    {
      const newlike = {
        id: new Date().getTime(),
        text: text,
      };
      setlikes([...likes, newlike]);
      setText("");
    }
  };

  const updatelike = (id) => {
    if (editText !== "") {
      const updatedlikes = likes.map((like) =>
        like.id === id ? { ...like, text: editText } : like
      );

      setlikes(updatedlikes);
      setEditIndex();
      setEditText("");
    }
  };

  const deletelike = (id) => {
    const updatedlikes = likes.filter((like) => like.id !== id);
    setlikes(updatedlikes);
  };
  function onchange(e) {
    setText(e.target.value);
  }

  return (
    <div className="mainDiv">
      <h1>Like App</h1>
      <CustomInput
        placeholder={"Enter the likes here"}
        title={"Likes"}
        onchange={onchange}
        value={text}
        name={"color"}
        type={"text"}
        className={"Addinput"}
      />
      <button onClick={addlike} className="addbtn">
        Add
      </button>
      <div className="returnDiv">
        <ul>
          {likes.map((like) => (
            <li key={like.id}>
              {editIndex === like.id ? (
                <div>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                  <button
                    onClick={() => updatelike(like.id)}
                    className="update-btn"
                  >
                    Update
                  </button>
                  <button onClick={() => setEditIndex()} className="cancel-btn">
                    Cancel
                  </button>
                </div>
              ) : (
                <div>
                  <p>{like.text}</p>
                  <button
                    onClick={() => setEditIndex(like.id)}
                    className="edit-btn"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deletelike(like.id)}
                    className="del-btn"
                  >
                    Delete
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LikeApp;
