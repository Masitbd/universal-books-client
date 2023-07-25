import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IBook } from '../../types/interface';


const BookCard = ({book}:{book:IBook}) => {
    const navigate = useNavigate()
    console.log('hi',book)
    return (
    <div className="card w-80 bg-base-200 shadow-xl hover:-translate-y-2 transition-transform">
   <figure>
        <img
          src="https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1198&q=80"
          alt="Shoes"
        />
     </figure>
     <div className='card-body'>
      <h2 className='card-title'>{book.title.slice(0,23)}</h2>
      <span className='badge badge-secondRY'>{book.author}</span>
      <p className='font-light'>
      <span className='font-semibold'>Published</span>
      {book.publicationDate}  
      </p>
      <button
          onClick={() => navigate(`/book-details/${book._id}`)}
          className="btn btn-outline btn-primary"
        >
          See Details
        </button>      
     </div>
    </div>
    );
};

export default BookCard;