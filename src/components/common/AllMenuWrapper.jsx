import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Settings from "../Settings/Settings";
import SideMenuNavigation from "../SideMenuNavigation/SideMenuNavigation";
import SideMenuToggle from "../SideMenuNavigation/SideMenuToggle";
import useMediaQuery from "../Hooks/useMediaQuery";
import LanguageSwitcher from "./LanguageSwitcher";

const AllMenuWrapper = () => {
  //MediaQuery
  const isMedium = useMediaQuery("(max-width: 1024px)");
  //states
  const [isSideMenuVisible, setSideMenuVisible] = useState(false);
  const [isHeaderVisible, setHeaderVisible] = useState(false);
  const [isSettingsVisible, setSettingsVisible] = useState(false);

  useEffect(() => {
    if (isMedium) {
      setSideMenuVisible(false);
      setHeaderVisible(false);
    } else {
      setSideMenuVisible(true);
      setHeaderVisible(true);
    }
  }, [isMedium]);

  const toggleSideMenu = () => {
    setSideMenuVisible(!isSideMenuVisible);
  };

  const toggleSettings = () => {
    setSettingsVisible(!isSettingsVisible);
  };

  return (
    <>
      {!isMedium && <LanguageSwitcher env={"hero"} />}
      <Header display={isHeaderVisible} toggleSettings={toggleSettings} />
      <Settings display={isSettingsVisible} toggleSettings={toggleSettings} />
      <SideMenuNavigation
        display={isSideMenuVisible}
        toggleSideMenu={toggleSideMenu}
      />
      {isMedium && (
        <SideMenuToggle
          isSideMenuVisible={isSideMenuVisible}
          toggleSideMenu={toggleSideMenu}
        />
      )}
    </>
  );
};

export default AllMenuWrapper;
