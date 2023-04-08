import React from 'react';
import useReviews from '../../Hooks/useReviews';
import CustomerReview from '../CustomerReview/CustomerReview';
import './CustomerReviews.css';

const CustomerReviews = () => {

    const [reviews, setReviews] = useReviews();
    const sliceReviews = reviews?.slice(0, 3);
    console.log(sliceReviews);

    return (
        <div className='customer-reviews1'>
            <div className='customer-reviews'>
            <h1>Customer Reviews ({sliceReviews?.length})</h1>
           <div className='customer-review'>
           {
                sliceReviews?.map( review => <CustomerReview
                key={review.id}
                review={review}
                ></CustomerReview>)
            }
           </div>
        </div>
        </div>
    );
};

export default CustomerReviews;