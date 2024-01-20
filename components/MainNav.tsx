'use client'

import { cn } from '@/lib/utils';
import { Category } from '@/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'


interface MainNavProps {
    data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
    const pathName = usePathname();
    const routes = data.map((route) => ({
        href: `category/${route.id}`,
        label: route.name,
        active: pathName === `category/${route.id}`
    }))
    return (
        <nav
            className='px-4 sm:px-6 lg:px-8 flex items-center space-x-4 lg:space-x-6 mb-2'
        >
            <div>Categories</div>
            <div className='flex items-center space-x-4 lg:space-x-6 overflow-x-scroll'>
                {
                    routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn(
                                "text font-medium transition-colors hover:text-black",
                                route.active ? "text-black" : "text-neutral-500"
                            )}
                        >
                            {route.label}
                        </Link>
                    ))
                }
            </div>
        </nav>
    )
}

export default MainNav