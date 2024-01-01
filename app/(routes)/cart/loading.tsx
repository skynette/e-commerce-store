// loading.js

const Loading = () => {
    // Customize this skeleton UI according to your design or use a library like `react-loading-skeleton`
    return (
        <li className="flex py-6 border-b animate-pulse">
            <div className="relative h-24 w-24 rounded-md bg-gray-300 animate-pulse sm:h-48 sm:w-48" />
            <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                <div className="absolute z-10 right-0 top-0">
                    {/* Placeholder for the remove button */}
                    <button className="bg-gray-300 w-8 h-8 rounded-md animate-pulse" />
                </div>
                <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div className="flex justify-between">
                        {/* Placeholder for the item name */}
                        <p className="text-lg font-semibold text-gray-700 bg-gray-300 w-3/4 h-6 rounded-md animate-pulse" />
                    </div>
                    <div className="mt-1 flex text-sm">
                        {/* Placeholder for the item color */}
                        <p className="text-gray-500 bg-gray-300 w-1/4 h-4 rounded-md animate-pulse" />
                        {/* Placeholder for the item size */}
                        <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4 bg-gray-300 w-1/4 h-4 rounded-md animate-pulse" />
                    </div>
                    {/* Placeholder for the item price */}
                    <p className="text-gray-500 bg-gray-300 w-1/4 h-4 rounded-md animate-pulse" />
                </div>
            </div>
        </li>
    );
};

export default Loading;
