'use client'
import Image from "next/image";
import { Tab } from "@headlessui/react";
import { Image as ImageType } from "@/types";
import GalleryTab from "./gallery-tab";

interface GalleryProps {
    images: ImageType[]
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
    return (
        <Tab.Group as="div" className="flex flex-col-reverse">
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                <Tab.List className="grid grid-cols-4 gap-6">
                    {
                        images.map((image, index) => (
                            <GalleryTab key={index} image={image} />
                        ))
                    }

                </Tab.List>
            </div>
            <Tab.Panels className="w-full aspect-square">
                {images.map((image, index) => (
                    <Tab.Panel key={index}>
                        <div className="relative h-full w-full aspect-square sm:rounded lg:overflow-hidden">
                            <Image
                                fill
                                src={image.url}
                                alt="Product Image"
                                className="object-cover object-center"
                            />
                        </div>
                    </Tab.Panel>
                ))}
            </Tab.Panels>
        </Tab.Group>
    )
}

export default Gallery