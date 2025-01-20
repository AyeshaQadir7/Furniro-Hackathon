import Link from "next/link";
import React from "react";

function Button1() {
  return (
    <div className="flex justify-center items-center mb-10">
      <button className="text-Gold border-2 border-Gold px-12 py-3 hover:bg-Gold hover:text-white">
        <Link href="/shop">
        Show More
        </Link>
      </button>
    </div>
  );
}

export default Button1;
