"use client";
import { menuItems } from "@/data/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <>
      {menuItems.map((elm, i) => (
        <li
          key={i}
          className={`menu-item ${elm.subMenu ? "has-submenu" : ""}`}
        >
          <Link
            href={elm.link}
            className={`menu-link ${
              pathname.split("/")[1] === elm.link.split("/")[1]
                ? "active-link"
                : ""
            }`}
          >
            {elm.title}
          </Link>

          {/* Render sub-menu if it exists */}
          {elm.subMenu && (
            <ul className="sub-menu">
              {elm.subMenu.map((elm2, i2) => (
                <li key={i2} className="submenu-item">
                  <Link
                    href={elm2.link}
                    className={
                      pathname.split("/")[1] === elm2.link.split("/")[1]
                        ? "active-link"
                        : ""
                    }
                  >
                    {elm2.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
      {/* Static Contact link */}
      <li>
        <Link href="/contact" className="menu-link">
          Contact
        </Link>
      </li>
    </>
  );
}