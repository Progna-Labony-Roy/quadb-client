import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import {  useLoaderData } from 'react-router-dom';
import './Details.css';


const Details = () => {
    const detailsData= useLoaderData();
    // const [movieName,setMovieName] =useState(null)
    const movieName=detailsData?.show?.name;
    const ratingData= detailsData?.show?.rating?.average;
    const genresData=detailsData?.show?.genres[0];
    console.log(genresData)
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const summary=detailsData?.show?.summary;
    const regex= /(<([^>]+)>)/ig;
    const newSummary=summary.replace(regex," ");

    const handleConfirmBtn =() =>{
        toast.success('Booking confirmed')
    }

    return (
        <div className='details-div flex'>
           
            <img className='h-96 mr-6' src={detailsData?.show?.image?.original} alt=""/>
            <div>
            <p className='text-lg font-semibold'>{detailsData?.show?.name}</p>
            <p className='py-3 text-sm'>{newSummary}</p>
        <div className=" mt-3">
            {/* Modal button */}
          <label htmlFor="my-modal-3" className="watch-more rounded-full text-xs text-white font-semibold px-3 py-2">
         
          Book now
      
          </label>

          {/* Modal popup */}
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label htmlFor="my-modal-3" className="absolute right-3 top-2">
                ✕
              </label>
              <div>
              <form onSubmit={handleSubmit()}>
        {/* register your input into the hook by invoking the "register" function */}
        <div className="form-control">    
        <div className='flex'>
        <label className="label">
            <span className="label-text text-sm font-semibold">Movie name : </span>
          </label>
          <input
            {...register("name", { required: "Enter user name" })}
            defaultValue={movieName}
            readOnly
            type="text"
            className="my-2 text-xs"
          />
        </div>
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
          <div className='flex'>
          <label className="label">
            <span className="label-text text-sm font-semibold">Rating : </span>
          </label>
          <input
            {...register("rating", {
              required: "Enter your rating",
            })}
            defaultValue={ratingData}
            readOnly
            type="text"
            className="my-2 text-xs"
          />
          {errors.rating && (
            <span className="text-red-500">{errors.rating.message}</span>
          )}
          </div>
          
          <div className='flex'>
          <label className="label">
            <span className="label-text text-sm font-semibold">Genres : </span>
          </label>
          <input
            {...register("genres", { required: "" })}
            defaultValue={genresData}
            readOnly
            type="text"
            className="my-2 text-xs"
          />
          </div>
          {errors.genres && (
            <span className="text-red-500">{errors.genres.message}</span>
          )}
  
          </div>
          <div className="modal-action flex">
              <label
                  htmlFor="my-modal-3"
                  className="rounded-full text-xs font-semibold px-3 py-2 ml-5"
                >
                  Cancel
                </label>
                <label onClick={() => handleConfirmBtn()}
                  htmlFor="my-modal-3"
                  className="watch-more rounded-full text-xs text-white font-semibold px-3 py-2"
                >
                  Confirm ticket
                </label>
              </div>
      </form>
              </div>
           
            </div>
          </div>
          </div>
            </div>
        </div>
    );
};

export default Details;