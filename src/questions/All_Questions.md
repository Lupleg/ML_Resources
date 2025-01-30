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
