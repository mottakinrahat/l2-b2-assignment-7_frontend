import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import "../../style/text.css";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Button } from "../ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { logout, useCurrentUser } from "@/redux/features/auth/authSlice";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { motion } from "framer-motion";
import { toogleTheme, toogleThemes } from "@/redux/features/auth/themeSlice";
const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, delay: 2 },
  },
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const user = useAppSelector(useCurrentUser);
  const darkMode = useAppSelector(toogleThemes);

  const handleToggleThemes = () => {
    dispatch(toogleTheme());
  };
  const pathsToDisplayNavbar = [
    "winter-clothes",
    "community",
    "leaderboard",
    "volunteer",
    "about-us",
    "login",
    "register",
  ];
  const shouldDisplayNavbar = pathsToDisplayNavbar.some((path) =>
    location.pathname.startsWith("/" + path)
  );

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <motion.div
        variants={intro}
        initial="hidden"
        animate="visible"
        className={`${
          !shouldDisplayNavbar
            ? "text-white absolute"
            : `${darkMode ? "text-white" : "text-black"}`
        } w-full flex justify-center gap-6 items-center mx-auto  z-[999] sm:max-w-xl px-10 md:max-w-full `}
      >
        <div className=" flex  justify-center  items-center gap-14 lg:gap-40 p-4 ">
          <div className="md:text-2xl font-bold">
            {" "}
            <h2>
              WINTER<span className="text-[#D7E826]">WARDROBE</span>
            </h2>
          </div>
          <ul className="lg:flex justify-center items-center ubuntu-regular hidden space-x-8  font-bold ">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "default"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="winter-clothes"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "default"
                }
              >
                All Winter Clothes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/community"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "default"
                }
              >
                Community
              </NavLink>
            </li>
            <li>
              <NavLink
                to="volunteer"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "default"
                }
              >
                volunteer
              </NavLink>
            </li>
            <li>
              <NavLink
                to="leaderboard"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "default"
                }
              >
                Leader-board
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about-us"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "default"
                }
              >
                About Us
              </NavLink>
            </li>

            {user && (
              <li>
                <NavLink
                  to="dashboard"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500" : "default"
                  }
                >
                  Dashboard
                </NavLink>
              </li>
            )}
          </ul>
          <div className="flex gap-2 justify-center items-center">
            <div>
              <button
                onClick={handleToggleThemes}
                className="rounded-lg backdrop-blur-[2px] p-1 inline-block mr-2"
              >
                {darkMode ? (
                  <HiOutlineMoon size={30} />
                ) : (
                  <HiOutlineSun size={30} />
                )}
              </button>
            </div>
            {user ? (
              <Button
                onClick={handleLogout}
                className="bg-[#D7E826] text-black hidden lg:block"
              >
                Logout
              </Button>
            ) : (
              <Link to="/login">
                <Button className="bg-[#D7E826] text-black">Login</Button>
              </Link>
            )}
          </div>
          {/* Mobile Navbar Section */}
          <div className="lg:hidden">
            {/* Dropdown Open Button */}
            <button
              aria-label="Open Menu"
              title="Open Menu"
              onClick={() => setIsMenuOpen(true)}
            >
              <Bars3BottomRightIcon className="w-5 text-yellow-500" />
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-10">
                <div className="p-5 bg-white border rounded shadow-sm">
                  {/* Logo & Button section */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="md:text-2xl font-bold">
                      {" "}
                      <h2 className="text-gray-600">
                        WINTER<span className="text-[#D7E826]">WARDROBE</span>
                      </h2>
                    </div>
                    {/* Dropdown menu close button */}
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <XMarkIcon className="w-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                  {/* Mobile Nav Items Section */}
                  <nav>
                    <ul className="space-y-4 rubik-text text-black">
                      <li>
                        <NavLink
                          to="/"
                          className={({ isActive }) =>
                            isActive ? "text-blue-500" : "default"
                          }
                        >
                          Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="winter-clothes"
                          className={({ isActive }) =>
                            isActive ? "text-blue-500" : "default"
                          }
                        >
                          All Winter Clothes
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/community"
                          className={({ isActive }) =>
                            isActive ? "text-blue-500" : "default"
                          }
                        >
                          Community
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="volunteer"
                          className={({ isActive }) =>
                            isActive ? "text-blue-500" : "default"
                          }
                        >
                          volunteer
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="leaderboard"
                          className={({ isActive }) =>
                            isActive ? "text-blue-500" : "default"
                          }
                        >
                          Leader-board
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="about-us"
                          className={({ isActive }) =>
                            isActive ? "text-blue-500" : "default"
                          }
                        >
                          About Us
                        </NavLink>
                      </li>

                      {user && (
                        <li>
                          <NavLink
                            to="dashboard"
                            className={({ isActive }) =>
                              isActive ? "text-blue-500" : "default"
                            }
                          >
                            Dashboard
                          </NavLink>
                        </li>
                      )}
                      <div></div>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
