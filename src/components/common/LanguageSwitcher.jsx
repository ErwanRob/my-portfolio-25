import { useNavigate, useParams } from "react-router-dom";
import Button from "../Button/Button";
import frF from "../../assets/img/flag/fr.svg";
import enF from "../../assets/img/flag/en.svg";
import styles from "./LanguageSwitcher.module.scss";
import useMediaQuery from "../Hooks/useMediaQuery";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const isMedium = useMediaQuery("(max-width: 1024px)");
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams();

  const switchLanguage = () => {
    const newLang = lang === "fr" ? "en" : "fr";
    const newPath = window.location.pathname.replace(`/${lang}`, `/${newLang}`);
    navigate(newPath);
  };

  return (
    <div className={styles.langSwitcher}>
      <Button
        text={t("langSwitcher.button")}
        svg={lang === "fr" ? enF : frF}
        onClick={() => switchLanguage()}
        variant="quatro"
        shadowOn={true}
        iconSide={isMedium ? "right" : "left"}
      />
    </div>
  );
};

export default LanguageSwitcher;
