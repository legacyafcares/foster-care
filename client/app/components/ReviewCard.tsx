import Image from 'next/image'
import React from 'react'

type ReviewProps = {
    customerName: string,
    rating: number,
    feedback: string,
    imgURL: string
}
const ReviewCard = ({customerName, rating, feedback, imgURL} : ReviewProps) => {

  return (
    <div className='flex justify-center items-center flex-col'>
      <Image src={imgURL} alt="customer" width={120} height={120} className='rounded-full object-cover' />
      <p className='mt-6 max-w-sm text-center'>{feedback}</p>
      <div className='mt-3 flex items-center justify-center gap-2.5'>
        <p className='text-xl font-gothic text-slate-gray'>({rating})</p>
      </div>
      <h3 className='mt-1 mb-10 font-quicksand text-3xl text-center font-bold'>{customerName}</h3>
    </div>
  )
}

export default ReviewCard