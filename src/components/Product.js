import Image from 'next/image'
import React, { useState } from 'react'
import { StarIcon } from '@heroicons/react/solid'
import Currency from 'react-currency-formatter'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../slices/basketSlice'

const min_rating = 1
const max_rating = 5

function Product({ id, title, price, description, category, image }) {
  const dispatch = useDispatch()
  const [rating] = useState(
    Math.floor(Math.random() * (max_rating - min_rating + 1)) + min_rating
  )

  const [hasPrime] = useState(Math.random() < 0.5)
  
  const addItemToBasket = () => {
    const product = {
      id, 
      title,
      price, 
      description, 
      category, 
      image,
      hasPrime,
      rating
    }

    dispatch(addToBasket(product))
  }

  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10' key={id}>
        <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>

        <Image src={image} height={200} width={200} objectFit='contain' />

        <h4 className='my-3'>{title}</h4>

        <div className='flex'>
          {Array(rating).fill().map((_, i) => (
            <StarIcon key={i} className='h-5 text-yellow-500' />
          ))}
        </div>

        <p className='text-xs my-2 line-clamp-3'>{description}</p>

        <div className='mb-5'>
            <Currency quantity={price} currency='EUR' />
        </div>

        {hasPrime && (
          <div className='flex items-center space-x-2 -mt-5'>
            <img className='w-12' src='https://links.papareact.com/fdw' alt='Prime image' />
            <p className='text-xs text-gray-500'>FREE 24h Delivery</p>
          </div>
        )}

        <button onClick={addItemToBasket} className='mt-auto button'>Add to Basket</button>
    </div>
  )
}

export default Product