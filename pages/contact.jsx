import styles from "@styles/Contact.module.scss";

export default function contact() {
  return (
    <main className={styles.Contact}>
      <div className={styles.ContactInner}>
        <h1>Let&apos;s get started</h1>
        <div className={styles.Blurb}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          consequatur culpa! Quibusdam soluta, voluptatem quidem ipsam dolorum
          excepturi architecto fugiat nihil cumque, ut odit similique alias rem
          repudiandae! In corporis exercitationem sequi sunt qui placeat impedit
          debitis? Libero impedit quam quis possimus aliquid vel sunt
          perferendis mollitia fugit laudantium! Incidunt!
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
