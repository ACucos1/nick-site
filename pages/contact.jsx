import styles from "@styles/Contact.module.scss";

export default function contact() {
  return (
    <main className={styles.Contact}>
      <div className={styles.ContactInner}>
        <h1>Let&apos;s get started</h1>
        <div className={styles.Blurb}>
        Unleash Your Brand's Full Potential Today! Ready to elevate your online presence and captivate your audience like never before? Take the first step towards a stunning digital transformation by getting in touch with our dedicated experts at ANS Creative. Simply fill out the contact form below, and we'll connect with you to discuss how we can turn your vision into a reality. Let's embark on this creative journey together and redefine the boundaries of success!
        </div>
        <form
          className={styles.ContactForm}
          action='none'
          onSubmit={(e) => {
            e.preventDefault();
          }}>
          <label>e-mail</label>
          <input type='email' required />

          <label>Subject</label>
          <input type='text' required />

          <label>Content</label>
          <textarea type='text' />

          <input type='submit' />
        </form>
      </div>
    </main>
  );
}
