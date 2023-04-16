import React from 'react'
import MedicalBanner from "@/public/assets/images/medical.png"
import Image from 'next/image'
const MainPageBanner = () => {
  return (
    <section className='flex w-full max-w-7xl h-screen'>
        <div className='flex justify-center items-center'>
            <Image src={MedicalBanner} width={70} height={70} alt='banner' />
        </div>
    </section>
  )
}

export default MainPageBanner