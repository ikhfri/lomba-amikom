import navbarData from "@/app/data/ListNavbar/DataListNavbar.json";
import Link from "next/link";

export default function Navbar() {
  const navbarItems = navbarData.navbar;

  return (
    <main className="flex justify-center">
      <nav className="w-full h-20 bg-white text-[#969696dd] font-semibold">
        <ul className="flex justify-end mt-7 mr-7 text-center">
            {navbarItems.map((item, index) => (
                <Link key={index} href={item.link}>
                    <li className="px-2">{item.label}</li>
                </Link>
            ))}
        </ul>
      </nav>
    </main>
  );
}
