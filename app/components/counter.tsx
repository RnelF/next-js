"use client";
import { useState } from "react";
import { auth, useUser } from "@clerk/nextjs/server";
import { useAuth } from "@clerk/nextjs";

export const Counter = () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth();

  console.log("Counter Component");
  const [count, setCount] = useState(0);

  if (!isLoaded || !userId) {
    return null;
  }

  return (
    <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
  );
};
