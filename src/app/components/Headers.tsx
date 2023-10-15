"use client";

import { Suspense } from "react";
import Link from "next/link";
import Analytics from "./Analytics";
import MetaInfo from "./MetaInfo";

const Headers = () => {
  return (
    <>
      <Suspense>
        <Analytics />
        <MetaInfo />
      </Suspense>
      <header>
        <nav className=" bg-white shadow border-gray-200 px-2 py-2.5">
          <div className="flex flex-wrap max-w-7xl justify-between items-center mx-auto">
            <Link href="/" className="flex items-center">
              {/* <img src="" className="mr-3 h-6 sm:h-9" alt="Petsta" /> */}
              <h1 className="self-center text-xl font-semibold whitespace-nowrap font-ridi">
                Novel
                <span className="text-yellow-300 font-bold ml-1">DucK</span>
              </h1>
            </Link>
            {/* <div className="flex items-center lg:order-2">
                <button
                  data-collapse-toggle="mobile-menu-2"
                  type="button"
                  className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="mobile-menu-2"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 9h16.5m-16.5 6.75h16.5"
                    />
                  </svg>
                </button>
              </div> */}
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 items-center lg:flex-row lg:space-x-4 lg:mt-0">
                <li>
                  <Link href="/novels" className="block">
                    Browse
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href="/users/signin"
                    className="bg-yellow-300 text-base px-4 py-2 rounded-full"
                  >
                    SIGN IN
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Headers;
