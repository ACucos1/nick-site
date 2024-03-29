import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    function TextType(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = "";
      this.tick();
      this.isDeleting = false;
    }

    TextType.prototype.tick = function () {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = `We Create <span className={styles.TypeText}>${this.txt}</span>`;

      var that = this;
      var delta = 200 - Math.random() * 100;
      if (this.isDeleting) delta /= 2;

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(() => {
        that.tick();
      }, delta);
    };

    var elements = document.querySelectorAll(".typewrite");
    for (let i = 0; i < elements.length; i++) {
      let toRotate = elements[i].getAttribute("data-type");
      let period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TextType(elements[i], JSON.parse(toRotate), period);
      }
    }
  }, []);

  return (
    <div className={`${styles.container} `}>
      <Head>
        <title>BigUpCommerce</title>
        <meta name='description' content='BigUpCommerce' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className={styles.Main}>
        <div className={`${styles.MainInner} fade-in`}>
          <div
            className={`${styles.HeroText} typewrite`}
            data-period='2000'
            data-type='["Workflows.", "Automations.", "Integrations.", "Analytics."]'>
            We create <span className={`${styles.TypeText}`}></span>
          </div>
        </div>
      </section>

      <section id='projects' className={styles.Projects}>
        <div className={`${styles.ProjectsInner} fade-in`}>
          <Link href='/project1'>
            <div className={`fade-in`}></div>
          </Link>
          <Link href='/project2'>
            <div className={`fade-in`}></div>
          </Link>
          <Link href='/project4'>
            <div className={`fade-in`}></div>
          </Link>
          <Link href='/project5'>
            <div className={`fade-in`}></div>
          </Link>
        </div>
      </section>

      <section id='about' className={`${styles.AboutBlurb}`}>
        <div className={`${styles.AboutBlurbInner} fade-in`}>
          <p>
            Welcome to BigUpCommerce, the all-in-one ecommerce management
            solution designed to make your life easier. BigupCommerce helps you
            unify your ecommerce marketplaces and minimze operational overhead.
            Our workflows integrate all of your ecommerce marketplace store data
            under one roof and allow you to manage your business from one place.
          </p>
        </div>
      </section>
    </div>
  );
}
