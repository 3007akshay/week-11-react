import React from "react";
import { useState, useEffect } from "react";

export default function Custom() {
  const [post, setPost] = useState({});

  async function getPost() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const json = await response.json();
    setPost(json);
  }

  useEffect(() => {
    getPost();
  });

  return <>{post.title}</>;
}
