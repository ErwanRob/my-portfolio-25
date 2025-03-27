import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DefaultRoute = () => {
  const navigate = useNavigate();

  useEffect(() => {
    //get the first 2 letter of navigator language$
    console.log("lang : ", navigator.language);
    const browserLang = navigator.language.slice(0, 2);

    //fallback
    const supportedLangs = ["en", "fr"];
    const lang = supportedLangs.includes(browserLang) ? browserLang : "en";
    //redirect
    navigate(`/${lang}`, { replace: true });
  }, [navigate]);

  return null;
};

export default DefaultRoute;
