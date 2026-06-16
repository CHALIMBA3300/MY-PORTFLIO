"use client";

import { useEffect, useState } from "react";
import styles from "./Greeting.module.css";

export default function Greeting() {
  const [greeting, setGreeting] = useState("Hello");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting("Good morning");
    } else if (hour < 18) {
      setGreeting("Good afternoon");
    } else {
      setGreeting("Good evening");
    }
  }, []);

  return (
    <>
      <p className={styles.greeting}>{greeting}!</p>
      <h1>Charles Chalimba</h1>
    </>
  );
}
