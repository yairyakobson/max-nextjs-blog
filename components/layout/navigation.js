import Link from "next/link";
import Logo from "./logo";

export default function Navigation(){
  return(
    <>
      <header className="w-full h-24 bg-[#1f2223] flex
      justify-between items-center px-10 py-4">
        <Link href="/">
          <Logo/>
        </Link>
        <nav className="my-auto">
          <ul className="list-none flex items-baseline p-0
          md:gap-2">
            <li>
              <Link href="/posts"
              className="text-gray-100 m-12 text-[1.1rem]
              hover:text-gray-200 active:text-gray-500
              lg:text-[1.2rem]
              xl:text-[1.2rem]
              2xl:text-[1.2rem]">Posts</Link>
              <Link href="/contact"
              className="text-gray-100 text-[1.1rem]
              hover:text-gray-200 active:text-gray-500
              lg:text-[1.2rem]
              xl:text-[1.2rem]
              2xl:text-[1.2rem]">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}