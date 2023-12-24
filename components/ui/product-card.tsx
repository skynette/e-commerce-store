'use client'

import { useEffect, useState } from "react";
import { Product } from "@/types";
import Image from "next/image";
import IconButton from "@/components/ui/icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "@/components/ui/currency";

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null

    return (
        <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
            {/* images and actions */}
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image alt="image" src={product?.images[0]?.url} fill className="aspect-square object-cover rounded-md" />
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                    <div className="flex gap-x-6 justify-center">
                        <IconButton
                            onClick={() => console.log('add to cart')}
                            icon={<Expand size={20} className="text-gray-600"/>}
                        />
                        <IconButton
                            onClick={() => console.log('add to cart')}
                            icon={<ShoppingCart size={20} className="text-gray-600"/>}
                        />
                    </div>
                </div>
            </div>

            {/* description here */}
            <div>
                <p className="font-semibold text-lg">
                    {product?.name}
                </p>
                <p className="text-sm text-gray-500">
                    {product?.category?.name}
                </p>

            </div>
            
            {/* price */}
            <div className="flex items-center justify-between">
                <Currency value={product?.price} />
            </div>
        </div>
    )
}

export default ProductCard