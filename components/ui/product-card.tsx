'use client'

import { MouseEventHandler, useEffect, useState } from "react";
import { Product } from "@/types";
import Image from "next/image";
import IconButton from "@/components/ui/icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "@/components/ui/currency";
import { useRouter } from "next/navigation";
import ProductCardSkeleton from "./product-card-skeleton";
import usePreviewModal from "@/hooks/use-preview-model";
import useCart from "@/hooks/use-cart";

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const [isMounted, setIsMounted] = useState(false)
    const router = useRouter();
    const previeModal = usePreviewModal();
    const cart = useCart();

    const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
        previeModal.onOpen(product);
    }
    
    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
        cart.addItem(product);
    }

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null

    const handleClick = () => {
        router.push(`/product/${product?.id}`)
    }

    if (!product) return <ProductCardSkeleton />

    return (
        <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
            {/* images and actions */}
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image alt="image" src={product?.images[0]?.url} fill className="aspect-square object-cover rounded-md" />
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                    <div className="flex gap-x-6 justify-center">
                        <IconButton
                            onClick={onPreview}
                            icon={<Expand size={20} className="text-gray-600" />}
                        />
                        <IconButton
                            onClick={onAddToCart}
                            icon={<ShoppingCart size={20} className="text-gray-600" />}
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