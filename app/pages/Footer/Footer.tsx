'use client';

import React from "react";
import { FaGithub, FaInstagram, FaLinkedin,  } from "react-icons/fa";
import  Link from "next/link"
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function FooterPage() {

  const pathname = usePathname();
  const isCartPage = pathname === "/cart";

  if (isCartPage) {
    return null;
  }


  return (
    <footer className="relative bg-gray-900 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-white">
              Let{`'`}s keep in touch!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-gray-400">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6">
              <button
                className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <Link href={"https://nevtik.org"}>
                  {" "}
                  <Image
                    width={1000}
                    height={1000}
                    alt=""
                    className="w-full"
                    src={"/nevtik.png"}
                  />
                </Link>
              </button>
              <button
                className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <Link href={"https://instagram.com/nevtikacademy"}>
                  {" "}
                  <FaInstagram />
                </Link>
              </button>
              <button
                className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                {" "}
                <Link href={"https://id.linkedin.com/company/nevtik"}>
                  <FaLinkedin />
                </Link>
              </button>
              <button
                className="bg-white text-gray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <Link href={"https://github.com/NEVTIK-org"}>
                  <FaGithub />
                </Link>
              </button>
            </div>
          </div>
          {/* Rest of the component remains the same */}
        </div>
        <hr className="my-6 border-gray-600" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-400 font-semibold py-1">
              Copyright ©{" "}
              <span id="get-current-year">{new Date().getFullYear()}</span>{" "}
              <a
                href="#"
                className="text-gray-400 hover:text-gray-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nevtik Furniture
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
