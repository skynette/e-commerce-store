
const Loading = () => {
    return (
        <div className='mx-auto max-w-7xl'>
                <div className='space-y-10 pb-10'>
                    {/* Loading Billboard Skeleton */}
                    <div className="p-4 sm:p-6 rounded-xl overflow-hidden">
                        <div className="rounded-xl bg-gray-300 aspect-square md:aspect-[2.4/1] overflow-hidden animate-pulse"></div>
                    </div>

                    {/* Loading Featured Products Skeleton */}
                    <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
                        <div className="space-y-4">
                            <h3 className="font-bold text-3xl animate-pulse bg-gray-300 h-8 w-1/2"></h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {[1, 2, 3, 4].map((item) => (
                                    <div key={item} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 animate-pulse">
                                        {/* Loading Product Image Skeleton */}
                                        <div className="aspect-square rounded-xl bg-gray-300"></div>

                                        {/* Loading Product Description Skeleton */}
                                        <div>
                                            <p className="font-semibold text-lg animate-pulse bg-gray-300 h-5 w-3/4"></p>
                                            <p className="text-sm text-gray-500 animate-pulse bg-gray-300 h-4 w-1/2"></p>
                                        </div>

                                        {/* Loading Product Price Skeleton */}
                                        <div className="flex items-center justify-between">
                                            <div className="bg-gray-300 h-4 w-1/4 animate-pulse"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Loading