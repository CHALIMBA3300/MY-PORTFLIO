import Image from "next/image";
import Nav from "@/components/Nav";
import Greeting from "@/components/Greeting";
import ScrollFade from "@/components/ScrollFade";
import ContactForm from "@/components/ContactForm";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Nav />
      <ScrollFade as="header" className={styles.hero}>
        <div className={styles.heroContent}>
          <Image
            src="/profile.jpg"
            alt="Charles Chalimba"
            width={810}
            height={1080}
            className={styles.profileImg}
            priority
          />
          <Greeting />
          <p className={styles.subtitle}>Website Developer &amp; UI/UX Designer</p>
        </div>
      </ScrollFade>

      <ScrollFade as="section" id="about" className={styles.card}>
        <h2>About Me</h2>
        <p>
          Charles Chalimba is a website developer, UI/UX designer, and entrepreneur with a passion
          for creating meaningful digital experiences. A graduate of Zambia University College of
          Technology, he combines technical expertise with creative problem-solving to build
          user-centered products. As the founder of Graphic Gold, he brings the same innovation and
          attention to detail into the fashion space. Charles is known for his curiosity,
          adaptability, and commitment to continuous growth, both professionally and personally.
        </p>
      </ScrollFade>

      <ScrollFade as="section" id="skills" className={styles.card}>
        <h2>Skills</h2>
        <div className={styles.skillsGrid}>
          <div>
            <h3 id="frontend">Frontend</h3>
            <ul>
              <li>HTML5, CSS3, JavaScript</li>
              <li>React, Vue</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          <div>
            <h3 id="backend">Backend</h3>
            <ul>
              <li>Node.js, Express</li>
              <li>Python, Django</li>
              <li>REST APIs</li>
            </ul>
          </div>
          <div>
            <h3 id="design">UI/UX Design</h3>
            <ul>
              <li>Figma, Adobe XD</li>
              <li>Wireframing &amp; Prototyping</li>
              <li>User Research</li>
            </ul>
          </div>
          <div>
            <h3 id="other-skills">Other Skills</h3>
            <ul>
              <li>Microsoft SQL Server &amp; SQL</li>
              <li>IT Support</li>
              <li>Project Management</li>
              <li>Technical Writing</li>
            </ul>
          </div>
        </div>
      </ScrollFade>

      <ScrollFade as="section" id="works" className={styles.card}>
        <h2>Projects</h2>
        <div className={styles.projectsGrid}>
          <div>
            <h3>Frontend Projects</h3>
            <ul className={styles.projectList}>
              <li>
                <span className={styles.projectTitle}>Portfolio Website</span>
                <p className={styles.projectDesc}>
                  A modern, responsive personal portfolio built with HTML, CSS, and JavaScript.
                </p>
                <a href="#" className={styles.projectLink} target="_blank">View Demo</a>
              </li>
              <li>
                <span className={styles.projectTitle}>React Task Manager</span>
                <p className={styles.projectDesc}>
                  A task management app built with React and styled-components.
                </p>
                <a href="#" className={styles.projectLink} target="_blank">View Demo</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Backend Projects</h3>
            <ul className={styles.projectList}>
              <li>
                <span className={styles.projectTitle}>RESTful API</span>
                <p className={styles.projectDesc}>
                  A REST API for a blog platform using Node.js, Express, and MongoDB.
                </p>
                <a href="#" className={styles.projectLink} target="_blank">View Code</a>
              </li>
              <li>
                <span className={styles.projectTitle}>Django E-commerce</span>
                <p className={styles.projectDesc}>
                  An e-commerce backend built with Django and PostgreSQL.
                </p>
                <a href="#" className={styles.projectLink} target="_blank">View Code</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>UI/UX Design Projects</h3>
            <div className={styles.uiuxGallery}>
              <h4>Design Samples</h4>
              <div className={styles.uiuxScreenshots}>
                <Image src="/resturant.png" alt="UI/UX Screenshot 1" width={542} height={898} />
                <Image src="/museum.png" alt="UI/UX Screenshot 2" width={1918} height={967} />
                <Image src="/fashion.png" alt="UI/UX Screenshot 3" width={1882} height={972} />
                <Image src="/bookworm.png" alt="UI/UX Screenshot 4" width={575} height={890} />
              </div>
            </div>
          </div>
        </div>
      </ScrollFade>

      <ScrollFade as="section" id="contact" className={styles.card}>
        <h2>Contact</h2>
        <ContactForm />
        <p className={styles.contactNote}>
          Or email:{" "}
          <a href="mailto:chalimbacharles44@gmail.com" className={styles.projectLink}>
            chalimbacharles44@gmail.com
          </a>
        </p>
      </ScrollFade>

      <footer className={styles.footer}>
        <div>
          <p>© 2026 Charles Chalimba. All rights reserved.</p>
          <p>
            <a
              href="https://www.linkedin.com/in/charles-chalimba-36719b272/"
              target="_blank"
              rel="noopener"
              className={styles.footerLink}
            >
              LinkedIn
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/CHALIMBA3300"
              target="_blank"
              rel="noopener"
              className={styles.footerLink}
            >
              GitHub
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
