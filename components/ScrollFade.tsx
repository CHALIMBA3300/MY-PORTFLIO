"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import styles from "./ScrollFade.module.css";

type ScrollFadeProps = {
  as: "header" | "section";
  id?: string;
  className?: string;
  children: ReactNode;
};

export default function ScrollFade({ as: Tag, id, className, children }: ScrollFadeProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      id={id}
      className={`${styles.scrollFade} ${visible ? styles.visible : ""} ${className ?? ""}`.trim()}
    >
      {children}
    </Tag>
  );
}
