"use client";
import React, { useState } from "react";

export default function AboutPage() {
  const [count, setCount] = useState(100);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-4xl">About us</h2>

      <p>
        Total count <span className="ml-4">{count}</span>
      </p>

      <button
        className="bg-orange-600 hover:bg-green-600 text-white p-2 mt-4 rounded-md "
        onClick={() => setCount(count + 10)}
      >
        {" "}
        Counted{" "}
      </button>
    </div>
  );
}
