import React, { useState, useEffect } from "react";
import StoryReel from "../StoryReel/StoryReel";
import MessageSender from "../MessageSender/MessageSender";
import Post from "../Post/Post";
import db from "../firebase";

import "./Feed.css";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          username={post.data.username}
          message={post.data.message}
          timestamp={post.data.timestamp}
          image={post.data.image}
        />
      ))}
    </div>
  );
}

export default Feed;
