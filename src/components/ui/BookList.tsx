import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetAllBooksQuery } from '../../redux/features/books/bookApi';
import { IBook } from '../../types/interface';


const BookList = () => {
    const {data, isLoading} = useGetAllBooksQuery(undefined)
    console.log(data.data)
    const navigation = useNavigate()
    return (
        <div className='_section'>
            <h2 className='section_title'>Recent Books</h2>
            <div className='felx flex-wrap items-center justify-center'>
            {/* {
                data?data?.map((book:IBook)=>{
                    <p>hello{book.genre}</p>
                })
            }  */}
            </div>
            
        </div>
    );
};

export default BookList;