import Modal from "react-modal";
import styles from "./LegalMentionModal.module.scss";
import PropTypes from "prop-types";
import { motion } from "motion/react";

if (typeof window !== "undefined") {
  Modal.setAppElement("#root"); // For Next.js; otherwise, use your app's root element id.
}

const LegalMentionModal = ({ isOpen, onClose }) => {
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
        <h4 className={styles["modal__content__title"]}>LEGAL NOTICE</h4>
        <h5 className={styles["modal__content__pTitles"]}>1. Site Publisher</h5>
        <ul className={styles["modal__content__personals"]}>
          <li>Erwan ROBIN</li>
          <li>Residence: Strasbourg (67100)</li>
          <li>Contact: erobin.contact@gmail.com</li>
          <li>Tel: +33 (0)6 10 50 28 37</li>
        </ul>
        <h5 className={styles["modal__content__pTitles"]}>
          2. Director of Publication
        </h5>
        <p>
          The director responsible for the website’s content is:
          <strong> Erwan ROBIN</strong>.
        </p>

        <h5 className={styles["modal__content__pTitles"]}>
          3. Hosting Provider
        </h5>
        <p>
          This website is hosted by: <strong>Vercel, Inc.</strong>
        </p>
        <p>Address: 548 Market St, Suite 255, San Francisco, CA 94104, USA</p>
        <p>
          <span>
            Phone: Vercel does not routinely publish a telephone number. For any
            inquiries regarding hosting, please refer to their official website.
          </span>
        </p>

        <h5 className={styles["modal__content__pTitles"]}>
          4. Data Protection &amp; Processing via Formspree
        </h5>
        <p>
          The website does not directly collect personal data. However, the
          contact form is managed by the third-party service
          <strong> Formspree</strong>.
        </p>
        <ul className={styles["modal__content__dataProcessing"]}>
          <li>
            <strong>Data Processing:</strong> Information entered in the contact
            form (such as the email address) is processed by Formspree according
            to their privacy policy.
          </li>
          <li>
            <strong>User Rights:</strong> Users have the right to access,
            correct, and delete their personal data. To exercise these rights or
            for any inquiries regarding the processing of your data, please
            refer to Formspree’s privacy policy or contact us using the details
            provided above.
          </li>
        </ul>

        <h5 className={styles["modal__content__pTitles"]}>5. Cookies</h5>
        <p>This website does not use cookies.</p>

        <h5 className={styles["modal__content__pTitles"]}>
          6. Intellectual Property
        </h5>
        <p>
          All content on this website (including texts, images, videos, etc.) is
          the exclusive property of <strong>Erwan ROBIN</strong>. Any
          reproduction or representation of all or part of this website without
          the express permission of the publisher is prohibited.
        </p>

        <h5 className={styles["modal__content__pTitles"]}>7. External Links</h5>
        <p>
          The website includes links to my professional profiles on
          <strong> Github, LinkedIn, and Instagram</strong>. These links are
          provided to facilitate access to my various networks. They are
          independent of this website, and I cannot be held responsible for the
          content of these external sites. It is recommended that you review the
          terms of use and privacy policies directly on these platforms.
        </p>

        <h5 className={styles["modal__content__pTitles"]}>Legal Compliance</h5>
        <p>
          These legal notices have been drafted in accordance with the French
          Law No. 2004-575 of 21 June 2004 for Confidence in the Digital Economy
          (LCEN).
        </p>
      </div>
    </Modal>
  );
};

LegalMentionModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default LegalMentionModal;
