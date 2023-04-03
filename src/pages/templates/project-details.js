import React from "react";
import Layout from "../components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import * as styles from "../styles/project-details.module.css";
export default function ProjectDetails({ data }) {
  const project = data.markdownRemark;
  console.log(project.html);
  return (
    <Layout>
      <div className={styles.details}>
        <h2>{project.frontmatter.title}</h2>
        <h3>{project.frontmatter.stack}</h3>
        <div className={styles.featured}>
          <GatsbyImage
            image={getImage(project.frontmatter.featuredImg.childImageSharp)}
            alt={"opis"}
          />
        </div>
        <div
          className={styles.html}
          dangerouslySetInnerHTML={{ __html: project.html }}
        />
      </div>
    </Layout>
  );
}
export const query = graphql`
  query ProjectPage($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            gatsbyImageData(
              blurredOptions: { width: 100 }
              placeholder: BLURRED
              transformOptions: { cropFocus: CENTER }
              formats: AUTO
            )
          }
        }
      }
    }
  }
`;
