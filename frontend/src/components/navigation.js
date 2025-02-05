import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import LanguageButtons from "./languageButtons";

export default function Navigation() {
  const { t } = useTranslation("navigation");
  const pages = [
    ["home", ""],
    ["about", "about-us"],
    ["privacyPolicy", "privacy-policy"],
    ["organisation", "organisation-form"],
    ["searchAssistant", "quiz"],
    ["viewAllOrganisations", "organisations"],
  ];
  const [dropDown, setDropDown] = useState(false);

  const handleClick = () => {
    setDropDown(!dropDown);
  };

  console.log(dropDown);
  return (
    <nav className="border-b border-kona">
      <div className="flex h-20 items-end justify-between pb-2 relative">
        <Link to={"/"}>
          <img src="/logo.png" className="h-auto w-12" alt="dots-logo" />
        </Link>
        <div className="flex flex-col">
          <LanguageButtons />
          <button
            className="border border-kona my-1 p-1 rounded-md uppercase"
            onClick={handleClick}
          >
            Menu
          </button>
          {dropDown && (
            <>
              <div onClick={handleClick} className="fixed inset-0"></div>
              <div className="absolute bg-white flex-col border-b border-kona left-0 sm:left-auto m-px right-0 shadow-2xl top-20 z-50">
                {pages.map(([page, url]) => (
                  <Link to={`/${url}`} key={page}>
                    <div className="pb-2 pt-2 px-4 uppercase focus:outline-none hover:text-gray-500">
                      {t(`${page}`)}
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
