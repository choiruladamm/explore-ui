"use client";

import { cn } from "@/lib/utils";
import { AlignRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";

interface TestNavbarTwoProps {}

const TestNavbarTwo: FC<TestNavbarTwoProps> = ({}) => {
  const [nav, setNav] = useState<boolean>(false);

  const navigation = [
    { title: "Customers", path: "#  " },
    { title: "Careers", path: "#  " },
    { title: "Guides", path: "# " },
    { title: "Partners", path: "# " },
  ];

  return (
    <nav className="border-b bg-white md:static md:border-0">
      <div className="mx-auto max-w-screen-xl items-center px-4 md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:block md:py-5">
          <Link href="/">
            <Image
              src="https://www.floatui.com/logo.svg"
              width={120}
              height={50}
              alt="Float UI logo"
            />
          </Link>
          <div className="md:hidden">
            <button
              className="rounded-md p-2  text-gray-700 outline-none focus:border focus:border-gray-400 "
              onClick={() => setNav(!nav)}
            >
              {nav ? <X /> : <AlignRight />}
            </button> 
          </div>
        </div>

        <div
          className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
            nav ? "block" : "hidden"
          }`}
        >
          <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className="text-gray-600 hover:text-indigo-600">
                  <a href={item.path}>{item.title}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="hidden md:inline-block">
          <a
            href="# "
            className="rounded-md bg-indigo-600 px-4 py-3 text-white shadow hover:bg-indigo-700"
          >
            Get Started
          </a>
        </div>
        
      </div>
    </nav>
  );
};

export default TestNavbarTwo;
