import * as React from "react";
import Layout from "./components/Layout";
import * as styles from "./styles/home.module.css";
import "./styles/global.css";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Home({ data }) {
  // console.log("obraz", data);
  const image = getImage(data.file.childImageSharp);
  console.log("obraz", image);
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
        <GatsbyImage image={image} alt="blog-logo" />
      </section>
    </Layout>
  );
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        gatsbyImageData(
          aspectRatio: 1
          blurredOptions: { width: 100 }
          placeholder: BLURRED
          transformOptions: { cropFocus: CENTER }
        )
      }
    }
  }
`;
