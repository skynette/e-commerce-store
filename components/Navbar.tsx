import React from 'react'
import Container from '@/components/ui/container'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='border-b'>
        <Container>
            <Link href="/" className="ml-4 lg:ml-0 gap-x-2">
                <p className='font-bold text-xl'>STORE</p>
            </Link>
        </Container>
    </nav>
  )
}

export default Navbar