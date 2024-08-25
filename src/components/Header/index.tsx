"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTimes, FaBars, FaAngleLeft } from "react-icons/fa";
import NavMobileLogo from "../NavMobileLogo";
import { useRouter } from "next/navigation";
import NavLinksController from "@/controllers/NavLinksController";

type MenuItem = {
  id: string;
  label: string;
  href: string;
};

export interface HeaderProps {
  active: boolean;
  className?: string;
  ItemMenu?: MenuItem[];
}

export default function Header({
  active = false,
  className = "",
  ItemMenu,
}: HeaderProps) {
  const router = useRouter();
  const [openMenu, setOpenMenu] = React.useState(false);
  const [scrollMenu, setscrollMenu] = React.useState(false);
  const [scrollProgress, setScrollProgress] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (scrollY / documentHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const handleScrollState = () => {
      const scrollTop = window.scrollY;
      scrollTop > 10 ? setscrollMenu(true) : setscrollMenu(false);
    };
    window.addEventListener("scroll", handleScrollState);
    return () => window.removeEventListener("scroll", handleScrollState);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-40 w-full flex justify-end xl:justify-center min-h-[10rem] shadow-[0_3px_6px_rgba(0,0,0,0.1)] py-0 md:py-2 
      ${
        scrollMenu
          ? "bg-transparent md:bg-white"
          : "md:bg-transparent duration-300 shadow-[initial]"
      }`}
    >
      <NavMobileLogo
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        scrollMenu={scrollMenu}
      />
      <div
        className={`${
          openMenu ? "" : "hidden"
        } absolute top-0 h-screen w-full bg-black/50 xl:hidden`}
      ></div>
      <nav
        className={`${
          !openMenu
            ? "translate-x-full xl:translate-x-0"
            : "translate-x-0 transition-transform duration-500"
        } bg-white xl:bg-transparent flex flex-col xl:flex-row pt-20 xl:pt-0 fixed top-0 right-0 xl:right-auto w-full max-w-80 xl:max-w-7xl max-h-screen h-full xl:h-auto z-50 w-ful mx-auto gap-5 items-center justify-start xl:justify-between
          `}
      >
        <div className="hidden xl:flex my-2">
          <Link href="/">
            {scrollMenu}
            {scrollMenu ? (
              <div className="bg-[url('https://www.dropbox.com/scl/fi/l5igvjiratn4g1hwi7iwa/logo.png?rlkey=tgrw3osukscml1ig03ruxrs18&st=s344oicf&dl=1')] bg-contain bg-no-repeat h-[130px] w-[130px]"></div>
            ) : (
              
              <div className="bg-[url('https://www.dropbox.com/scl/fi/cqn0j8tljx5x4tbetbiyg/logowhite.png?rlkey=abhqr4h7roo2zc46dqibftocm&st=gpc3y3fi&dl=1')] bg-contain bg-no-repeat h-[130px] w-[130px]"></div>
            )}
          </Link>
        </div>
        <ul className="flex flex-col xl:flex-row gap-4 xl:gap-16 w-full xl:w-auto p-1 xl:p-0 text-center text-uppercase text-white">
          {ItemMenu &&
            ItemMenu.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  NavLinksController.execute(item.id);
                  setOpenMenu(false);
                }}
              >
                <Link
                  href={item.href}
                  className={`${
                    scrollMenu
                      ? "text-black"
                      : "xl:text-white xl:after:bg-white"
                  } relative flex items-center w-full xl:w-auto after:content-[''] after:absolute after:bottom-[-0.3em] after:left-0 after:w-[0] hover:after:w-full after:h-[0.3em] after:transition-all after:duration-[2s] rounded-md after:bg-[#403C3D]  text-[#373737] text-[1.5em] font-semibold`}
                >
                  <FaAngleLeft className="block xl:hidden" />{" "}
                  <span className="block w-full text-right xl:static xl:w-auto xl:text-start pr-5">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  );
}
