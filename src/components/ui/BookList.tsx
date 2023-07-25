import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetAllBooksQuery } from '../../redux/features/books/bookApi';
import { IBook } from '../../types/interface';
import BookCard from '../reuseable/BookCard';


const BookList = () => {
    const {data, isLoading} = useGetAllBooksQuery(undefined)
    //console.log(data.data)
    const navigation = useNavigate()
    return (
        <div className='section'>
            <h2 className='section_title'>Recent Books</h2>
            <div className="flex flex-wrap gap-5 items-center justify-center">
            {data?.data?.slice(0, 10)?.map((book: IBook) => (
            <BookCard book={book} />
            //<p>{book.author}</p>
        ))}
            </div>
            
        </div>
    );
};

export default BookList;