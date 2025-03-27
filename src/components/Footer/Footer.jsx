import { useLenis } from "lenis/react";
import styles from "./Footer.module.scss";
import LegalMentionModal from "../Modals/LegalMentionModal";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshakeSimple } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const { t } = useTranslation();
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
    { href: "#hero", text: `${t("navigation.home")}` },
    { href: "#about-me", text: `${t("navigation.about")}` },
    { href: "#projects", text: `${t("navigation.projects")}` },
    { href: "#skills", text: `${t("navigation.skills")}` },
    { href: "#contact", text: `${t("navigation.contact")}` },
  ];

  const socials = [
    { id: 1, text: `${t("contact.links.github")}` },
    {
      id: 2,
      text: `${t("contact.links.linkedin")}`,
      url: "https://www.linkedin.com/in/erwan-robin-0b7b58172/",
    },
    {
      id: 3,
      text: `${t("contact.links.instagram")}`,
      url: "https://www.instagram.com/erwan.rob/",
    },
    {
      id: 4,
      text: `${t("contact.links.download")}`,
      url: "/CV_ErwanRobin_FrontEnd_27-3-2025.pdf",
      download: true,
    },
  ];

  const infoList = [
    { id: 1, text: `${t("contact.info.email")}` },
    { id: 2, text: `${t("contact.info.phone")}` },
    { id: 3, text: `${t("contact.info.address")}` },
    { id: 4, text: `${t("contact.info.country")}` },
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
                  {...(item.download
                    ? { download: "CV_ErwanRobin_27-3-2025.pdf" }
                    : {})}
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
                {t("footer.builtWith")}
                <a
                  className={
                    styles["footer__container__content__legal__item__vercel"]
                  }
                  href="https://vercel.com/"
                >
                  {t("footer.vercel")}
                </a>
              </p>
              <p
                className={
                  styles["footer__container__content__legal__item__modTrig"]
                }
                onClick={() => setLegalModalOpen(true)}
              >
                {t("footer.legal")}
              </p>
              <p
                className={
                  styles["footer__container__content__legal__item__connect"]
                }
              >
                {t("footer.lets_connect")}{" "}
                <span
                  className={
                    styles[
                      "footer__container__content__legal__item__connect__icon"
                    ]
                  }
                >
                  <FontAwesomeIcon icon={faHandshakeSimple} />
                </span>
              </p>

              <p
                className={
                  styles["footer__container__content__legal__item__connect"]
                }
              >
                {t("footer.madeWith")}
              </p>
            </div>
          </div>
          <p className={styles["footer__container__copyright"]}>
            {t("footer.copyright")}
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
