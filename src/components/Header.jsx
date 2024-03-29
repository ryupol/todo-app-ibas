import React from "react";
import styles from "@/styles/Header.module.scss";
export default function Header() {
  const headerStyle = {
    padding: "20px 0",
    lineHeight: "1.5em",
    color: "#aeadad",
    textAlign: "center",
  };
  return (
    <header style={headerStyle} className={styles.header}>
      <h1>todos</h1>
      <p>Items will presist in the browser local storage</p>
    </header>
  );
}
