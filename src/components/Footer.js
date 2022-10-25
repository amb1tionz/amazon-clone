import React from 'react'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div>
            <button className='flex w-full bg-gray-600 h-12 text-xs items-center justify-center text-white font-semibold hover:cursor-pointer hover:bg-gray-600/90'
              onClick={scrollToTop}
            >
                Back to top
            </button>
    </div>
  )
}

export default Footer