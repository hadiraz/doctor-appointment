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
      <svg viewBox="0 -20 700 110" width="100%" height="110" preserveAspectRatio="none">
    <path transform="translate(0, -20)" d="M0,10 c80,-22 240,0 350,18 c90,17 260,7.5 350,-20 v50 h-700" fill="#CEB964" />
    <path d="M0,10 c80,-18 230,-12 350,7 c80,13 260,17 350,-5 v100 h-700z" fill="blue" />
  </svg>
    </footer>
  )
}

export default Footer