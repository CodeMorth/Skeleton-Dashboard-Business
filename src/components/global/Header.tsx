"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaBell } from "react-icons/fa";
import { FcManager, FcSettings } from "react-icons/fc";
import { useRouter } from "next/navigation";

export const Header = () => {
  const [openMenu, setopenMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleIcon = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div onClick={() => setopenMenu(false)} className="Header">
      <div
        id="nav-icon2"
        className={`nav-icon ${isOpen ? "open" : ""}`}
        onClick={(event) => {
          setopenMenu((prev) => !prev);
          toggleIcon();
          event.stopPropagation();
        }}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        onClick={(event) => event.stopPropagation()}
        className={`header-container ${openMenu ? "open" : "close"}`}
      >
        <div className="image-container-own">
          <Image src="/LogoDefault.svg" alt="" width={1000} height={1000} />
        </div>
        <div className="mid-container">
          <div className="image-container">
            <Image src="/Windows_logo.svg" alt="" width={1000} height={1000} />
          </div>
          <div className="image-container">
            <FcSettings />
          </div>
        </div>
        <div className="right-container">
          <div className="image-container-campaign">
            <FaBell className="!w-2/3 !h-2/3 text-yellow-own-2" />
          </div>
          <button
            onClick={() => {
              router.push("/");
            }}
            className="image-container-perfil"
          >
            <FcManager />
          </button>
        </div>
      </div>
    </div>
  );
};
