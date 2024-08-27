"use client";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import React from "react";
import Image from "next/image";
import { date } from "@/utils/date";
import { SiGooglemaps } from "react-icons/si";
import NavLinksController from "@/controllers/NavLinksController";

type MenuItem = {
  id: string;
  label?: string;
  href: string;
};

export interface FooterProps {
  className?: string;
  ItemMenu?: MenuItem[];
}

export default function Footer({ className = "", ItemMenu }: FooterProps) {
    const currentData =  date();
  return (
    <footer className="bg-[#0D0D0D] text-white pt-8">
      <div className="max-w-[280px] md:max-w-7xl w-full mx-auto">
        <div className="flex flex-col justify-center md:flex-row gap-7 md:justify-between md:px-5">
          <div className="">
            <div className="text-[1.5rem] font-bold mb-3 flex gap-2 items-center">
              <SiGooglemaps /> Endereço
            </div>
            <div className="text-[1rem] ">Rua 7, N° 11 - Colina, Ataíde</div>
            <div className="text-[1rem]">Vila Velha - ES - CEP 29119445</div>
            <a href="tel:27992583137" className="text-[1rem] block">Telefone: (27) 99258-3137</a>
            <a href="mailto:assembleiadedeusfamiliacolinas@gmail.com" className="text-[1rem] block">Email: assembleiadedeusfamiliacolinas@gmail.com </a>
          </div>
          <div>
            <h2 className="text-[1.5rem] font-bold">Assembleia de Deus</h2>
             <div>
              <ul>
                {ItemMenu &&
                  ItemMenu.map((item, index) => (
                    <li
                      className="py-2 text-[20px]"
                      key={index}
                      onClick={() => {
                        NavLinksController.execute(item.id);
                      }}
                    >
                      <Link
                        href={item.href}
                        className="text-[#fff] text-[1em] font-semibold"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="foooter-social xl:max-w-[150px] w-full md:max-w-auto md:w-auto md:self-start">
            <h2 className="text-[1.5rem] font-bold text-left">Siga-me</h2>
            <div className="flex gap-3 flex-wrap">
            <Link target="_blank" href="https://www.instagram.com/assembleiadedeusfamiliacolinas">
              <div className="social bg-white h-[40px] w-[40px] rounded-full flex justify-center items-center hover:bg-[#A9328C] hover:text-white transition duration-700 hover:scale-125 mt-4">
                <FaInstagram className="instagram text-[20px] text-black" />
              </div>
            </Link>
            <Link target="_blank" href="https://www.facebook.com/Assembleiadedeusfamiliacolinas">
              <div className="social bg-white h-[40px] w-[40px] rounded-full flex justify-center items-center hover:bg-[#0866ff] hover:text-white transition duration-700 hover:scale-125 mt-4">
                <FaFacebook className="instagram text-[20px] text-black" />
              </div>
            </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-[0.2px] border-white pt-[1rem] mt-[2.4rem] md:mt-[2rem] py-4 md:py-auto">
        <p className="text-center">
          © {currentData.getFullYear()} Assembleia de Deus Colinas. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
