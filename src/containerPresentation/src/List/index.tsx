import { useState, useEffect } from "react";

export const List = () => {
  const data = usePosts();
  return (
    <div>
      <h1>List of Titles</h1>
      <ul>
        {data.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
    </div>
  );
};

const usePosts = () => {
  const [posts, setPosts] = useState<string[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        const titles = data.map((item: { title: string }) => item.title);
        setPosts(titles);
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return posts;
};
