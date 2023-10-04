import React from 'react';
import toast from 'react-hot-toast';
import { HiOutlineClipboardList } from "react-icons/hi";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaClipboardList } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAddToBooklistMutation, useGetBooklistsQuery } from '../../redux/features/readinglist/readinglist';
import { useAddToWishlistMutation, useGetWishlistsQuery, useRemoveFromWishlistsMutation } from '../../redux/features/wishlist/wishlistApi';
import { addToWishlist, removeFromWishlist } from '../../redux/features/wishlist/wishlistSlice';
import { useAppSelector } from '../../redux/hooks';
import { IBook } from '../../types/interface';



const BookCard = ({book}:{book:IBook}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useAppSelector((state) => state.user)
    const [addToWishlistAPI] = useAddToWishlistMutation();
    const [removeFromWishlistAPI] = useRemoveFromWishlistsMutation();
    const { data: readinglists } = useGetBooklistsQuery(user.email!);
    const [addToReadingList] = useAddToBooklistMutation();
    const { data: wishlists } = useGetWishlistsQuery(user.email!);

    const onAddWishlist = () => {
      const payload = { userEmail: user.email, book: book };
      dispatch(addToWishlist(book));
      addToWishlistAPI(payload);
      toast.success(`Successfully, ${book.title} added to wishlist`);
    };
    
    const onRemoveFromWishlist = () => {
      const payload = { email: user?.email, bookId: book?._id };
      dispatch(removeFromWishlist(book));
      removeFromWishlistAPI(payload);
      toast.success(`Successfully, ${book.title} removed from wishlist`);
    };

    const wishlisted = wishlists?.books?.find(
      (wishlist: IBook) => wishlist?._id === book?._id
    );
    
    const onAddReadinglist = () => {
      const payload = { userEmail: user.email, book };
      addToReadingList(payload);
      toast.success(`Successfully, ${book.title} added to booklist`);
    };
  
    const onUpdateReadinglist = () => {
      toast("Already added to wishlist!", {
        icon: "😀",
        style: { background: "#3c3c3c", color: "white" },
      });
    };
  
    const readinglisted = readinglists?.readingPlan?.find(
      (readinglist: IBook) => readinglist?._id === book?._id
    );
  
    const verifiedUser = user?.email
    const publisher = user?.email && book?.addedBy === user?.email
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
      {verifiedUser && (
            <div className=" flex justify-end">
              <button className="btn btn-circle text-info text-2xl">
                {readinglisted ? (
                  <FaClipboardList onClick={onUpdateReadinglist} />
                ) : (
                  <HiOutlineClipboardList onClick={onAddReadinglist} />
                )}
              </button>
              <button className="btn btn-circle text-error text-2xl">
                {wishlisted ? (
                  <AiFillHeart onClick={onRemoveFromWishlist} />
                ) : (
                  <AiOutlineHeart onClick={onAddWishlist} />
                )}
              </button>
            </div>
           )} 
      <span className='badge badge-secondRY'>{book.author}</span>
      <p className='font-light'>
      <span className='font-semibold'>Published:</span>
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