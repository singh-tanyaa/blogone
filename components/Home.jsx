"use client";

import axios from "axios";
import Link from "next/link";
import { BookOpenText } from "lucide-react";
import { useEffect, useState } from "react";
import styles from "./home.module.css";

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function getBlogs() {
      try {
        const response = await axios.get("https://apiblog.peymagen.com/api/blog/");
        setBlogs(response.data.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }
    getBlogs();
  }, []);

  return (
    <div className={styles.container}>
      <section className={styles.banner}>
        <img src="/banner.png" alt="Banner" className={styles.bannerImage} />
        <div className={styles.bannerContent}>
          <span className={styles.categoryTag}>Technology</span>
          <span className={styles.title}>The Impact of Technology on the Workplace</span>
        </div>
      </section>

      <section className={styles.latestPosts}>
        <div className={styles.postsHeader}>
          <span className={styles.postsTitle}>Latest Posts:</span>
        </div>
        <div className={styles.postList}>
          {blogs.map((item) => (
            <div className={styles.postCard} key={item.id}>
              <img src="/blg-image-1.png" alt="blog" className={styles.postImage} />
              <div className={styles.postDetails}>
                <span className={styles.postCategory}>{item.category}</span>
                <span className={styles.postTitle}>{item.title}</span>
                <span className={styles.postDescription}>{item.description}</span>
              </div>
              <div className={styles.readMoreButton}>
                <a href={`/blog/${item.id}`} className={styles.readMoreLink}>
                  Read More
                  <BookOpenText size={18} className={styles.readMoreIcon} />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.viewMoreButton}>
          <button className={styles.viewMoreLink}><Link href="/blogs">View More</Link></button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

