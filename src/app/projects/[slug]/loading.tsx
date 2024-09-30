import CardSkeleton from "@/components/cardSkeleton";

const Loading = () => {
  return (
    <div className="w-full mx-auto p-6 h-full bg-white dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-900">
        <div
          className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 animate-pulse sm:space-y-0 sm:flex-row">
          <p className="w-32 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
          <p className="w-48 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
          <p className="w-64 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
        </div>
      </section>
      <div className="flex items-center justify-center space-x-4 bg-white dark:bg-gray-900">
        <CardSkeleton/>
        <div className="w-full ">
          <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>

          <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
          <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
        </div>
      </div>

      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto animate-pulse">
          <h1 className="w-40 h-2 mx-auto bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
          <p className="w-64 h-2 mx-auto mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></p>

          <div className="w-full grid sm:grid-cols-1 gap-8 mt-8 xl:mt-16 grid-cols-2">
            <CardSkeleton/>
            <CardSkeleton/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Loading;