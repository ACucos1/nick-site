/* eslint-disable @next/next/no-img-element */
import styles from "@styles/Project.module.scss";

export default function Project() {
  return (
    <main className={styles.Project}>
      <div className={styles.ProjectInner}>
        <h3>Category Tag</h3>
        <h1 className={styles.MainHeader}>
          Creating &amp; managing a digital presence for thought leaders in the
          holistic health space.
        </h1>

        <img
          className={styles.MainImage}
          src='/monday.jpg'
          alt='Header Image'
        />

        <p className={styles.TextBlock}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam animi
          atque officiis accusantium veritatis quas, facere dolorum quo, rerum
          quasi ut obcaecati suscipit, magni repellendus earum placeat pariatur!
          Consectetur ducimus laudantium asperiores quo minima facere ea dolore,
          accusantium deserunt suscipit rerum eligendi perspiciatis ab, nemo
          minus impedit soluta quidem ex est veniam?
        </p>

        <img
          className={styles.MainImage}
          src='/monday.jpg'
          alt='Example Image'
        />

        <div className={styles.TextBlock}>
          <h1>Header 2</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nobis
            iste quaerat laboriosam dicta nemo obcaecati ab ducimus ipsam. Qui
            et inventore eum illum modi hic voluptatum, sit exercitationem minus
            aliquam voluptates ducimus fugiat cumque, maiores quae laudantium
            quisquam non adipisci quia voluptatibus laboriosam corporis ratione
            officia delectus. Vitae, hic?
          </p>
        </div>

        <div className={styles.ImageList}>
          <img src='/monday.jpg' alt='Example Image' />
          <img src='/monday1.png' alt='Example Image' />
          <img src='/monday2.png' alt='Example Image' />
        </div>

        <div className={styles.TextBlock}>
          <h1>Header 3</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nobis
            iste quaerat laboriosam dicta nemo obcaecati ab ducimus ipsam. Qui
            et inventore eum illum modi hic voluptatum, sit exercitationem minus
            aliquam voluptates ducimus fugiat cumque, maiores quae laudantium
            quisquam non adipisci quia voluptatibus laboriosam corporis ratione
            officia delectus. Vitae, hic?
          </p>
        </div>

        <div className={styles.ImageGrid}>
          <img src='/monday.jpg' alt='Example Image' />
          <img src='/monday1.png' alt='Example Image' />
          <img src='/monday2.png' alt='Example Image' />
          <img src='/monday.jpg' alt='Example Image' />
        </div>

        <div className={styles.TextBlock}>
          <h1>Header 4</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nobis
            iste quaerat laboriosam dicta nemo obcaecati ab ducimus ipsam. Qui
            et inventore eum illum modi hic voluptatum, sit exercitationem minus
            aliquam voluptates ducimus fugiat cumque, maiores quae laudantium
            quisquam non adipisci quia voluptatibus laboriosam corporis ratione
            officia delectus. Vitae, hic?
          </p>
        </div>

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
      </div>
    </main>
  );
}
