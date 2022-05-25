import Link from "next/link"
import React, { useState } from "react"
import { hamburgerIcon, xBtn } from "./icons"
import Image from "next/image"
import logo from "../public/media/logo-black.png"

export const HeaderRu = (props) => {
  const [isMobileMenu, setIsMobileMenu] = useState(false)
  
  function mobileMenuOpen() {
    setIsMobileMenu(true)
  }

  return (
    <header>
      <div id="headerInner" className="max-w-[1200px] mx-auto px-4 h-[60px] flex items-center justify-center text-textGray relative">
        <span onClick={mobileMenuOpen} className="absolute left-6 block md:hidden z-30">{hamburgerIcon}</span>
        <Link href="/">
          <a className="z-50 md:absolute md:left-6 h-full py-2">
            <div className="relative w-[200px] h-full md:-ml-[30%]">
              <Image src={logo} alt="Logo" layout="fill" objectFit="contain" />
            </div>
          </a>
        </Link>
        <div className="md:flex items-center space-x-6 hidden">
          <button onClick={()=>props.onRefClick(props.introRef)} className="hover:text-mainBlue transition duration-300">Главная</button>
          <button onClick={()=>props.onRefClick(props.aboutRef)}  className="hover:text-mainBlue transition duration-300">О нас</button>
          <button onClick={()=>props.onRefClick(props.featuresRef)} className="hover:text-mainBlue transition duration-300">Услуги</button>
          <button onClick={()=>props.onRefClick(props.contactsRef)} className="hover:text-mainBlue transition duration-300">Контакты</button>
        </div>
        <div className="md:flex hidden items-center space-x-4 absolute right-6">
          <Link href="/">
            <a className="hover:text-mainBlue transition duration-300">O&apos;z</a>
          </Link>
          <Link href="/indexRu">
            <a className="hover:text-mainBlue text-mainBlue">Pу</a>
          </Link>
        </div>
      </div>
      {isMobileMenu && <MobileMenuRu setIsMobileMenu={setIsMobileMenu} />}
    </header>
  )  
}

const MobileMenuRu = ({setIsMobileMenu}, props) => {
  function closeMobileMenu() {
    setIsMobileMenu(false)
  }
  return (
    <div id="mobileMenu" className="fixed inset-0 bg-white z-40 md:hidden flex flex-col space-y-4 justify-center items-center">
      <span onClick={closeMobileMenu} className="absolute top-[20px] left-6">{xBtn}</span>
      <div className="flex flex-col justify-center items-center space-y-4">
        <Link href="/">
            <a className="hover:text-mainBlue transition duration-300">Главная</a>
          </Link>
          <Link href="/">
            <a className="hover:text-mainBlue transition duration-300">О нас</a>
          </Link>
          <Link href="/">
            <a className="hover:text-mainBlue transition duration-300">Услуги</a>
          </Link>
          <Link href="/">
            <a className="hover:text-mainBlue transition duration-300">Контакты</a>
          </Link>
          <div className="absolute bottom-4 flex items-center">
            <Link href="/">
              <a className="hover:text-mainBlue transition duration-300 border-r border-textGray pr-2">O&apos;z</a>
            </Link>
            <Link href="/indexRu">
              <a className="hover:text-mainBlue text-mainBlue pl-2">Pу</a>
            </Link>
          </div>
      </div>  
    </div>
  )
}