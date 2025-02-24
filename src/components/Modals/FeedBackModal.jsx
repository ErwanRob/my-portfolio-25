import Modal from "react-modal";
import styles from "./FeedBackModal.module.scss";
import PropTypes from "prop-types";
import { motion } from "motion/react";

import FeedBackForm from "../FeedBackForm/FeedBackForm";

if (typeof window !== "undefined") {
  Modal.setAppElement("#root"); // For Next.js; otherwise, use your app's root element id.
}

const FeedBackModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.modalOverlay}
      contentLabel="FeedBack Modal"
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
        <FeedBackForm />
        {/*   Bonsoir
        <br />
        - Name here and maybe email ?
        <br />
        - Rating bar here / with a emoticon that changes regarding the rating
        <br />
        - feedback text area here
        <br />- send button here */}
      </div>
    </Modal>
  );
};

export default FeedBackModal;

FeedBackModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
