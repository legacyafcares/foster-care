import React from 'react'
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const reviews = [
        {
            imgURL: '/customer1.jpeg', 
            customerName: 'Morich Brown',
            rating: 4.5,
            feedback: "The quality of the services exceeded my expectations. Highly recommended!"
        },
        {
            imgURL: '/customer2.svg', 
            customerName: 'Lota Mongeskar',
            rating: 4.5,
            feedback: "The care my mother received was exceptional. She felt loved and supported every day."
        }
    ];
  return (
    <section className='w-full min-h-screen bg-cover flex items-center flex-col'>
        <h3 className='font-gothic text-center text-4xl font-extrabold lg:mt-32 mt-8'>
            What Our Customers Are Saying
        </h3>
        <p className='m-auto lg:mt-16 mt-8 text-center font-semibold'>
            Hear genuine stories from our satisfied customers about their exceptional experiences with us.
        </p>
        <div className='lg:mt-24 mt-12 flex max-md:flex-col flex-1 justify-evenly items-center lg:gap-14 gap-6'>
            {reviews.map(review => (
                <ReviewCard key={review.customerName} imgURL={review.imgURL} customerName={review.customerName} rating={review.rating} feedback={review.feedback}/>
            ))}
        </div>
    </section>
  )
}

export default Reviews
