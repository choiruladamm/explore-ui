import { FC } from "react";

interface HeroPinestOneProps {}

const HeroPinestOne: FC<HeroPinestOneProps> = ({}) => {
  return (
    // <section classNameName="w-full px-6 pb-12 antialiased bg-white">
    //   <div classNameName="mx-auto max-w-7xl">
    //     <div classNameName="container max-w-sm py-32 mx-auto mt-px text-left sm:max-w-md md:max-w-lg sm:px-4 md:max-w-none md:text-center">
    //       <h1 classNameName="text-3xl font-bold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:text-4xl md:text-7xl lg:text-8xl">
    //         Start Crafting Your <br classNameName="hidden sm:block" /> Next Great
    //         Idea
    //       </h1>
    //       <div classNameName="mx-auto mt-5 text-gray-400 md:mt-8 md:max-w-lg md:text-center md:text-xl">
    //         Simplifying the creation of landing pages, blog pages, application
    //         pages and so much more!
    //       </div>
    //       <div classNameName="flex flex-col items-center justify-center mt-8 space-y-4 text-center sm:flex-row sm:space-y-0 sm:space-x-4">
    //         <span classNameName="relative inline-flex w-full md:w-auto">
    //           <a
    //             href="#_"
    //             classNameName="inline-flex items-center justify-center w-full px-8 py-4 text-base font-medium leading-6 text-white bg-gray-900 border border-transparent rounded-full xl:px-10 md:w-auto hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
    //           >
    //             Purchase Now
    //           </a>
    //         </span>
    //         <span classNameName="relative inline-flex w-full md:w-auto">
    //           <a
    //             href="#_"
    //             classNameName="inline-flex items-center justify-center w-full px-8 py-4 text-base font-medium leading-6 text-gray-900 bg-gray-100 border border-transparent rounded-full xl:px-10 md:w-auto hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
    //           >
    //             Learn More
    //           </a>
    //         </span>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section className="w-full px-3 antialiased bg-gradient-to-br from-gray-900 via-black to-gray-800 lg:px-6">
      <div className="mx-auto max-w-7xl">
        <nav
          className="flex items-center w-full h-24 select-none"
          x-data="{ showMenu: false }"
        >
          <div className="relative flex flex-wrap items-start justify-between w-full mx-auto font-medium md:items-center md:h-24 md:justify-between">
            <a
              href="#_"
              className="flex items-center w-1/4 py-4 pl-6 pr-4 space-x-2 font-extrabold text-white md:py-0"
            >
              <span className="flex items-center justify-center flex-shrink-0 w-8 h-8 text-gray-900 rounded-full bg-gradient-to-br from-white via-gray-200 to-white">
                <svg
                  className="w-auto h-5 -translate-y-px"
                  viewBox="0 0 69 66"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m31.2 12.2-3.9 12.3-13.4.5-13.4.5 10.7 7.7L21.8 41l-3.9 12.1c-2.2 6.7-3.8 12.4-3.6 12.5.2.2 5-3 10.6-7.1 5.7-4.1 10.9-7.2 11.5-6.8.6.4 5.3 3.8 10.5 7.5 5.2 3.8 9.6 6.6 9.8 6.4.2-.2-1.4-5.8-3.6-12.5l-3.9-12.2 8.5-6.2c14.7-10.6 14.8-9.6-.4-9.7H44.2L40 12.5C37.7 5.6 35.7 0 35.5 0c-.3 0-2.2 5.5-4.3 12.2Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span>LOGO</span>
            </a>
            <div className="absolute z-50 flex-col items-center justify-center w-full h-auto px-2 text-center text-gray-400 -translate-x-1/2 border-0 border-gray-700 rounded-full md:border md:w-auto md:h-10 left-1/2 md:flex-row md:items-center">
              <a
                href="#"
                className="relative inline-block w-full h-full px-4 py-5 mx-2 font-medium leading-tight text-center text-white md:py-2 group md:w-auto md:px-2 lg:mx-3 md:text-center"
              >
                <span>Home</span>
                <span className="absolute bottom-0 left-0 w-full h-px duration-300 ease-out translate-y-px bg-gradient-to-r md:from-gray-700 md:via-gray-400 md:to-gray-700 from-gray-900 via-gray-600 to-gray-900"></span>
              </a>
              <a
                href="#"
                className="relative inline-block w-full h-full px-4 py-5 mx-2 font-medium leading-tight text-center duration-300 ease-out md:py-2 group hover:text-white md:w-auto md:px-2 lg:mx-3 md:text-center"
              >
                <span>Features</span>
                <span className="absolute bottom-0 w-0 h-px duration-300 ease-out translate-y-px group-hover:left-0 left-1/2 group-hover:w-full bg-gradient-to-r md:from-gray-700 md:via-gray-400 md:to-gray-700 from-gray-900 via-gray-600 to-gray-900"></span>
              </a>
              <a
                href="#"
                className="relative inline-block w-full h-full px-4 py-5 mx-2 font-medium leading-tight text-center duration-300 ease-out md:py-2 group hover:text-white md:w-auto md:px-2 lg:mx-3 md:text-center"
              >
                <span>Blog</span>
                <span className="absolute bottom-0 w-0 h-px duration-300 ease-out translate-y-px group-hover:left-0 left-1/2 group-hover:w-full bg-gradient-to-r md:from-gray-700 md:via-gray-400 md:to-gray-700 from-gray-900 via-gray-600 to-gray-900"></span>
              </a>
              <a
                href="#"
                className="relative inline-block w-full h-full px-4 py-5 mx-2 font-medium leading-tight text-center duration-300 ease-out md:py-2 group hover:text-white md:w-auto md:px-2 lg:mx-3 md:text-center"
              >
                <span>Contact</span>
                <span className="absolute bottom-0 w-0 h-px duration-300 ease-out translate-y-px group-hover:left-0 left-1/2 group-hover:w-full bg-gradient-to-r md:from-gray-700 md:via-gray-400 md:to-gray-700 from-gray-900 via-gray-600 to-gray-900"></span>
              </a>
            </div>
            <div className="fixed top-0 left-0 z-40 items-center hidden w-full h-full p-3 text-sm bg-gray-900 bg-opacity-50 md:w-auto md:bg-transparent md:p-0 md:relative md:flex">
              <div className="flex-col items-center w-full h-full p-3 overflow-hidden bg-black bg-opacity-50 rounded-lg select-none md:p-0 backdrop-blur-lg md:h-auto md:bg-transparent md:rounded-none md:relative md:flex md:flex-row md:overflow-auto">
                <div className="flex flex-col items-center justify-end w-full h-full pt-2 md:w-full md:flex-row md:py-0">
                  <a
                    href="#_"
                    className="w-full py-5 mr-0 text-center text-gray-200 md:py-3 md:w-auto hover:text-white md:pl-0 md:mr-3 lg:mr-5"
                  >
                    Sign In
                  </a>
                  <a
                    href="#_"
                    className="inline-flex items-center justify-center w-full px-4 py-3 md:py-1.5 font-medium leading-6 text-center whitespace-no-wrap transition duration-150 ease-in-out border border-transparent md:mr-1 text-gray-600 md:w-auto bg-white rounded-lg md:rounded-full hover:bg-white focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700"
                  >
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute right-0 z-50 flex flex-col items-end translate-y-1.5 w-10 h-10 p-2 mr-4 rounded-full cursor-pointer md:hidden hover:bg-gray-200/10 hover:bg-opacity-10">
              <svg
                className="w-6 h-6"
                x-show="!showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                x-cloak
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
              <svg
                className="w-6 h-6"
                x-show="showMenu"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                x-cloak
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
          </div>
        </nav>

        <div className="container px-6 py-32 mx-auto md:text-center md:px-4">
          <h1 className="text-4xl font-extrabold leading-none leading-10 tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl">
            <span className="block">Simplify the way you</span>{" "}
            <span className="relative inline-block mt-3 text-white">
              design websites
            </span>
          </h1>
          <p className="mx-auto mt-6 text-sm text-left text-gray-200 md:text-center md:mt-12 sm:text-base md:max-w-xl md:text-lg xl:text-xl">
            If you are ready to change the way you design websites, then you'll
            want to use our block builder to make it fun and easy!
          </p>
          <div className="relative flex items-center mx-auto mt-12 overflow-hidden text-left border border-gray-700 rounded-md md:max-w-md md:text-center">
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              className="w-full h-12 px-6 py-2 font-medium text-gray-800 focus:outline-none"
            />
            <span className="relative top-0 right-0 block">
              <button
                type="button"
                className="inline-flex items-center w-32 h-12 px-8 text-base font-bold leading-6 text-white transition duration-150 ease-in-out bg-gray-800 border border-transparent hover:bg-gray-700 focus:outline-none active:bg-gray-700"
                data-primary="gray-600"
              >
                Sign Up
              </button>
            </span>
          </div>
          <div className="mt-8 text-sm text-gray-300">
            By signing up, you agree to our terms and services.
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPinestOne;
