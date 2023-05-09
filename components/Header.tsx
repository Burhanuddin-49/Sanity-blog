import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="/csi.png"
            className="rounded-full"
            width={50}
            height={50}
            alt="csi logo"
          />
        </Link>
        <h1>CSI BLOG</h1>
      </div>
      <div>
        <Link
          href="/"
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center"
        >
          Back to CSI Website
        </Link>
      </div>
    </header>
  );
}

export default Header;
