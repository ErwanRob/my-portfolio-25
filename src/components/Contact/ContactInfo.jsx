import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faEarthEurope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

import styles from "./ContactInfo.module.scss";

const ContactInfo = () => {
  const { t } = useTranslation();
  const headLineList = [
    { text: `${t("contact.headLine.head1")}`, span: false },
    { text: `${t("contact.headLine.head2")}`, span: false },
    { text: `${t("contact.headLine.head3")}`, span: false },
    { text: `${t("contact.headLine.head4")}`, span: true },
  ];

  const infoList = [
    { icon: faEnvelope, text: "erobin.contact@gmail.com" },
    { icon: faPhone, text: "+33 (0)6 10 50 28 37" },
    { icon: faHome, text: "Strasbourg (67)" },
    { icon: faEarthEurope, text: "France" },
  ];

  const linksList = [
    { icon: faGithub, text: "GitHub", url: "https://github.com/ErwanRob" },
    {
      icon: faLinkedinIn,
      text: "LinkedIn",
      url: "https://www.linkedin.com/in/erwan-robin-0b7b58172/",
    },
    {
      icon: faInstagram,
      text: "Instagram",
      url: "https://www.instagram.com/erwan.rob/",
    },
    {
      icon: faDownload,
      text: "C.V.",
      url: "/CV_ErwanRobin_FrontEnd_27-3-2025.pdf",
      download: true,
    },
  ];

  return (
    <div className={styles.contactInfo}>
      <div className={styles["contactInfo__container"]}>
        <div className={styles["contactInfo__container__leftHeadLine"]}>
          {/* MAP HERE */}
          {headLineList.map((item) => (
            <p
              key={item.text}
              className={styles["contactInfo__container__leftHeadLine__txt"]}
            >
              {item.text}
              {item.span ? (
                <span
                  className={
                    styles[
                      "contactInfo__container__leftHeadLine__txt__available"
                    ]
                  }
                />
              ) : null}
            </p>
          ))}
        </div>
        <div className={styles["contactInfo__container__leftInfo"]}>
          {/* MAP HERE */}
          {infoList.map((item) => (
            <div
              key={item.text}
              className={styles["contactInfo__container__leftInfo__item"]}
            >
              <FontAwesomeIcon icon={item.icon} />
              <p
                className={
                  styles["contactInfo__container__leftInfo__item__txt"]
                }
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <div className={styles["contactInfo__container__links"]}>
          {/* MAP HERE */}
          {linksList.map((item) => (
            <div
              key={item.text}
              className={styles["contactInfo__container__links__itemWrapper"]}
            >
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                {...(item.download
                  ? { download: "CV_ErwanRobin_27-3-2025.pdf" }
                  : {})}
                className={
                  styles["contactInfo__container__links__itemWrapper__item"]
                }
              >
                <FontAwesomeIcon icon={item.icon} />
                {item.text}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

{
  /*   <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faLinkedinIn} />
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faGithub} /> */
}

/* 
<p className={styles["contactInfo__container__leftHeadLine__txt"]}>
            Send me Feedbacks.
          </p>
          <p className={styles["contactInfo__container__leftHeadLine__txt"]}>
            Ask any questions.
          </p>
          <p className={styles["contactInfo__container__leftHeadLine__txt"]}>
            Get in touch.
          </p>
          <p className={styles["contactInfo__container__leftHeadLine__txt"]}>
            Hire me
            <span
              className={
                styles["contactInfo__container__leftHeadLine__txt__available"]
              }
            />
          </p> */

{
  /* <div className={styles["contactInfo__container__links__itemWrapper"]}>
            <a
              href="#contact"
              className={
                styles["contactInfo__container__links__itemWrapper__item"]
              }
            >
              <FontAwesomeIcon icon={faGithub} />
              GitHub
            </a>
          </div>
          <div className={styles["contactInfo__container__links__itemWrapper"]}>
            <a
              href="#contact"
              className={
                styles["contactInfo__container__links__itemWrapper__item"]
              }
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
              LinkedIn
            </a>
          </div>
          <div className={styles["contactInfo__container__links__itemWrapper"]}>
            <a
              href="#contact"
              className={
                styles["contactInfo__container__links__itemWrapper__item"]
              }
            >
              <FontAwesomeIcon icon={faInstagram} />
              Instagram
            </a>
          </div>
          <div className={styles["contactInfo__container__links__itemWrapper"]}>
            <a
              href="#contact"
              className={
                styles["contactInfo__container__links__itemWrapper__item"]
              }
            >
              <FontAwesomeIcon icon={faDownload} />
              C.V.
            </a>
          </div>*/
}

{
  /* <div className={styles["contactInfo__container__leftInfo__item"]}>
            <FontAwesomeIcon icon={faEnvelope} />
            <p
              className={styles["contactInfo__container__leftInfo__item__txt"]}
            >
              pommegranite@example.com
            </p>
          </div>
          <div className={styles["contactInfo__container__leftInfo__item"]}>
            <FontAwesomeIcon icon={faPhone} />
            <p
              className={styles["contactInfo__container__leftInfo__item__txt"]}
            >
              +33 (0)6 10 10 10 10
            </p>
          </div>
          <div className={styles["contactInfo__container__leftInfo__item"]}>
            <FontAwesomeIcon icon={faHome} />
            <p
              className={styles["contactInfo__container__leftInfo__item__txt"]}
            >
              Strasbourg (67)
            </p>
          </div>
          <div className={styles["contactInfo__container__leftInfo__item"]}>
            <FontAwesomeIcon icon={faEarthEurope} />
            <p
              className={styles["contactInfo__container__leftInfo__item__txt"]}
            >
              France
            </p>
          </div>*/
}
