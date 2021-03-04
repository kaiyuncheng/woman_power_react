import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import data from "../data/data.json";

const Header = () => {
  const [menuState, setMenuState] = useState("scale-0");
  const [top, setTop] = useState(true);

  const menuTitles = data.menuTitle;

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  const toggleMenu = () => {
    if (menuState === "scale-0") {
      setMenuState("scale-100");
    } else {
      setMenuState("scale-0");
    }
  };

  return (
    <Fade top>
      <header className={`sticky top-0 left-0 z-40 ${!top && "bg-primary-light bg-opacity-75 blur shadow-md"}`}>
        <div className="relative">
          <div className="max-w-screen-2xl mx-auto px-3 lg:px-6">
            <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:flex-1">
                <a href="https://www.businesstoday.com.tw">
                  <span className="sr-only">Logo</span>
                  <svg
                    className="fill-current text-primary-dark hover:text-red-500 transition-colors duration-300"
                    id="bt_logo"
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="35"
                    viewBox="0 0 80 35"
                  >
                    <g
                      id="Group_20"
                      data-name="Group 20"
                      transform="translate(62.035 16.075)"
                    >
                      <g
                        id="Group_19"
                        data-name="Group 19"
                        transform="translate(0 0.327)"
                      >
                        <path
                          id="Path_58"
                          data-name="Path 58"
                          d="M570.748,157.175c.409-.166.614-.329.614-.5s-.211-.29-.633-.335l-2.473-.25.081,12.018,2.412.094Z"
                          transform="translate(-558.207 -154.266)"
                        />
                        <path
                          id="Path_59"
                          data-name="Path 59"
                          d="M553.6,159.97v-.006l-1.782-1.928-1.291,1.449-.015-5.291,2.81-.023v-.013c.317.009.828.089-.036-.811v-.009l-1.673-1.625-1.177,1.261h-5.959l.234,1.22h2.554l.014,5.471h-3.108l.222,1.1h2.872l.008,8.438,3.153-.58.086-7.858H553.6C553.889,160.738,554.473,160.891,553.6,159.97Z"
                          transform="translate(-544.168 -151.713)"
                        />
                      </g>
                      <path
                        id="Path_60"
                        data-name="Path 60"
                        d="M579.55,168.839a1.971,1.971,0,0,0,.694-1.616V152.294c.49-.256.735-.492.735-.705,0-.183-.22-.3-.658-.363l-3.233-.3v15.314s.169,2.254-.582,3.164Z"
                        transform="translate(-563.014 -150.929)"
                      />
                    </g>
                    <g
                      id="Group_21"
                      data-name="Group 21"
                      transform="translate(41.223 15.819)"
                    >
                      <path
                        id="Path_61"
                        data-name="Path 61"
                        d="M518.351,179.76V176.3c.408-.164.614-.322.614-.47,0-.106-.1-.24-.3-.4l-2.1-1.415-1.186,1.032h-1.644l-2.651-.718v7.031l2.771-.406v-1.575H515.4v.79Zm-4.495-1.313v-2.424H515.4v2.424Z"
                        transform="translate(-504.21 -164.126)"
                      />
                      <path
                        id="Path_62"
                        data-name="Path 62"
                        d="M513.75,151.978l-2.71-1.663-1.224,1.476h-9.481l-3.055-.512v8.563c-.074,1.442-.479,6.191-2.675,8.851,0,0,5.37-.8,5.754-8.851h.008v-.21c0-.086.008-.17.011-.261l-.011-.751.166.637h8.934c.206.046.7-.078.156-.643l.028.028-.134-.147a1.594,1.594,0,0,0-.137-.139L508.1,157l-1,1.252-.7-.024v-1.861h2.794l.043,0c.221,0,.912.1.02-.846v-.006l-1.292-1.3-1.01,1.123h-.555v-.844c.37-.15.555-.305.555-.473,0-.193-.209-.315-.632-.359l-2.852-.2v1.878h-2.553l.238,1.03h2.315v1.861h-3.1v-5.343h9.621v13.1s.167,2.253-.583,3.163l3.045-.568a1.972,1.972,0,0,0,.7-1.616l0-13.894.132-.063c.513-.254.771-.463.771-.63C514.047,152.262,513.949,152.128,513.75,151.978Z"
                        transform="translate(-494.605 -150.315)"
                      />
                    </g>
                    <path
                      id="Path_63"
                      data-name="Path 63"
                      d="M419.344,117.883c.367-.5.729-1.007,1.083-1.536,0,0,1.008.1,1.146-.718,0,0,.067-.545-.848-.837l-5.883-1.955s-5.826,13-18.354,20.428a41.015,41.015,0,0,0,21.1-13.172,48.377,48.377,0,0,0,4.032,4.308,30.8,30.8,0,0,0,12.74,8.371c.576-1.224,5.905-6.555,5.905-6.555A37.457,37.457,0,0,1,419.344,117.883Z"
                      transform="translate(-396.487 -112.838)"
                    />
                    <path
                      id="Path_64"
                      data-name="Path 64"
                      d="M441.617,148.791l-3.367-3.006a.653.653,0,0,0-1.042.121l-1.723,2.565-10.405-.041.32,1.444h15.7S442.539,150.034,441.617,148.791Z"
                      transform="translate(-413.151 -131.83)"
                    />
                    <path
                      id="Path_65"
                      data-name="Path 65"
                      d="M440.214,163.7l-4.2-1.952-2.042,1.356H414.429l.334,1.477,18.528-.05-5.92,8.58c-1.263,1.544-1.029,1.255-1.736,1.8l5.642.862c1.362.118,2.488-1.48,2.488-1.48l5.869-8.444a2.367,2.367,0,0,0,1.051-.657C441.444,164.425,440.214,163.7,440.214,163.7Z"
                      transform="translate(-406.944 -141.162)"
                    />
                  </svg>
                </a>
              </div>
              <div className="-my-2 md:hidden">
                <button
                  type="button"
                  className="rounded-full p-2 inline-flex items-center justify-center text-primary-dark hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-primary-dark"
                  onClick={toggleMenu}
                >
                  <span className="sr-only">Open menu</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
              <nav className="hidden text-base text-brown-dark md:flex space-x-10">
                {menuTitles.map((title, i) => {
                  return (
                    <div className="relative" key={`menu_item${i}`}>
                      <a
                        href={`#${title}`}
                        className="group py-1 text-center border-white inline-flex font-medium transition-colors focus:outline-none hover:text-primary-dark"
                      >
                        {title}
                        <span className="absolute left-0 bottom-0 w-full border-b-2 border-white transform scale-x-0 origin-left transition-all duration-500 group-hover:scale-x-100"></span>
                      </a>
                    </div>
                  );
                })}
              </nav>

              <div className="hidden md:flex items-center justify-end md:flex-1 ">
                <a href="https://www.facebook.com/share.php?u=https://www.businesstoday.com.tw/topic/2021/powerofwomen">
                  <span className="sr-only">Facebook icon</span>
                  <svg
                    className="fill-current text-primary-dark hover:text-blue-600 transition-colors duration-300"
                    id="icon_fb"
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                  >
                    <circle
                      id="Ellipse"
                      data-name="Ellipse"
                      cx="20"
                      cy="20"
                      r="20"
                    />
                    <path
                      id="Icon_zocial-facebook"
                      data-name="Icon zocial-facebook"
                      d="M13.257,10.74V6.921h3.081V5a5.026,5.026,0,0,1,1.349-3.54A4.293,4.293,0,0,1,20.957,0h3.06V3.82h-3.06a.674.674,0,0,0-.539.33,1.34,1.34,0,0,0-.24.81V6.92h3.839v3.819h-3.84V20h-3.84V10.74Z"
                      transform="translate(1.363 10)"
                      fill="#fff"
                    />
                  </svg>
                </a>
                <a
                  href="https://social-plugins.line.me/lineit/share?url=https://www.businesstoday.com.tw/topic/2021/powerofwomen"
                  className="ml-4"
                >
                  <span className="sr-only">Line icon</span>
                  <svg
                    className="fill-current text-primary-dark hover:text-green-500 transition-colors duration-300"
                    id="icon_line"
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                  >
                    <circle
                      id="Ellipse"
                      data-name="Ellipse"
                      cx="20"
                      cy="20"
                      r="20"
                    />
                    <path
                      id="Icon_simple-line"
                      data-name="Icon simple-line"
                      d="M16.138,8.6a.525.525,0,0,1,0,1.051H14.675v.938h1.463a.525.525,0,1,1,0,1.049H14.149a.526.526,0,0,1-.523-.524V7.138a.527.527,0,0,1,.525-.525H16.14a.525.525,0,0,1,0,1.05H14.675V8.6h1.463Zm-3.213,2.513a.524.524,0,0,1-.36.5.538.538,0,0,1-.166.026.515.515,0,0,1-.425-.208L9.938,8.664v2.45a.524.524,0,1,1-1.047,0V7.138a.522.522,0,0,1,.358-.5.485.485,0,0,1,.162-.028.539.539,0,0,1,.413.212L11.875,9.6V7.138a.525.525,0,1,1,1.05,0v3.976Zm-4.784,0a.524.524,0,1,1-1.048,0V7.138a.524.524,0,1,1,1.048,0Zm-2.055.524H4.1a.528.528,0,0,1-.525-.524V7.138a.525.525,0,0,1,1.05,0v3.451H6.086a.525.525,0,0,1,0,1.049M20,8.976C20,4.5,15.513.858,10,.858S0,4.5,0,8.976c0,4.009,3.558,7.368,8.363,8.007.326.068.769.215.882.492a2.036,2.036,0,0,1,.032.9l-.137.85c-.038.251-.2.988.874.537a32.237,32.237,0,0,0,7.863-5.812A7.186,7.186,0,0,0,20,8.976"
                      transform="translate(10 10.095)"
                      fill="#fff"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div
            className={`${menuState} absolute top-0 inset-x-0 transition ease-in-out transform origin-top-right md:hidden`}
          >
            <div className="h-screen bg-primary-light">
              <div className="p-3">
                <div className="flex items-center justify-end">
                  <button
                    type="button"
                    className="rounded-full p-2 inline-flex items-center justify-center text-primary-dark hover:bg-white focus:outline-none focus:ring-1 focus:ring-inset focus:ring-primary-dark"
                    onClick={toggleMenu}
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="mt-6">
                  <nav className="flex flex-col justify-center items-center text-lg">
                    {menuTitles.map((title, i) => {
                      return (
                        <a
                          href={`#${title}`}
                          key={`toggle_item${i}`}
                          onClick={toggleMenu}
                          className="relative mb-10 group font-medium transition-colors focus:outline-none hover:text-primary-dark"
                        >
                          {title}
                          <span className="absolute left-0 -bottom-2 w-full border-b-2 border-primary-dark transform scale-x-0 origin-left transition-all duration-500 group-hover:scale-x-100"></span>
                        </a>
                      );
                    })}
                  </nav>
                </div>
              </div>
              <div className="py-10 px-5 space-y-6">
                <div className="flex items-center justify-center">
                  <a href="https://www.facebook.com/share.php?u=https://www.businesstoday.com.tw/topic/2021/powerofwomen">
                    <span className="sr-only">Facebook icon</span>
                    <svg
                      className="fill-current text-primary-dark hover:text-blue-600"
                      id="icon_fb"
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                    >
                      <circle
                        id="Ellipse"
                        data-name="Ellipse"
                        cx="20"
                        cy="20"
                        r="20"
                      />
                      <path
                        id="Icon_zocial-facebook"
                        data-name="Icon zocial-facebook"
                        d="M13.257,10.74V6.921h3.081V5a5.026,5.026,0,0,1,1.349-3.54A4.293,4.293,0,0,1,20.957,0h3.06V3.82h-3.06a.674.674,0,0,0-.539.33,1.34,1.34,0,0,0-.24.81V6.92h3.839v3.819h-3.84V20h-3.84V10.74Z"
                        transform="translate(1.363 10)"
                        fill="#fff"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://social-plugins.line.me/lineit/share?url=https://www.businesstoday.com.tw/topic/2021/powerofwomen"
                    className="ml-4"
                  >
                    <span className="sr-only">Line icon</span>
                    <svg
                      className="fill-current text-primary-dark hover:text-green-500"
                      id="icon_line"
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                    >
                      <circle
                        id="Ellipse"
                        data-name="Ellipse"
                        cx="20"
                        cy="20"
                        r="20"
                      />
                      <path
                        id="Icon_simple-line"
                        data-name="Icon simple-line"
                        d="M16.138,8.6a.525.525,0,0,1,0,1.051H14.675v.938h1.463a.525.525,0,1,1,0,1.049H14.149a.526.526,0,0,1-.523-.524V7.138a.527.527,0,0,1,.525-.525H16.14a.525.525,0,0,1,0,1.05H14.675V8.6h1.463Zm-3.213,2.513a.524.524,0,0,1-.36.5.538.538,0,0,1-.166.026.515.515,0,0,1-.425-.208L9.938,8.664v2.45a.524.524,0,1,1-1.047,0V7.138a.522.522,0,0,1,.358-.5.485.485,0,0,1,.162-.028.539.539,0,0,1,.413.212L11.875,9.6V7.138a.525.525,0,1,1,1.05,0v3.976Zm-4.784,0a.524.524,0,1,1-1.048,0V7.138a.524.524,0,1,1,1.048,0Zm-2.055.524H4.1a.528.528,0,0,1-.525-.524V7.138a.525.525,0,0,1,1.05,0v3.451H6.086a.525.525,0,0,1,0,1.049M20,8.976C20,4.5,15.513.858,10,.858S0,4.5,0,8.976c0,4.009,3.558,7.368,8.363,8.007.326.068.769.215.882.492a2.036,2.036,0,0,1,.032.9l-.137.85c-.038.251-.2.988.874.537a32.237,32.237,0,0,0,7.863-5.812A7.186,7.186,0,0,0,20,8.976"
                        transform="translate(10 10.095)"
                        fill="#fff"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fade>
  );
};

export default Header;
