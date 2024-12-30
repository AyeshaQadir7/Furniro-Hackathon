import Link from "next/link";
import React from "react";

function PageSelection() {
  return (
    <div>
      {/* Page selections */}
      <div className="flex justify-center space-x-2 my-8 gap-4">
        <Link href={"#"}>
          <button className="w-14 h-14 mx-1 rounded-lg bg-Gold text-white hover:bg-bg-gray-100">
            1
          </button>
        </Link>

        <Link href={"#"}>
          <button className="w-14 h-14 mx-1 rounded-lg bg-gray-200 text-gray-600 hover:bg-gray-300">
            2
          </button>
        </Link>

        <Link href={"#"}>
          <button className="w-14 h-14 mx-1 rounded-lg bg-gray-200 text-gray-600 hover:bg-gray-300">
            3
          </button>
        </Link>

        <Link href={"#"}>
          <button className="w-14 h-14 mx-1 rounded-lg bg-gray-200 text-gray-600 hover:bg-gray-300 flex justify-center items-center px-8">
            <p>Next</p>
          </button>
        </Link>
        
      </div>
    </div>
  );
}

export default PageSelection;
