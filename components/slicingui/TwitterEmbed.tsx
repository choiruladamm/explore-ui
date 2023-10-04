/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import { FC } from "react";
import { Icons } from "../Icons";

interface TwitterEmbedProps {}

const TwitterEmbed: FC<TwitterEmbedProps> = ({}) => {
  const imageLink =
    "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80";

  return (
    <div className="h-screen bg-[#141d26] text-white grid place-items-center">
      <div className="card bg-[#243447] p-10 max-w-2xl rounded-lg flex flex-col gap-6">
        {/* top */}
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="h-16 w-16 bg-white rounded-full overflow-hidden">
              <img
                src={imageLink}
                alt="test"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col ml-5">
              <p className="font-bold text-xl leading-6">Levi Okoye</p>
              <p className="text-gray-400">@leviokoyee</p>
            </div>
          </div>
          {/* <Image src="/twitter.png" alt="twitter" height={40} width={40} /> */}
          <Icons.twitter className="fill-current text-sky-600 h-8 w-8" />
        </div>

        {/* middle */}
        <div className="paragraph text-gray-200 leading-7">
          {`Why do they call it 'debugging' when it feels more like 'wildly guessing and hoping for the best'? `}{" "}
          <span className="text-sky-500">#programming #coding #debugging</span>
        </div>

        {/* bottom */}
        <div className="flex gap-7">
          <div className="text-gray-400 font-medium flex gap-2">
            <Icons.love />
            650
          </div>
          <div className="text-gray-400 font-medium">
            3:40 PM - Feb 24, 2023
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwitterEmbed;
