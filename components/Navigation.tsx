"use client";

import Image from "next/image";
import ThemeSwitch from "./ThemeSwitch";
import Button from "./inputs/Button";
import { AnchorHTMLAttributes, useState } from "react";
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";

const NavigationLink = ({ text, href }: { text: string; href: string }) => {
  return (
    <Link
      className="flex-1 scale-100 cursor-pointer select-none scroll-smooth text-text text-opacity-75 transition-all duration-75 ease-in-out hover:scale-105 hover:text-opacity-100"
      href={`${href}`}
    >
      {text}
    </Link>
  );
};

const PhoneNavLink = ({ children, className, href, ...rest }: any) => {
  return (
    <Link
      href={href}
      className="flex flex-1 items-center p-4 transition-all duration-200 ease-in-out hover:opacity-50"
      {...rest}
    >
      {children}
    </Link>
  );
};

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const nav = useRouter();
  return (
    <nav className="fixed left-0 top-0 z-10 h-16 w-screen border-b-2 border-white border-opacity-25 bg-background">
      <div className="mx-auto flex h-full w-4/5 flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-2">
          <Image
            src="/JARomania-Paddington/paddington_logo.png"
            alt="Paddington Logo"
            width={32}
            height={32}
          />
          <Link href="/" className="text-lg font-semibold">
            Paddington
          </Link>
        </div>

        <div className="hidden md:block">
          <div className="flex flex-row items-center justify-between gap-[5vw]">
            <NavigationLink text="Information" href="/#information" />
            <NavigationLink text="Clubs" href="/clubs" />
            <NavigationLink text="About" href="/#about" />
            <a
              href="https://www.chatbase.co/chatbot-iframe/RM93g6ev0UaREJ0bjsk1D"
              className="rounded-lg border-2 border-white border-opacity-25 bg-background px-8 py-2 text-text transition-all duration-75 ease-in-out hover:bg-text hover:text-background"
            >
              Chat
            </a>
          </div>
        </div>

        <div className="block md:hidden">
          <Image
            onClick={() => setOpen(!open)}
            className="scale-150 select-none hover:scale-[1.75] hover:cursor-pointer active:scale-[1.25]"
            src="/JARomania-Paddington/burger.svg"
            alt="BUGER MENU"
            width={16}
            height={16}
          />
          {/* {open && ( */}
          <div
            className={`${open ? "h-[min(16rem)] border-b-2" : "h-0 border-b-0"} absolute left-0 top-0 mt-16 flex w-screen flex-col gap-2 overflow-hidden border-white border-opacity-25 bg-background transition-all duration-200 ease-in-out`}
          >
            <PhoneNavLink
              onClick={() => {
                setOpen(false);
              }}
              href="/#information"
            >
              Information
            </PhoneNavLink>
            <PhoneNavLink
              onClick={() => {
                setOpen(false);
              }}
              href="/#clubs"
            >
              Clubs
            </PhoneNavLink>
            <PhoneNavLink
              onClick={() => {
                setOpen(false);
              }}
              href="/#about"
            >
              About
            </PhoneNavLink>
            <PhoneNavLink
              onClick={() => {
                setOpen(false);
              }}
              href="/chat"
            >
              See the demo!
            </PhoneNavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
