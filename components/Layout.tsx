import Image from 'next/image'
import React, { ReactElement } from 'react'
import logo from "@/public/assets/logo_med.png"
const Layout = ({children} : {children : ReactElement}) => {
  return (
    <div className='flex w-full flex-col items-center'>
    <header className='w-full flex justify-between items-center p-2 h-70 sticky bg-slate-500 z-10'>
        {/* <div className='flex absolute w-full h-full blur-md top-0 left-0'></div> */}
        <div className='flex items-center justify-center'>
            <Image src={logo} width={50} height={50} alt="logo" />
        </div>
        <nav className='flex justify-between items-center'>
            nav
        </nav>
        <div>
            profile
        </div>
    </header>
    <main>
        {children}
    </main>
    </div>
  )
}

export default Layout