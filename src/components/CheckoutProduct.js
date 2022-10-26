import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React from 'react'
import Currency from 'react-currency-formatter'
import { useDispatch } from 'react-redux'
import { removeFromBasket } from '../slices/basketSlice'

function CheckoutProduct({ 
    id,
    title,
    price,
    rating,
    description,
    category,
    image,
    hasPrime,
}) {

    const dispatch = useDispatch()
    const deleteItem = () => {
        dispatch(removeFromBasket({ id }))
    }

  return (
    <div className='grid grid-cols-5'>
        <Image src={image} width={200} height={200} objectFit='contain' />

        <div className='col-span-3 mx-5'>
            <p>{title}</p>
            <div className='flex'>
                {Array(rating).fill().map((_, i) => (
                    <StarIcon key={i} className='h-5 text-yellow-500' />
                ))}
            </div>

            <p className='text-xs my-2 line-clamp-3'>{description}</p>
            <Currency quantity={price} currency='EUR' />

            {hasPrime && (
                <div className='flex items-center space-x-2'>
                    <img 
                        src='https://links.papareact.com/fdw' 
                        alt='Prime logo'
                        className='w-12'
                        loading='lazy'
                    />
                    <p className='text-xs text-gray-500'>FREE 24h Delivery</p>
                </div>
            )}
        </div>

        <div className='flex flex-col my-auto justify-self-end'>
            <button className='button' onClick={deleteItem}>Remove to Basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct