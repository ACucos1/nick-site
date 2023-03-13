import { Footer, Navbar } from "@components";
import { PageTransitions } from "@page-transitions";
import { useFoucFix } from "@hooks";
import { useEffect } from "react";
import { gsap } from "gsap";
import { useRouter } from "next/router";
import "../styles/globals.scss";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useFoucFix();

  useEffect(() => {
    gsap.to(".fade-in", { autoAlpha: 1, scale: 1, stagger: 0.1 });
  }, [router.asPath]);

  return (
    <PageTransitions route={router.asPath}>
      <Navbar />
      <Component {...pageProps} />;
      <Footer />
    </PageTransitions>
  );
}

export default MyApp;
