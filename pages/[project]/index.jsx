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
    const imgs = document.querySelectorAll(".img-wrapper, img");
    imgs.forEach((img) => {
      img.style.backgroundColor = colors[5];
    });
  }, [colors]);
  return (
    <main className={styles.Project}>
      <div className={styles.ProjectInner}>
        <h3>{project.categoryTag}</h3>
        <h1 className={styles.MainHeader}>{project.title}</h1>

        <ColorExtractor getColors={getColors}>
          <img
            className={`${styles.MainImage} ${styles.Image1}`}
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
            <div className={`${styles.ImageGridItem} img-wrapper`}>
              <img src={project.img6} alt='Example Image' />
            </div>
            <div className={`${styles.ImageGridItem} img-wrapper`}>
              <img src={project.img7} alt='Example Image' />
            </div>
            <div className={`${styles.ImageGridItem} img-wrapper`}>
              <img src={project.img8} alt='Example Image' />
            </div>
            <div className={`${styles.ImageGridItem} img-wrapper`}>
              <img src={project.img9} alt='Example Image' />
            </div>
          </div>
        )}

        {project.heading4 && project.body4 && (
          <div className={styles.TextBlock}>
            <h1>{project.heading4}</h1>
            <p>{project.body4}</p>
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
      { params: { project: "bonkers-stonkers" } },
      { params: { project: "alex-cucos" } },
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
      img6: "images/charisma3.png",
      img7: "images/charisma4.png",
      img8: "images/charisma5.png",
      img9: "images/charisma6.png",
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
      heading4: "Prepared for the future",
      body4: `Charisma Social stands as a testament to the power of collaboration and the fusion of design and technology in creating a groundbreaking platform. 
              By effectively integrating front-end designs with advanced blockchain functionality, 
              Charisma Social has successfully provided users with a unique way to explore their Ethereum transaction history and gain valuable insights into their personality traits.
              This project demonstrates the immense potential of combining innovative design principles, cutting-edge technology, and a shared vision to create an engaging, 
              user-centric experience. As Charisma Social continues to evolve, it will undoubtedly serve as a benchmark for future blockchain-based applications, 
              inspiring others to push the boundaries of what is possible in the digital world.`,
      scope: [],
    },
    "point-cloud-creative": {
      img1: "/images/pcc.png",
      img2: "/images/pcc2.png",
      img3: "/images/pcc-intro-animation.gif",
      img4: "/images/pcc-menu-animation.gif",
      img5: "/images/pcc-intro-animation.gif",
      img6: "/images/sanitycms.png",
      img7: "/images/sanitycms2.png",
      img8: "/images/sanitycms3.png",
      img9: "/images/sanitycms4.png",
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
      heading3: "Headless CMS Integration:",
      body3: `To provide Point Cloud Creative with the flexibility and adaptability required to maintain their website's content, 
              we implemented a headless content management system (CMS). This approach decouples the front-end presentation layer from the back-end content management, 
              allowing the client to make updates and changes to their website with ease, without affecting the overall design and functionality.`,
      heading4: "Lessons",
      body4: `The Point Cloud Creative website is a shining example of how modern design and innovative technology can come together to create an unforgettable user experience. 
              With its ultra-sleek, minimalist design, interactive elements, and seamless animations, 
              the website serves as a powerful showcase of the client's capabilities and vision.
              Furthermore, the integration of a headless content management system ensures that the website remains adaptable and easily manageable,
              providing Point Cloud Creative with a future-proof digital presence that will continue to captivate and engage visitors for years to come.`,
      scope: [],
    },
    "bonkers-stonkers": {
      img1: "/images/bs1.png",
      img2: "/images/bs2.png",
      img3: "/images/bs7.png",
      img4: "/images/bs4.png",
      img5: "/images/bs5.png",
      img6: "/images/bs6.png",
      img7: "/images/bs10.png",
      img8: "/images/bs8.png",
      img9: "/images/bs9.png",
      categoryTag: "Website Design & Development",
      title: "Bonkers Stonkers: Merging Finance Bros and NFTs",
      body1: `Bonkers Stonkers is a cryptocurrency and NFT enthusiast group focused on creating a digital collection that captures the essence of finance bros and their high-energy, 
              luxurious lifestyle. Their goal was to develop a series of NFTs that would appeal to both finance enthusiasts and NFT collectors,
              blending satire with pop culture references.`,
      heading2: "NFT Design and Development",
      body2: `Our team collaborated with talented digital artists to design a series of NFTs that captured the essence of the finance bro lifestyle. 
              The collection included 5,555 unique, hand-drawn characters, each with their own combination of features, accessories, and backgrounds. 
              These characters represented various aspects of the finance world, from stock traders to cryptocurrency enthusiasts, all with a touch of humor and satire. 
              Additionally, we incorporated elements of the party lifestyle, such as luxury watches, drugs, and fancy suits, to create an engaging and visually appealing collection.`,
      heading3: "Website Design and Development",
      body3: `Our team designed an intuitive, visually appealing, and user-friendly website that made it easy for visitors to explore the Bonkers Stonkers NFT collection. 
              We implemented a seamless browsing experience with responsive design elements that catered to users across different devices and screen sizes.`,
      heading4: "Lessons",
      body4: `The rapidly evolving nature of the NFT and cryptocurrency space required our team to be agile and adaptable. 
              We continuously monitored market trends and adjusted our strategies accordingly, ensuring that the project remained relevant and appealing to our audience.`,
      scope: [],
    },
    "alex-cucos": {
      img1: "/images/ac1.png",
      img2: "/images/ac2.png",
      img3: "/images/ac3.png",
      img4: "/images/ac4.png",
      img5: "/images/ac5.png",
      img6: null,
      img7: null,
      img8: null,
      img9: null,
      categoryTag: "Website Design & Development",
      title: "Alex Cucos: Building an Effective Personal Portfolio",
      body1: `Alex Cucos is not only a founding member of ANS Creative, but also a talented software developer with a diverse range of projects under his belt. 
              His work spans various programming languages, frameworks, and development methodologies, including web applications, mobile apps, 
              and enterprise-level software solutions. As a key member of our agency, 
              Alex sought a professional online presence to showcase his skills, projects, 
              and work experience to potential employers, collaborators, and clients.`,
      heading2: "Content Organization and Presentation",
      body2: `We worked closely with Alex to curate and organize the content of his portfolio, 
              focusing on presenting his skills, work experience, and projects in a clear and engaging manner. 
              We created dedicated sections for his technical skills, work history, and a showcase of his most impressive projects.
              Each project featured a brief description, technologies used, and relevant visuals, such as screenshots or demo videos, 
              providing visitors with a comprehensive understanding of Alex's expertise.`,
      heading3: "Website Design and Development",
      body3: `Understanding the importance of catering to users on various devices, 
              we implemented a responsive design for Alex's portfolio website. This ensured that the website would display optimally on 
              different screen sizes and devices, providing a seamless browsing experience for all visitors. We also incorporated 
              accessibility features, such as proper heading structures, alt text for images, and keyboard navigation, 
              ensuring the website was inclusive and user-friendly`,
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
