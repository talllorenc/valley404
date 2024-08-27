"use client";

import { IMenuLinks } from "@/types/menu.types";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ThemeSwitcher from "@/components/UI/ThemeSwitcher";
import AuthButton from "@/components/Auth/AuthButton/AuthButton";

const headerLinks: IMenuLinks[] = [
  {
    id: 1,
    title: "About",
    path: "/about",
  },
  {
    id: 2,
    title: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="w-full fixed top-0 z-50 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-end gap-4">
          <Link href="/" className="">
            <Image
              src="/mainLogo.png"
              alt="logo image"
              width={40}
              height={40}
              className="rounded-md transistion duration-200 hover:shadow-buttonDark dark:hover:shadow-buttonLight hover:scale-90"
            />
          </Link>

          <nav className="font-bold uppercase">
            <ul className="flex items-end gap-4">
              {headerLinks.map((link: IMenuLinks) => {
                const isActive = pathname === link.path;
                return (
                  <li
                    key={link.id}
                    className={`hover:text-[#a94949] transition-all duration-200 ${
                      isActive ? "text-[#a94949]" : ""
                    }`}
                  >
                    <Link href={link.path}>{link.title}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <ThemeSwitcher />
          <AuthButton />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
