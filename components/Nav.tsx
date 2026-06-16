"use client";

import { useState, type ChangeEvent } from "react";
import styles from "./Nav.module.css";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  function handleThemeChange(e: ChangeEvent<HTMLInputElement>) {
    const checked = e.target.checked;
    setDarkMode(checked);
    document.body.classList.toggle("dark-mode", checked);
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <a href="#" className={styles.brand}>Charles Chalimba</a>
        <button
          className={styles.navToggle}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul id="nav-menu" className={menuOpen ? styles.open : undefined}>
          <li>
            <a href="#about" onClick={closeMenu}>About Me</a>
          </li>
          <li className={styles.dropdown}>
            <a href="#skills" onClick={closeMenu}>Skills ▾</a>
            <ul className={styles.dropdownContent}>
              <li><a href="#frontend" onClick={closeMenu}>Frontend</a></li>
              <li><a href="#backend" onClick={closeMenu}>Backend</a></li>
              <li><a href="#design" onClick={closeMenu}>UI/UX Design</a></li>
              <li><a href="#other-skills" onClick={closeMenu}>Other Skills</a></li>
            </ul>
          </li>
          <li>
            <a href="#works" onClick={closeMenu}>Projects</a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </li>
          <li>
            <label className={styles.switch}>
              <input
                type="checkbox"
                aria-label="Toggle dark/light mode"
                checked={darkMode}
                onChange={handleThemeChange}
              />
              <span className={styles.slider}></span>
            </label>
          </li>
        </ul>
      </div>
    </nav>
  );
}
