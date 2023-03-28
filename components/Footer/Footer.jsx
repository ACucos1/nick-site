import styles from "@styles/Footer.module.scss";
export const Footer = () => {
  return (
    <footer className={styles.Footer} id='contact'>
      <div className={`${styles.FooterInner} fade-in`}>
        <a href=''>hello@anscreative.xyz</a>
        <p></p>
        <p>Toronto</p>
        &#169; Company 2023
      </div>
    </footer>
  );
};
