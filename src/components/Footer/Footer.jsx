import { useLenis } from "lenis/react";
import styles from "./Footer.module.scss";
import LegalMentionModal from "../Modals/LegalMentionModal";
import { useState } from "react";

const Footer = () => {
  const [isLegalModalOpen, setLegalModalOpen] = useState(false);
  const lenis = useLenis();
  const handleScroll = (target) => {
    if (lenis) {
      lenis.scrollTo(target, {
        duration: 1,
        easing: (x) => 1 - Math.pow(1 - x, 5), // easeOutQuint
        offset: 0, // adjust if needed
        lock: true, // lock scrolling until animation completes
      });
    }
  };

  const navigation = [
    { href: "#hero", text: "Home" },
    { href: "#about-me", text: "About Me" },
    { href: "#projects", text: "Projects" },
    { href: "#skills", text: "Skills" },
    { href: "#contact", text: "Contact" },
  ];

  const socials = [
    { id: 1, text: "GitHub", url: "https://github.com/ErwanRob" },
    {
      id: 2,
      text: "LinkedIn",
      url: "https://www.linkedin.com/in/erwan-robin-0b7b58172/",
    },
    {
      id: 3,
      text: "Instagram",
      url: "https://www.instagram.com/erwan.rob/",
    },
    { id: 4, text: "C.V.", url: "/cv.pdf", download: true },
  ];

  const infoList = [
    { id: 1, text: "erobin.contact@gmail.com" },
    { id: 2, text: "+33 (0)6 10 50 28 37" },
    { id: 3, text: "Strasbourg (67)" },
    { id: 4, text: "France" },
  ];

  return (
    <>
      <div className={styles.footer}>
        <div className={styles["footer__container"]}>
          <div className={styles["footer__container__content"]}>
            <div className={styles["footer__container__content__nav"]}>
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={styles["footer__container__content__nav__item"]}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(item.href);
                  }}
                >
                  {item.text}
                </a>
              ))}
            </div>
            <div className={styles["footer__container__content__socials"]}>
              {socials.map((item) => (
                <a
                  key={item.text}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...(item.download ? { download: "ErwanRob_CV.pdf" } : {})}
                  className={
                    styles["footer__container__content__socials__item"]
                  }
                >
                  {item.text}
                </a>
              ))}
            </div>
            <div className={styles["footer__container__content__infos"]}>
              {infoList.map((item) => (
                <p
                  key={item.id}
                  className={styles["footer__container__content__infos__item"]}
                >
                  {item.text}
                </p>
              ))}
            </div>

            <div className={styles["footer__container__content__legal"]}>
              <p className={styles["footer__container__content__legal__item"]}>
                Built with React.js &amp; Motion • Deployed on{" "}
                <a
                  className={
                    styles["footer__container__content__legal__item__vercel"]
                  }
                  href="https://vercel.com/"
                >
                  Vercel
                </a>
              </p>
              <p
                className={
                  styles["footer__container__content__legal__item__modTrig"]
                }
                onClick={() => setLegalModalOpen(true)}
              >
                Legal Mentions
              </p>
              <p
                className={
                  styles["footer__container__content__legal__item__connect"]
                }
              >
                Let’s connect !
              </p>

              <p
                className={
                  styles["footer__container__content__legal__item__connect"]
                }
              >
                Made with ❤️ by Erwan Robin
              </p>
            </div>
          </div>
          <p className={styles["footer__container__copyright"]}>
            © 2025 Erwan Robin. All rights reserved.
          </p>
        </div>
      </div>
      <LegalMentionModal
        isOpen={isLegalModalOpen}
        onClose={() => setLegalModalOpen(false)}
      />
    </>
  );
};

export default Footer;
