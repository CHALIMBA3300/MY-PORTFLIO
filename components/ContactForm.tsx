"use client";

import type { FormEvent } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Thank you for reaching out! I will get back to you soon.");
    e.currentTarget.reset();
  }

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" rows={4} required />
      <button type="submit">Send Message</button>
    </form>
  );
}
