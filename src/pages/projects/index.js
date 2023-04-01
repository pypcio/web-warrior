import React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/projects.module.css";
import { graphql, Link } from "gatsby";

export default function Project({ data }) {
  console.log(data);
  const projects = data.projects.nodes;
  const contact = data.contact.siteMetadata.contact;
  console.log(projects);
  console.log(contact);

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites i've created</h3>
        <div className={styles.projects}>
          {projects.map((n) => (
            <Link key={n.id} to={`/notes/${n.frontmatter.slug}`}>
              <div>
                <h3>{n.frontmatter.title}</h3>
                <p>{n.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Like what you see huh? Email me {contact}</p>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ProjectPage {
    projects: allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date
          slug
          stack
          title
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`;
