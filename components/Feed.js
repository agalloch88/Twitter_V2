import { SparklesIcon } from "@heroicons/react/outline";

function Feed() {
  return (
    <div className="text-white flex-grow border-l border-r border-gray-700 max-w-2xl sm:ml-[73px] xl:ml-[370px]">
      <div className="text-[#d9d9d9] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-black border-b border-gray-700">
        <h2>Home</h2>
        <div>
          <SparklesIcon className="h-5 text-white" />
        </div>
      </div>
    </div>
  );
}

export default Feed;
