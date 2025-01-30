Using useEffect to Fetch Data
Question: Create a React component that fetches data from a public API (https://jsonplaceholder.typicode.com/posts) and displays the first post's title. Use the useEffect hook to fetch the data when the component mounts.
Hint: You may use fetch() to get the data, and store it in state.

```
import React, { useState, useEffect } from 'react';

const FetchData = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <div>
      {post ? (
        <h1>{post.title}</h1>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FetchData;
```
