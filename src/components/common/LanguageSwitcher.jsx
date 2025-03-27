import { useNavigate, useParams } from "react-router-dom";
import Button from "../Button/Button";

import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams();

  const switchLanguage = (newLang) => {
    const newPath = window.location.pathname.replace(`/${lang}`, `/${newLang}`);

    navigate(newPath);
  };

  return (
    <div className="langSwitcher">
      <Button
        text={t("langSwitcher.button.fr")}
        onClick={() => switchLanguage("fr")}
        variant="quatro"
        shadowOn={true}
      />
      <Button
        text={t("langSwitcher.button.en")}
        onClick={() => switchLanguage("en")}
        variant="quatro"
        shadowOn={true}
      />
    </div>
  );
};

export default LanguageSwitcher;
