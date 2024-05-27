"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XCircleIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { title: "Home", path: "/" },
    { title: "Question", path: "/question" },
    { title: "State", path: "/state" },
    { title: "Quiz", path: "/quiz" },
  ];

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <header className="shadow-lg">
      <div
        className={`fixed lg:hidden transition-all z-20 duration-300 ${
          open ? "right-0" : "-right-64"
        } p-4 h-screen w-64 bg-border-sub`}
      >
        <XCircleIcon
          className={"w-8 h-8 stroke-white mb-4"}
          stroke="2"
          onClick={handleOpen}
        />
        
        <div className="flex flex-col space-y-4" onClick={handleOpen}>
          {routes.map((route) => (
            <Link
              href={route.path}
              key={route.title}
              className={"px-6 py-2 text-white rounded bg-main font-bold"}
            >
              {route.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center px-6 py-4 bg-main">
        <div className="text-white text-xl sm:text-4xl lg:text-2xl xl:text-4xl font-bold">
          QUIZ
        </div>
        <nav className="space-x-8 hidden lg:flex">
          {routes.map((route) => (
            <Link
              className="px-6 py-2 text-white rounded bg-border-sub font-bold"
              href={route.path}
              key={route.title}
            >
              {route.title}
            </Link>
          ))}
        </nav>
        <Bars3Icon className={"lg:hidden stroke-white w-6 h-6"} onClick={handleOpen}/>
      </div>
    </header>
  );
};

export default Header;
