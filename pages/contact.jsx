import styles from "@styles/Contact.module.scss";

export default function contact() {
  return (
    <main className={styles.Contact}>
      <div className={styles.ContactInner}>
        <h1>Let&apos;s get started</h1>
        <div className={styles.Blurb}>
          Unlock your Ecommerce business’s full potential today by scheduling a
          free consultation, and transform your Ecommerce business into a well
          oiled machine!
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
