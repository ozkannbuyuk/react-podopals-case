import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useContext,
} from "react";

import { FaGlobe } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { useOnClickOutside } from "usehooks-ts";
import LangContext from "../../../../store/langContext";

import classes from "./LangBox.module.scss";

function LangBox() {
  const [showLangBox, setShowLangBox] = useState(false);
  const langBoxRef = useRef<HTMLDivElement>(null);
  const langCtx = useContext(LangContext);
  const lang = langCtx.lang;

  const showBoxHandler = function toDo() {
    setShowLangBox((prev) => !prev);
  };

  useEffect(() => {
    document.documentElement.lang = lang === "en" ? "en" : "tr";
  }, [lang]);
  const checkIfClickedOutside = useCallback(() => {
    if (showLangBox && langBoxRef.current) {
      setShowLangBox(false);
    }
  }, [showLangBox]);

  useOnClickOutside(langBoxRef, checkIfClickedOutside);

  return (
    <div className={classes.lang} ref={langBoxRef}>
      <div className={classes.lanBox} onClick={showBoxHandler}>
        <FaGlobe size="20" />

        <div className={classes.lang_slc}>{lang}</div>

        <MdOutlineArrowDropDown size={20} />
      </div>
      <div
        className={`${classes.lang_menu} ${showLangBox ? classes.show : ""}`}
      >
        <div
          onClick={() => {
            langCtx.toggleLanguage("en");
            showBoxHandler();
          }}
        >
          English (en)
        </div>
        <div
          onClick={() => {
            langCtx.toggleLanguage("tr");
            showBoxHandler();
          }}
        >
          Türkçe (tr)
        </div>
      </div>
    </div>
  );
}

export default LangBox;
