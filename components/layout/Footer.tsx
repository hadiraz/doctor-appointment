import React from 'react'

const Footer = () => {
  return (
    <footer className='flex items-center justify-center w-full bg-[#d6d6d6] '>
      <div className='flex flex-col md:flex-row justify-between items-center w-full max-w-7xl p-2'>
      <section className='flex justify-center items-center flex-col w-full md:w-1/2'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, consequatur. Ea amet a consequatur soluta reiciendis voluptates, assumenda iste sed hic voluptatem explicabo repellendus, dicta quaerat. Inventore quibusdam repellendus dolore!.</p>
        <div className='flex mt-10'>
          <span className='flex items-center justify-center'>icon</span>
        </div>
      </section>
      <section className='flex justify-center items-center w-full md:w-1/2'>
        <ul className='flex'>
          <li>2</li>
          <li>3</li>
          <li>5</li>
        </ul>
      </section>
      </div>
    </footer>
  )
}

export default Footer