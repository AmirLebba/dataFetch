import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import "./App.css";
const fetchPostsByUser = async (userId) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};

const App = () => {
  const [userId, setUserId] = useState(1);
  const [posts, setPosts] = useState([]);
  const { isLoading, isError, data } = useQuery(["posts", userId], () =>
    fetchPostsByUser(userId)
  );

  useEffect(() => {
    if (data) {
      setPosts((prevPosts) => [...prevPosts, ...data]);
    }
  }, [data]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    setUserId((prevUserId) => prevUserId + 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isLoading && <p className="loading">Loading...</p>}
      {isError && <p className="error">Error fetching data</p>}
      {posts.map((post) => (
        <div key={post.id} className="post">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
      <div className="pagination">
        <button
          onClick={() => setUserId((prevUserId) => prevUserId - 1)}
          disabled={userId === 1}
        >
          Previous
        </button>
        <button onClick={() => setUserId((prevUserId) => prevUserId + 1)}>
          Next
        </button>
      </div>
    </>
  );
};

export default App;
