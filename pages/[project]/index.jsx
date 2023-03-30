/* eslint-disable @next/next/no-img-element */
import styles from "@styles/Project.module.scss";
import { ColorExtractor } from "react-color-extractor";
import { useEffect, useState } from "react";

export default function Project({ project }) {
  const [colors, setColors] = useState([]);

  const getColors = (colors) => setColors((prev) => [...prev, ...colors]);

  useEffect(() => {
    // console.log(project);
    console.log(colors);
    const imgs = document.querySelectorAll("img");
    imgs.forEach((img) => {
      img.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
    });
  }, [colors]);
  return (
    <main className={styles.Project}>
      <div className={styles.ProjectInner}>
        <h3>{project.categoryTag}</h3>
        <h1 className={styles.MainHeader}>{project.title}</h1>

        <ColorExtractor getColors={getColors}>
          <img
            className={styles.MainImage}
            src={project.img1}
            alt='Header Image'
          />
        </ColorExtractor>

        <p className={styles.TextBlock}>{project.body1}</p>

        {project.img2 && (
          <img
            className={styles.MainImage}
            src={project.img2}
            alt='Example Image'
          />
        )}

        {project.heading2 && project.body2 && (
          <div className={styles.TextBlock}>
            <h1>{project.heading2}</h1>
            <p>{project.body2}</p>
          </div>
        )}

        {project.img3 && project.img4 && project.img5 && (
          <div className={styles.ImageList}>
            <img src={project.img3} alt='Example Image' />
            <img src={project.img4} alt='Example Image' />
            <img src={project.img5} alt='Example Image' />
          </div>
        )}

        {project.heading3 && project.body3 && (
          <div className={styles.TextBlock}>
            <h1>{project.heading3}</h1>
            <p>{project.body3}</p>
          </div>
        )}

        {project.img6 && project.img7 && project.img8 && project.img9 && (
          <div className={styles.ImageGrid}>
            <img src='/monday.jpg' alt='Example Image' />
            <img src='/monday1.png' alt='Example Image' />
            <img src='/monday2.png' alt='Example Image' />
            <img src='/monday.jpg' alt='Example Image' />
          </div>
        )}

        {project.heading4 && project.body4 && (
          <div className={styles.TextBlock}>
            <h1>Header 4</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              nobis iste quaerat laboriosam dicta nemo obcaecati ab ducimus
              ipsam. Qui et inventore eum illum modi hic voluptatum, sit
              exercitationem minus aliquam voluptates ducimus fugiat cumque,
              maiores quae laudantium quisquam non adipisci quia voluptatibus
              laboriosam corporis ratione officia delectus. Vitae, hic?
            </p>
          </div>
        )}

        {project.scope.length > 0 && (
          <>
            <h1 className={styles.CenterHeader}>Scope of Work</h1>
            <div className={styles.SOW}>
              <div>
                <img src='' alt='' />
                <p>Caption</p>
              </div>
              <div>
                <img src='' alt='' />
                <p>Caption</p>
              </div>
              <div>
                <img src='' alt='' />
                <p>Caption</p>
              </div>
              <div>
                <img src='' alt='' />
                <p>Caption</p>
              </div>
              <div>
                <img src='' alt='' />
                <p>Caption</p>
              </div>
              <div>
                <img src='' alt='' />
                <p>Caption</p>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { project: "charisma-social" } },
      { params: { project: "point-cloud-creative" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { project: projectParam } = context.params;

  const projects = {
    "charisma-social": {
      img1: "/images/charisma.png",
      img2: "/images/charisma2.png",
      img3: "images/charisma-detail1.png",
      img4: "images/charisma-detail2.png",
      img5: "images/charisma-detail3.png",
      img6: null,
      img7: null,
      img8: null,
      img9: null,
      categoryTag: "Web Development",
      title:
        "Website development & engineering for Charisma Social, an innovative utility for NFT enthusiasts.",
      body1: `Charisma Social began as an award winning hackathon project aiming to bring more transparency to the NFT space. Leveraging proprietary
              analysis techniques on publicily available transaction data, the platform assigns various traits to the users' wallet, similar to the famous
              MBTI types. 
        `,
      heading2: "Custom Engineering",
      body2: `The heart of Charisma Social lies in its ability to connect to the Ethereum blockchain 
              and query transaction data for analysis. We developed a robust system that securely connects 
              to the blockchain, extracts transaction data, and processes it. Users are then assigned personality traits based on 
              their transaction patterns and the results presented in a comprehensive and easy-to-understand format.`,
      heading3: "Design Implementation",
      body3: `Working closely with a third-party designer, we integrated the provided designs into the front-end of the Charisma Social website. 
              These designs focused on creating an engaging and intuitive user interface, 
              which allows users to navigate the platform with ease while also enjoying a visually captivating experience.`,
      heading4: null,
      body4: null,
      scope: [],
    },
    "point-cloud-creative": {
      img1: "/images/pcc.png",
      img2: "/images/pcc2.png",
      img3: "/images/pcc-intro-animation.gif",
      img4: "/images/pcc-menu-animation.gif",
      img5: "/images/pcc-intro-animation.gif",
      img6: null,
      img7: null,
      img8: null,
      img9: null,
      categoryTag: "Website Design & Development",
      title:
        "Point Cloud Creative: Crafting an Ultra-Sleek, Interactive, and Modern Website",
      body1: `Point Cloud Creative, a cutting-edge augmented reality design agency, sought to revamp its online presence with an ultra-sleek, 
              modern, and interactive website that would not only showcase its services but also serve as a testament to its design prowess. 
              This case study explores the creation of the website, characterized by sleek minimalist features, seamless animations,
              and interactivity at every turn, all powered by a headless content management system.`,
      heading2: "Design and Development",
      body2: `The design process focused on creating a visually striking, minimalist layout that exudes modernity and sophistication. 
              We achieved this through the use of clean lines, ample white space, and a harmonious color palette that reflects Point Cloud Creative's
               brand identity. To further enhance the user experience, we ensured that almost every element on the website was interactive, 
              promoting user engagement and encouraging exploration.`,
      heading3: null,
      body3: null,
      heading4: null,
      body4: null,
      scope: [],
    },
  };
  return {
    props: {
      project: projects[projectParam],
    },
  };
}
