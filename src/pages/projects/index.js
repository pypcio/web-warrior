import React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/projects.module.css";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Project({ data }) {
  console.log(data);
  const projects = data.projects.nodes;
  const contact = data.contact.siteMetadata.contact;
  console.log("data: ", projects);
  // console.log("image: ", image);
  // console.log(contact);

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites i've created</h3>
        <div className={styles.projects}>
          {projects.map((n, i) => (
            <Link key={n.id} to={`/notes/${n.frontmatter.slug}`}>
              <div>
                <GatsbyImage
                  image={getImage(
                    projects[i].frontmatter.thumb.childImageSharp
                  )}
                  alt={projects[i].frontmatter.slug}
                />
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
    projects: allMarkdownRemark {
      nodes {
        frontmatter {
          date
          title
          slug
          stack
          thumb {
            childImageSharp {
              gatsbyImageData(
                aspectRatio: 1.5
                placeholder: BLURRED
                blurredOptions: { width: 100 }
                transformOptions: { cropFocus: CENTER }
              )
            }
          }
          featuredImg {
            id
          }
        }
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`;
