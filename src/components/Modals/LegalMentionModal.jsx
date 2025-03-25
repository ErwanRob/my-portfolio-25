import Modal from "react-modal";
import styles from "./LegalMentionModal.module.scss";
import PropTypes from "prop-types";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

if (typeof window !== "undefined") {
  Modal.setAppElement("#root"); // For Next.js; otherwise, use your app's root element id.
}

const LegalMentionModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  const sitePublisherDetails = t(
    "legalMentions.sections.sitePublisher.details",
    { returnObjects: true }
  );
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.modalOverlay}
      contentLabel="Legal Mentions Modal"
    >
      <motion.div
        className={styles["modal__closeBtn"]}
        onClick={onClose}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.25, color: "#8b5cf6" }}
        whileTap={{ scale: 0.8, color: "#fff" }}
        transition={{ duration: 0.15, ease: "backOut" }}
      >
        <motion.svg
          initial={{ rotate: 0 }}
          whileHover={{ rotate: 90 }}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="0.9"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </motion.svg>
      </motion.div>
      <div className={styles["modal__content"]} data-lenis-prevent>
        <h4 className={styles["modal__content__title"]}>
          {t("legalMentions.title")}
        </h4>
        <h5 className={styles["modal__content__pTitles"]}>
          {t("legalMentions.sections.sitePublisher.title")}
        </h5>
        <ul className={styles["modal__content__personals"]}>
          {sitePublisherDetails.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h5 className={styles["modal__content__pTitles"]}>
          {t("legalMentions.sections.directorOfPublication.title")}
        </h5>
        <p>
          {t("legalMentions.sections.directorOfPublication.text")}
          <strong>
            {" "}
            {t("legalMentions.sections.directorOfPublication.directorName")}
          </strong>
          .
        </p>

        <h5 className={styles["modal__content__pTitles"]}>
          {t("legalMentions.sections.hostingProvider.title")}
        </h5>
        <p>
          {t("legalMentions.sections.hostingProvider.text")}{" "}
          <strong>
            {" "}
            {t("legalMentions.sections.hostingProvider.companyName")}{" "}
          </strong>
        </p>
        <ul className={styles["modal__content__provider"]}>
          <li>{t("legalMentions.sections.hostingProvider.address")}</li>
          <li>{t("legalMentions.sections.hostingProvider.note")}</li>
          <li>{t("legalMentions.sections.hostingProvider.note2")}</li>
        </ul>
        <h5 className={styles["modal__content__pTitles"]}>
          {t("legalMentions.sections.dataProtection.title")}
        </h5>
        <p>
          {t("legalMentions.sections.dataProtection.text")}{" "}
          <strong>
            {" "}
            {t("legalMentions.sections.dataProtection.serviceName")}{" "}
          </strong>
        </p>
        <ul className={styles["modal__content__dataProcessing"]}>
          <li>
            <strong>
              {t("legalMentions.sections.dataProtection.dataProcessing.title")}
            </strong>
            {t("legalMentions.sections.dataProtection.dataProcessing.text")}
          </li>
          <li>
            <strong>
              {" "}
              {t("legalMentions.sections.dataProtection.userRights.title")}
            </strong>
            {t("legalMentions.sections.dataProtection.userRights.text")}
          </li>
        </ul>

        <h5 className={styles["modal__content__pTitles"]}>
          {" "}
          {t("legalMentions.sections.cookies.title")}
        </h5>
        <p>{t("legalMentions.sections.cookies.text")}</p>

        <h5 className={styles["modal__content__pTitles"]}>
          {t("legalMentions.sections.intellectualProperty.title")}
        </h5>
        <p>
          {t("legalMentions.sections.intellectualProperty.text")}{" "}
          <strong>
            {" "}
            {t("legalMentions.sections.intellectualProperty.propertyOwner")}
          </strong>
          {t("legalMentions.sections.intellectualProperty.text2")}
        </p>

        <h5 className={styles["modal__content__pTitles"]}>
          {" "}
          {t("legalMentions.sections.externalLinks.title")}
        </h5>
        <p>
          {t("legalMentions.sections.externalLinks.text")}{" "}
          <strong>{t("legalMentions.sections.externalLinks.links")}</strong>
          {". "}
          {t("legalMentions.sections.externalLinks.text2")}
        </p>

        <h5 className={styles["modal__content__pTitles"]}>
          {" "}
          {t("legalMentions.sections.legalCompliance.title")}
        </h5>
        <p>{t("legalMentions.sections.legalCompliance.text")}</p>
      </div>
    </Modal>
  );
};

LegalMentionModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default LegalMentionModal;
