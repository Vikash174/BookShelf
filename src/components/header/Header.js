import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faQrcode } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="flex justify-between p-5 shadow-lg items-center w-[100vw]">
      <div>
        <h1 className="text-xl font-bold">BookShelf</h1>
      </div>
      <div className="flex items-center gap-5 hover:cursor-pointer">
        <div className="p-2 border border-black">
          <span>Add Book </span>
          <FontAwesomeIcon className="mx-1" icon={faPlus} />
        </div>
        <div className="p-2 border border-black hover:cursor-pointer">
          <span> SCAN QR</span>
          <FontAwesomeIcon className="mx-1" icon={faQrcode} />
        </div>
      </div>
    </div>
  );
};

export default Header;
