import * as React from "react";
import Layout from "./components/Layout";
import * as styles from "./styles/home.module.css";
import "./styles/global.css";
import { Link } from "gatsby";
export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX design & web developer based in Poland</p>
          <Link className={styles.btn} to="/projects">
            My portfolio project
          </Link>
        </div>
        <img
          src="/banner.png"
          className="img-fluid rounded-top"
          alt="side banner"
          style={{ maxWidth: "100%" }}
        />
      </section>
    </Layout>
  );
}
