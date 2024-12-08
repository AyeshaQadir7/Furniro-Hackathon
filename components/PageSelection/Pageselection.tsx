import { ArrowRight } from "lucide-react";
import React from "react";

function PageSelection() {
  return (
    <div>
      {/* Page selections */}
      <div className="flex justify-center space-x-2 my-8">
        <button className="w-14 h-14 mx-1 rounded-lg bg-Gold text-white hover:bg-gray-300">
          1
        </button>
        <button className="w-14 h-14 mx-1 rounded-lg bg-gray-200 text-gray-600 hover:bg-gray-300">
          2
        </button>
        <button className="w-14 h-14 mx-1 rounded-lg bg-gray-200 text-gray-600 hover:bg-gray-300">
          3
        </button>
        <button className="w-14 h-14 mx-1 rounded-lg bg-gray-200 text-gray-600 hover:bg-gray-300 flex justify-center items-center">
          <ArrowRight size={24} />
        </button>
      </div>
    </div>
  );
}

export default PageSelection;
