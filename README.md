Got it! Here are more practical questions with coding examples for React hooks:

## 1. Using useState to Toggle a Button

Question: Write a simple React component that toggles a button's text between "ON" and "OFF" each time it's clicked using the useState hook.
Hint: You'll need to maintain a state variable that tracks whether the button is on or off.
jsx
Copy
import React, { useState } from 'react';

const ToggleButton = () => {
const [isOn, setIsOn] = useState(false);

const toggleButton = () => setIsOn(!isOn);

return (
<button onClick={toggleButton}>
{isOn ? 'ON' : 'OFF'}
</button>
);
};

export default ToggleButton; 2. Using useEffect to Fetch Data
Question: Create a React component that fetches data from a public API (https://jsonplaceholder.typicode.com/posts) and displays the first post's title. Use the useEffect hook to fetch the data when the component mounts.
Hint: You may use fetch() to get the data, and store it in state.
jsx
Copy
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

export default FetchData; 3. Using useContext to Share State
Question: Create a context to manage a user's theme (either "light" or "dark"). Use useContext to allow child components to access the current theme and update it from a button in the parent component.
Hint: You'll need to create a context provider and consumer, then use useContext to consume the current theme.
jsx
Copy
import React, { createContext, useState, useContext } from 'react';

// Create Context
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
const [theme, setTheme] = useState('light');

const toggleTheme = () => setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));

return (
<ThemeContext.Provider value={{ theme, toggleTheme }}>
{children}
</ThemeContext.Provider>
);
};

const ThemeButton = () => {
const { theme, toggleTheme } = useContext(ThemeContext);

return (
<div>
<p>Current theme: {theme}</p>
<button onClick={toggleTheme}>Toggle Theme</button>
</div>
);
};

const App = () => (
<ThemeProvider>
<ThemeButton />
</ThemeProvider>
);

export default App; 4. Using useRef to Track Previous State
Question: Use the useRef hook to track the previous value of a counter (e.g., if the counter goes from 2 to 3, you should be able to display "Previous: 2" and "Current: 3").
Hint: useRef doesn't cause re-renders, so it's perfect for storing the previous value.
jsx
Copy
import React, { useState, useEffect, useRef } from 'react';

const Counter = () => {
const [count, setCount] = useState(0);
const prevCountRef = useRef();

// Update the ref value to track previous count after render
useEffect(() => {
prevCountRef.current = count;
}, [count]);

const prevCount = prevCountRef.current;

return (
<div>
<p>Previous count: {prevCount}</p>
<p>Current count: {count}</p>
<button onClick={() => setCount(count + 1)}>Increment</button>
</div>
);
};

export default Counter;
These examples should give you a solid understanding of how to work with React hooks in real-world scenarios! Let me know if you'd like further explanations.
