import Link from 'next/link'
import React from 'react'
import SignInButton from './SignInButton'
import { getAuthSession } from '@/lib/auth'
import UserAccountNav from './UserAccountNav'
import { ThemeToggle } from './ThemeToggle'
import Image from 'next/image'

type Props = {}

const Navbar = async (props: Props) => {

  const session = await getAuthSession()
 // console.log(session)

  return (
    <nav className='fixed inset-x-0 top-0 bg-white dark:bg-gray-950 z-[10] h-fit border-b border-zinc-300 py-2'>
        <div className='flex items-center justify-center h-full gap-2 px-8 mx-auto sm:justify-between max-w-7xl'>
            <Link href='/gallery' className='items-center hidden gap-2 sm:flex'>
           
            <p className='rounded-lg border-2 border-b-2 border-r-4 border-black px-2 py-1 text-xl flex items-center dark:border-white font-bold transition-all hover:-translate-y-[2px]'>
            <Image 
              alt='logo'
              src='/AiLearn.png'
              height={40}
              width={40}
              className='mr-2'
              />
           
            AiLearn
            </p>
            </Link>
            <div className='flex items-center'>
              <Link className='mr-3' href='/gallery'>Gallery</Link>
              {session?.user && (
                <>
                  <Link className='mr-3' href='/create'>Create Course</Link>
                  <Link className='mr-3' href='/settings'>Settings</Link>
                </>
              )}
            <ThemeToggle className='mr-3' />
            <div className='flex items-center'>
                {session?.user ? (
                  <UserAccountNav  user={session.user}/>
                ):(

                  <SignInButton />
                )}

            </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar