"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const getTitleFromPath = (path: string) => {
  const map: Record<string, string> = {
    "/dashboard": "Dashboard Overview",
    "/products": "Products Management",
    "/customers": "Customers",
  };
  return map[path] || "Dashboard";
};

const Header = ({ session }: any) => {
  const imageUrl = session?.user?.image?.split("=")[0] || "/new_icon.png";
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="flex justify-between items-center px-4 py-3 bg-white shadow-sm w-full">
      <div>
        <h2 className="text-lg md:text-xl font-semibold">
          {getTitleFromPath(pathname)}
        </h2>
        {pathname === "/products" ? null : (
          <p className="text-sm text-gray-500">Welcome back, Admin</p>
        )}
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden sm:block">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="relative" ref={dropdownRef}>
          <img
            src={imageUrl}
            alt="profile"
            className="w-10 h-10 rounded-full cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-36 bg-white border rounded shadow-lg z-10">
              <button
                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                onClick={() => {
                  setDropdownOpen(false);
                  signOut({ callbackUrl: "/login" });
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
