import Modal from "react-modal";
import styles from "./HireMeModal.module.scss";
import PropTypes from "prop-types";
import HireMeForm from "../HireMeForm/HireMeForm";

if (typeof window !== "undefined") {
  Modal.setAppElement(document.getElementById("root"));
}

const HireMeModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modal}
      ariaHideApp={true}
      shouldCloseOnEsc={true}
      parentSelector={() => document.getElementById("hero")}
      overlayClassName={styles.modalOverlay}
      shouldCloseOnOverlayClick={false}
      contentLabel="HireMe Modal"
    >
      <div className={styles["modal__content"]} /* data-lenis-prevent */>
        <HireMeForm onClose={onClose} />
      </div>
    </Modal>
  );
};

export default HireMeModal;

HireMeModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
