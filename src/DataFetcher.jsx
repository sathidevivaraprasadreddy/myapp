import React, { useState, useEffect } from "react";

function DataFetcher() {
  const [posts, setPosts] = useState([]);
  // To store fetched posts

  const [loading, setLoading] = useState(true);
  // To track loading status

  const [error, setError] = useState(null);
  // To capture errors

  useEffect(() => {
    // Fetch data on component mount
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Empty dependency array means this runs once after the first render

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>b. Posts</h2>

      <ul>
        {posts.slice(0, 10).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetcher;