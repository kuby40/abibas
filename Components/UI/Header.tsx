import Image from "next/image";
import logo from "../../public/logo.png";
import NavBarDropdown from "./NavBarDropdown";
const Header = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-black py-2 text-white text-center font-medium text-sm font-mono">
        <span className="inline-flex">
          <p>Join the club. Get Rewarded.</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </div>
      <div className="py-1 text-xs text-slate-500 text-right pr-10">
        <span className="px-3">
          <a href="#">help</a>
        </span>
        <span className="px-3">
          <a href="#">exchanges and returns</a>
        </span>
        <span className="px-3">
          <a href="#">order tracker</a>
        </span>
        <span className="px-3">
          <a href="#">become a member</a>
        </span>
      </div>
      <div className="flex flex-row bg-slate-500">
        <div className="basis-1/6 lg:hidden">
          <NavBarDropdown/>
        </div>
        <div className="invisible basis-1/6 ml-5 lg:visible mx-auto my-auto">
          <Image width={75} height={55} src={logo} alt="logo"></Image>
        </div>
        <div className="basis-3/6 mt-auto text-left">
        <div className="lg:invisible mx-auto my-auto">
          <Image width={75} height={55} src={logo} alt="logo"></Image>
        </div>
          <div className="invisible mb-2 lg:visible">
            <a href="#" className="px-2 font-medium">
              MEN
            </a>
            <a href="#" className="px-2 font-medium">
              WOMEN
            </a>
            <a href="#" className="px-2 font-medium">
              KIDS
            </a>
            <a href="#" className="px-2">
              SPORTS
            </a>
            <a href="#" className="px-2">
              BRANDS
            </a>
            <a href="#" className="px-2">
              GIFT GUIDE
            </a>
          </div>
        </div>
        <div className="basis-2/6 flex mt-auto mb-auto items-center justify-end mr-6">
          <label htmlFor="searchBar"></label>
          <input
            type="text"
            name="searchBar"
            placeholder="Search"
            className="bg-slate-200 p-1"
          ></input>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mx-2 ml-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mx-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mx-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
