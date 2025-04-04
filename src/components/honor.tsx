import { HonorProps } from "@/lib/types";
import React, { useState } from "react";

const Honor = ({ data: honor }: { data: HonorProps }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription((prev) => !prev);
  };

  return (
    <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-900">
      <div className="flex items-center justify-between">
        <span className="text-sm font-light text-gray-600 dark:text-gray-400">{honor.issuedAt}</span>
        {honor.is_award && (
          <img
            className="h-10 duration-300 transform rounded cursor-pointer"
            src="/icons/award.webp"
            loading="lazy"
            alt=""
          />
        )}
      </div>
      <div className="mt-2">
        <span
          className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
          role="link"
        >
          {honor.title}
        </span>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          {showFullDescription
            ? honor.description
            : `${honor.description.slice(0, 225)}...`}
          <span
            className="text-blue-500 cursor-pointer ml-1"
            onClick={toggleDescription}
          >
            {showFullDescription ? "Show less" : "Read more"}
          </span>
        </p>
      </div>
      <div className="flex items-center justify-end mt-4">
        <div className="flex items-center">
          <span className="text-sm font-light text-gray-700 dark:text-gray-300">
            Issued by: {honor.issuedBy}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Honor;
