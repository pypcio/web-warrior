import React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/projects.module.css";

export default function Project() {
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites i've created</h3>
      </div>
    </Layout>
  );
}
