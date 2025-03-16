import { useEffect, useState } from "react";
import Header from "./Header/Header";
import Settings from "./Settings/Settings";
import SideMenuNavigation from "./SideMenuNavigation/SideMenuNavigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import useMediaQuery from "./Hooks/useMediaQuery";

const AllMenuWrapper = () => {
  const isXSmall = useMediaQuery("(max-width: 480px)");
  const isSmall = useMediaQuery("(max-width: 768px)");
  const isMedium = useMediaQuery("(max-width: 1024px)");

  const [isSideMenuVisible, setSideMenuVisible] = useState(false);
  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const [isSettingsVisible, setSettingsVisible] = useState(false);

  useEffect(() => {
    if (isXSmall || isSmall || isMedium) {
      setSideMenuVisible(false);
      setHeaderVisible(false);
    } else {
      setSideMenuVisible(true);
      setHeaderVisible(true);
    }
  }, [isXSmall, isSmall, isMedium]);

  const toggleSideMenu = () => {
    setSideMenuVisible(!isSideMenuVisible);
  };

  const toggleSettings = () => {
    setSettingsVisible(!isSettingsVisible);
  };

  return (
    <>
      {isHeaderVisible && (
        <div className="header-wrapper">
          <Header toggleSettings={toggleSettings} />
        </div>
      )}

      <div className={`settings-wrapper ${isSettingsVisible ? "visible" : ""}`}>
        <Settings
          toggleSettings={toggleSettings}
          isSettingsVisible={isSettingsVisible}
        />
      </div>

      <div
        className={`sideMenuNavigation-wrapper ${
          isSideMenuVisible ? "visible" : ""
        }`}
      >
        <SideMenuNavigation
          isSideMenuVisible={isSideMenuVisible}
          toggleSideMenu={toggleSideMenu}
        />
      </div>

      {(isXSmall || isSmall || isMedium) && (
        <div className="sideMenuNavigation-toggle">
          <button
            className={"sideMenuNavigation-toggle__btn"}
            onClick={toggleSideMenu}
            aria-label="Toggle side menu"
          >
            {isSideMenuVisible ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>
      )}
    </>
  );
};

export default AllMenuWrapper;
