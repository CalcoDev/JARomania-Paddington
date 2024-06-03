import Image from "next/image";
import Link from "next/link";
import React from "react";

const FooterLink = ({ href, ...rest }: any) => {
  return (
    <Link
      href={href}
      className="text-md px-4 py-2 font-normal transition-all duration-150 ease-in-out hover:cursor-pointer hover:opacity-75"
    >
      {rest.children}
    </Link>
  );
};

const Footer = () => {
  return (
    <div className="mb-32 w-full rounded-lg p-8 text-text sm:p-16 md:p-32 lg:px-[25vw]">
      <div className="flex h-full flex-col gap-5 rounded-lg bg-primary bg-opacity-10 p-12">
        <div className="flex flex-col justify-between gap-5 md:flex-row">
          <div className="flex flex-col">
            <p className="mb-6 opacity-50">EXPLORE</p>
            <FooterLink href="/#information">Information</FooterLink>
            <FooterLink href="/clubs">Clubs</FooterLink>
            <FooterLink href="/#about">About</FooterLink>
          </div>
          <div className="flex flex-col justify-between">
            <div className="hidden items-center justify-center gap-5 self-end md:flex">
              <Image
                src="/ai_bear.png"
                alt="Paddington Logo"
                width={32}
                height={32}
              />
              <Link href="/" className="text-lg font-semibold">
                Paddington
              </Link>
            </div>
            <div className="w-full">
              <h1 className="text-base font-light">No cookies 🍪</h1>
              <h2 className="text-xs font-light opacity-50">
                All rights reserved. No part of this website may be reproduced,
                distributed, or transmitted in any form or by any means, without
                prior written permission of the owner.
              </h2>
            </div>
          </div>
          <div className="flex items-center justify-center gap-5 self-center md:hidden">
            <Image
              src="/ai_bear.png"
              alt="Paddington Logo"
              width={32}
              height={32}
            />
            <h1 className="text-lg font-semibold">Paddington</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
