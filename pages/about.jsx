/* eslint-disable @next/next/no-img-element */
import styles from "@styles/About.module.scss";
import { useRouter } from "next/router";

export default function About() {
  const router = useRouter();
  return (
    <div className={styles.About}>
      <section className={styles.Main}>
        <div className={`${styles.MainInner} ${styles.SectionInner}`}>
          <div className={styles.Header}>
            <h1>Streamline Your Ecommerce Store Management</h1>
            <h2>
              Welcome to BigUpCommerce, the all-in-one ecommerce management
              solution designed to make your life easier.
            </h2>
          </div>
        </div>
      </section>

      <section className={styles.ProblemStatement}>
        <div
          className={`${styles.ProblemStatementInner} ${styles.SectionInner}`}>
          <ul>
            <li>
              Are you tired of managing multiple ecommerce platforms and stores
              separately?{" "}
            </li>
            <li>
              Is it frustrating to manually update your inventory and order
              information across each of them?
            </li>
            <li>
              Do you struggle to keep up with customer support and timely order
              delivery?
            </li>
          </ul>
        </div>
      </section>

      <section className={`${styles.ServiceOffering}`}>
        <div
          className={`${styles.ServiceOfferingInner} ${styles.SectionInner}`}>
          <h1>
            BigUpCommerce provides a one-stop solution to all your ecommerce
            management needs.
          </h1>
          <h2>With our powerful platform, you can:</h2>
          <ul>
            <li>Bring all your ecommerce solutions under one roof</li>
            <li>
              View and manage all incoming orders across multiple ecommerce
              marketplaces, such as Shopify and Etsy
            </li>
            <li>
              Automate email updates to clients about order status and tracking
            </li>
            <li>
              Integrate with ecommerce marketplace APIs to streamline your
              processes
            </li>
            <li>
              Manage access for staff and provide access and visibility based on
              necessity
            </li>
            <li>Sync your inventory across all marketplaces seamlessly</li>
            <li>Track and update the production process for all orders</li>
            <li>
              Update clients with automated emails throughout the process to
              improve their experience with seamless follow-ups
            </li>
            <li>Update prices remotely from one place</li>
            <li>
              View statistics on sales, costs, profitability, purchase order
              values, and returns
            </li>
            <li>Manage reviews and provide reply notifications</li>
            <li>Track/Manage Production</li>
            <li>Track/Manage Shipping</li>
            <li>Automate Emails</li>
            <li>Update Listings</li>
            <li>Analyze your performance</li>
          </ul>
        </div>
      </section>

      <section className={styles.Certifications}>
        <div className={`${styles.CertificationsInner} ${styles.SectionInner}`}>
          <img
            className={styles.CertBadge}
            src='/images/Certification-badge.png'
            alt='Monday.com Certified Builder'
          />
          <img
            className={styles.CertBadge}
            src='/images/Certification-badge.png'
            alt='Monday.com Certified Builder'
          />
          <img
            className={styles.CertBadge}
            src='/images/Certification-badge.png'
            alt='Monday.com Certified Builder'
          />
        </div>
      </section>

      <section className={styles.CTA}>
        <div className={`${styles.CTAInner} ${styles.SectionInner}`}>
          <h2>Ready to take the hassle out of ecommerce management?</h2>
          <h1>
            Book a free consultation call today to unlock your business’s full
            potential.
          </h1>

          <button
            className={`btn-primary`}
            onClick={() => {
              router.push("/contact");
            }}>
            Let&apos;s Get Started
          </button>
        </div>
      </section>
    </div>
  );
}
