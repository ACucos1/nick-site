import styles from "@styles/Footer.module.scss";
export const Footer = () => {
  return (
    <footer className={styles.Footer} id='contact'>
      <div className={`${styles.FooterInner} fade-in`}>
        <a href=''>email@email.com</a>
        <p>Address 123, 123 StreetName Street</p>
        <p>City</p>
        &#169; Company 2022
      </div>
    </footer>
  );
};
