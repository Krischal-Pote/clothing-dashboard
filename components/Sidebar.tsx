"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import {
  CloseIcon,
  CustomerIcon,
  HamBurgerIcon,
  HomeIcon,
  TIcon,
} from "@/icons/SvgCollection";
import Image from "next/image";

const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: <HomeIcon color="currentColor" />,
    },
    {
      href: "/products",
      label: "Products",
      icon: <TIcon color="currentColor" />,
    },
    {
      href: "/customers",
      label: "Customers",
      icon: <CustomerIcon color="currentColor" />,
    },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div>
      <div className="md:hidden p-4">
        <button onClick={toggleSidebar} aria-label="Open Menu">
          <HamBurgerIcon />
        </button>
      </div>

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white p-4 shadow-md transform transition-transform z-50
        ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:block`}
      >
        <div className="md:hidden flex justify-end mb-4">
          <button onClick={toggleSidebar} aria-label="Close Menu">
            <CloseIcon />
          </button>
        </div>

        <div className="flex justify-center mb-6">
          <Image
            src="/logo.jfif"
            alt="logo"
            width={80}
            height={80}
            className="object-contain rounded-full"
          />
        </div>

        <nav className="space-y-2">
          {navItems.map(({ href, label, icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center p-2 rounded transition-colors ${
                  isActive
                    ? "bg-[#993333] text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span
                  className={`text-lg ${
                    isActive ? "text-white" : "text-gray-600"
                  }`}
                >
                  {icon &&
                    React.cloneElement(icon as React.ReactElement, {
                      color: isActive ? "#ffffff" : "#4B5563",
                    })}
                </span>
                <span className="ml-2">{label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default Sidebar;
