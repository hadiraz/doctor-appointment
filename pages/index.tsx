import MainPageBanner from '@/components/MainPageBanner'
import Image from 'next/image'


export default function Home() {
  return (
    <section className='flex w-full flex-col items-center min-h-screen'>
      <MainPageBanner/>
    </section>
  )
}
