import { memo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../Button/Button";
import frF from "../../assets/img/flag/fr.svg";
import enF from "../../assets/img/flag/en.svg";
import styles from "./LanguageSwitcher.module.scss";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { motion } from "motion/react";

const LanguageSwitcher = memo(({ env }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams();

  const switchLanguage = () => {
    const newLang = lang === "fr" ? "en" : "fr";
    const newPath = window.location.pathname.replace(`/${lang}`, `/${newLang}`);
    navigate(newPath);
  };

  return (
    <motion.div
      className={`${styles.langSwitcher} ${styles[env]}`}
      initial={{ opacity: 0, y: "-3rem" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "backOut", delay: 3.2 }}
      viewport={{ once: true }}
    >
      <Button
        text={t("langSwitcher.button")}
        svg={lang === "fr" ? enF : frF}
        onClick={() => switchLanguage()}
        variant="quatro"
        subVariant={env}
        iconSide="right"
        shadowOn={true}
      />
    </motion.div>
  );
});

LanguageSwitcher.displayName = "LanguageSwitcher";

export default LanguageSwitcher;

LanguageSwitcher.propTypes = {
  env: PropTypes.oneOf(["header", "hero"]),
};
