import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
        <div>
        <nav
          className={`relative flex flex-wrap items-center justify-between px-2 py-3 bg-black mb-3`}
        >
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex flex-col justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
              <a
                className="text-sm font-bold leading-relaxed inline-block mr-4 whitespace-nowrap uppercase text-white"
                href="/"
              >
                  Pressble
              </a>
              <p className="text-xs text-gray-300 font-semibold uppercase">
                <span className="mr-0.5 font-light text-white">By</span>Narc.Dev
              </p>
              <button
                className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
              >
                <span className="block relative w-6 h-px rounded-sm bg-white"></span>
                <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
              </button>
            </div>
            <div
              className="lg:flex flex-grow items-center"
              id="example-navbar-warning"
            >
              <ul className="flex flex-col lg:flex-row list-none ml-auto">
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#pablo"
                  >
                    Discover
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#pablo"
                  >
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#pablo"
                  >
                    Setting
                  </a>
                </li>{" "}
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#pablo"
                  >
                    About
                  </a>
                </li>
                {/* Dark Mode Button */}
                {/* <li>
                  <div className="flex items-center justify-center">
                    <label
                      htmlFor="toggleB"
                      className="flex items-center cursor-pointer"
                    >
                      <div className="relative">
                        <input
                          type="checkbox"
                          id="toggleB"
                          className="sr-only"
                        />
                        <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                        <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                      </div>
                    </label>
                    <div
                      className={`ml-3 text-${
                        props.mode === "rose-500" ? "black" : "rose-500"
                      } font-medium `}
                    >
                      {props.mode === "rose-500" ? "Go Dark" : "Go Light"}
                    </div>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
  
    );
  }
}

export default Navbar;
