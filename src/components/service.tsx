import { ServiceProps } from "@/lib/types";
import Link from "next/link";

const Service = ({ data: service }: { data: ServiceProps }) => {
  return (
    <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 hover:bg-blue-100 dark:hover:bg-gray-700 rounded-xl flex flex-col flex-1">
      <span className="text-blue-500 dark:text-blue-400">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"/>
        </svg>
      </span>
      <Link href={`/services/${service.slug}`}>
        <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
          {service.name}
        </h1>
      </Link>
      <p className="text-gray-500 dark:text-gray-300">
        {service.excerpt}
      </p>
      <div className="mt-auto flex flex-col flex-1 gap-1 items-end justify-end">
        <Link href={`/services/${service.slug}`}
           className="p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-gray-700 hover:bg-blue-200 dark:hover:bg-gray-800 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
               stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default Service;