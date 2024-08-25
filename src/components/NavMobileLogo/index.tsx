import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

interface props {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  scrollMenu: boolean;
}

export default function NavMobileLogo({ openMenu, setOpenMenu, scrollMenu }: props) {
  const handleMenuClick = () => {
  if (window.innerWidth > 1024) { // Ajuste o valor conforme necessário
    setOpenMenu(!openMenu);
  }
}; 
  return (
   <div className={` w-full flex justify-between items-center flex-row-reverse ${scrollMenu ? 'bg-white':' md:bg-transparent'}`}>
      <div className={`${openMenu ? 'self-start ':'self-center'}`}>
        <div className="relative z-[999] block xl:hidden w-[40px] self-end xl:self-start m-3">
        {openMenu ? (
      <div
        className={`${openMenu ? 'text-black':'text-white'} transform rotate-180 transition-all`}
        onClick={()=>setOpenMenu(!openMenu)}
      >
        <FaTimes className={` ${openMenu || scrollMenu ? 'text-black':'text-white'} cursor-pointer text-[2em] text-black`} />
      </div>
    ) : (
      <div
        className="transform rotate-0 transition-all"
        onClick={()=>setOpenMenu(!openMenu)}
      >
        <FaBars className={` ${openMenu || scrollMenu ? 'text-black':'text-white'} cursor-pointer text-[2em] text-black`} />
      </div>
    )}
        </div>
      </div>
      <div className="flex xl:hidden">
        <Link href="/">
        {scrollMenu ? <div className="bg-[url('https://www.dropbox.com/scl/fi/l5igvjiratn4g1hwi7iwa/logo.png?rlkey=tgrw3osukscml1ig03ruxrs18&st=s344oicf&dl=1')] bg-contain bg-no-repeat h-[130px] w-[130px]"></div> : <div className="bg-[url('https://www.dropbox.com/scl/fi/cqn0j8tljx5x4tbetbiyg/logowhite.png?rlkey=abhqr4h7roo2zc46dqibftocm&st=gpc3y3fi&dl=1')] bg-contain bg-no-repeat h-[130px] w-[130px]"></div>}

        </Link>
      </div>
    </div>
  );
}
