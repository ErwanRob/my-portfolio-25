import { useLenis } from "lenis/react";
import styles from "./Footer.module.scss";
import LegalMentionModal from "../Modals/LegalMentionModal";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshakeSimple } from "@fortawesome/free-solid-svg-icons";
import { navigation, socials, infoList } from "../../config/footerConfig";

const Footer = () => {
  const { t } = useTranslation();
  const [isLegalModalOpen, setLegalModalOpen] = useState(false);
  const lenis = useLenis();
  const handleScroll = (target) => {
    if (lenis) {
      lenis.scrollTo(target, {
        duration: 1,
        easing: (x) => 1 - Math.pow(1 - x, 5),
        lock: true,
      });
    }
  };

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
                  aria-label={`Navigate to ${t(item.textKey)} section`}
                >
                  {t(item.textKey)}
                </a>
              ))}
            </div>
            <div className={styles["footer__container__content__socials"]}>
              {socials.map((item) => (
                <a
                  key={item.textKey}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...(item.download
                    ? { download: "CV_ErwanRobin_27-3-2025.pdf" }
                    : {})}
                  className={
                    styles["footer__container__content__socials__item"]
                  }
                  aria-label={`Visit ${t(item.textKey)} on social media`}
                >
                  {t(item.textKey)}
                </a>
              ))}
            </div>
            <div className={styles["footer__container__content__infos"]}>
              {infoList.map((item) => (
                <p
                  key={item.id}
                  className={styles["footer__container__content__infos__item"]}
                >
                  {t(item.textKey)}
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
                role="button"
                tabIndex="0"
                aria-label="Open legal mentions modal"
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
