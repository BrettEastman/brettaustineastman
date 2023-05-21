"use client";
import Image from "next/image";
import Link from "next/link";
import Headshot from "../public/docs/images/BrettHeadshot 2.jpg";
import { AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="fixed w-full h-24 shadow-xl bg-white font-mono">
        <div className="flex justify-between items-center h-full w-full px-4 2xl: px-16">
          <Link href={"/"}>
            <Image
              src={Headshot}
              alt={"Brett Eastman headshot"}
              width="90"
              height="90"
              className="cursor-pointer"
            />
          </Link>
          <div className="hidden sm:flex">
            <ul className="hidden sm:flex">
              <Link href={"/about"}>
                <li className="ml-10 uppercase hover:border-b text-xl">
                  About
                </li>
              </Link>
              <Link href={"/selected_works"}>
                <li className="ml-10 uppercase hover:border-b text-xl">
                  Selected Works
                </li>
              </Link>
              <Link href={"/production"}>
                <li className="ml-10 uppercase hover:border-b text-xl">
                  Production
                </li>
              </Link>
              <Link href={"/sound_design"}>
                <li className="ml-10 uppercase hover:border-b text-xl">
                  Sound Design
                </li>
              </Link>
            </ul>
          </div>
          <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
            <AiOutlineMenu size={25} />
          </div>
        </div>
        <div
          className={
            menuOpen
              ? "fixed left-0 top-0 w-[65%] sm-hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-400"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex w-full items-center justify-end">
            <div onClick={handleNav} className="cursor-pointer">
              <AiOutlineClose size={25}/>
            </div>
          </div>
          <div className="flex-col py-4">
            <ul>
              <Link href={"/about"}>
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-4 cursor-pointer"
                >
                  About
                </li>
              </Link>
              <Link href={"/selected_works"}>
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-4 cursor-pointer"
                >
                  Selected Works
                </li>
              </Link>
              <Link href={"/production"}>
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-4 cursor-pointer"
                >
                  Production
                </li>
              </Link>
              <Link href={"/sound_design"}>
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-4 cursor-pointer"
                >
                  Sound Design
                </li>
              </Link>
            </ul>
          </div>
          <div className="flex flex-row justify-around pt-10 items-center">
            <AiOutlineLinkedin size={30} className="cursor-pointer"/>
            <AiOutlineGithub size={30} className="cursor-pointer"/>
            <AiOutlineInstagram size={30} className="cursor-pointer"/>
          </div>
        </div>
      </nav>
    </>
  );
}
