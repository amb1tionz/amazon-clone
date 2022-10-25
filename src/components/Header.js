import Image from 'next/image'
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
  } from "@heroicons/react/outline"
import React from 'react'

function Header() {
  return (
    <header>
      {/* Top Nav */}
      <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
        <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
          <Image 
            src='https://links.papareact.com/f90'
            width={150}
            height={40}
            objectFit="contain"
            className='cursor-pointer'
          />
        </div>

        {/* Search */}
        <div className='hidden sm:flex items-center h-10 rounded-md flex-grow bg-yellow-400 hover:bg-yellow-500 cursor-pointer'>
          <input className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4' type="text" />
          <SearchIcon className='h-12 p-4'/>
        </div>

        {/* Right */}
        <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
          <div className='link'>
            <p>Hello Vladimir</p>
            <p className='font-extrabold md:text-sm'>Account & Lists</p>
          </div>

          <div className='link'>
            <p>Returns</p>
            <p className='font-extrabold md:text-sm'>& Orders</p>
          </div>

          <div className='relative flex items-center link'>
            <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>0</span>
            <ShoppingCartIcon className='h-10' />
            <p className='hidden md:inline font-extrabold md:text-sm mt-2'> Basket</p>
          </div>
        </div>
      </div>



      {/* Bottom Nav*/}
      <div className='flex items-center bg-amazon_blue-light py-1 px-4 text-white text-sm flex-grow'>
        <div className='flex items-center gap-1 cursor-pointer px-3 py-1 border border-transparent hover:border-white'>
          <MenuIcon className='h-5' />
          <p className='hidden md:inline font-bold md:text-sm'>All</p>
        </div>
        
        <div className='px-3 border border-transparent hover:border-white cursor-pointer py-1'>
          <p className='font-semibold'>Today's Deals</p>
        </div>

        <div className='px-3 border border-transparent hover:border-white cursor-pointer py-1'>
          <p className='font-semibold'>Customer Service</p>
        </div>

        <div className='px-3 border border-transparent hover:border-white cursor-pointer py-1'>
          <p className='font-semibold'>Registry</p>
        </div>

        <div className='px-3 border border-transparent hover:border-white cursor-pointer py-1'>
          <p className='font-semibold'>Gift Cards</p>
        </div>

        <div className='px-3 border border-transparent hover:border-white cursor-pointer py-1'>
          <p className='font-semibold'>Sell</p>
        </div>
      </div>


    </header>
  )
}

export default Header