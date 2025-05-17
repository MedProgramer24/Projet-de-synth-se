import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import ProfileInfoCard from "./Cards/ProfileInfoCard";

const Header = ({ onLoginClick }) => {
  const { user } = useContext(UserContext);

  return (
    <header className="flex justify-between items-center py-6 bg-black px-6 lg:px-12">
      {/* Logo */}
      <h1 className="text-2xl font-bold tracking-tight text-white">
        <a href="/" className="no-underline">CV Maker Pro</a>
      </h1>

      {/* Navigation Links */}
      <div className="border border-white rounded-[50px] hidden lg:flex space-x-4 p-2 text-white bg-black shadow-md">
        <a
          href="#About"
          className="px-4 py-2 rounded-full hover:bg-purple-600 hover:text-white transition duration-300 font-bold"
        >
          About
        </a>
        <a
          href="/Terms"
          className="px-4 py-2 rounded-full hover:bg-purple-600 hover:text-white transition duration-300 font-bold"
        >
          Terms
        </a>
        <a
          href="/FAQ"
          className="px-4 py-2 rounded-full hover:bg-purple-600 hover:text-white transition duration-300 font-bold"
        >
          FAQ
        </a>
      </div>

      {/* Auth Button or Profile */}
      {user ? (
        <ProfileInfoCard />
      ) : (
        <button
          onClick={onLoginClick}
          className="px-6 py-2 bg-purple-600 text-white rounded-2xl hover:bg-purple-700 transition duration-300"
        >
          Login or Register
        </button>
      )}
    </header>
  );
};

export default Header;
