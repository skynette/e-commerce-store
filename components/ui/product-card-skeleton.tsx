const ProductCardSkeleton = () => {
    return (
        <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 animate-pulse">
            {/* Skeleton for image and actions */}
            <div className="aspect-square rounded-xl bg-gray-300 relative">
                <div className="aspect-square object-cover rounded-md"></div>
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                    <div className="flex gap-x-6 justify-center">
                        <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                        <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Skeleton for description */}
            <div>
                <div className="w-3/4 h-4 bg-gray-400 mb-2"></div>
                <div className="w-1/2 h-3 bg-gray-300"></div>
            </div>

            {/* Skeleton for price */}
            <div className="flex items-center justify-between">
                <div className="w-1/4 h-5 bg-gray-400"></div>
            </div>
        </div>
    );
};

export default ProductCardSkeleton;