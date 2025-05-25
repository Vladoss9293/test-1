import Link from "next/link";
import React from "react";
import styles from '../styles/a.module.css'

export default function A({ text, href }) {
  return (
    <Link href={href}>
      <span className={styles.link}>{text}</span>
    </Link>
  );
}
