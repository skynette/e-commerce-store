import React from 'react'
import Container from '@/components/ui/container'
import Link from 'next/link'
import MainNav from '@/components/MainNav'
import getCategories from '@/actions/get-categories'
import NavbarActions from './navbar-actions'

const Navbar = async () => {
    const categories = await getCategories()
    return (
        <nav className='border-b'>
            <Container>
                <div className='relative px-4 sm:px-6 lg:px-8 flex h-16 items-center'>
                    <Link href="/" className="ml-4 lg:ml-0 gap-x-2">
                        <p className='font-bold text-3xl'>STORE</p>
                    </Link>
                    <NavbarActions />
                </div>
                <MainNav data={categories}/>
            </Container>
        </nav>
    )
}

export default Navbar