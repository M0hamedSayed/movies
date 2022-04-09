import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import './MovieCard.css';
const MovieCard = (props) => {
    let History = useHistory();
    const [renderHeart, setRenderHeart] = useState("");
    const movieDetails = () => {
        History.push(`/movies/${props.movie.id}`)
    }

    useEffect(() => {
        if (props.movie.poster_path) {
            setTimeout(() => {
                setRenderHeart(
                    <div onClick={(e) => props.handleFavorite(e, props.movie)} className=" absolute -top-10 heart  z-30 w-20 h-20">
                        <svg className="stroke-orange-400 stroke-2 fill-orange-900 absolute z-40 w-20  heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z" />
                        </svg>
                        <svg className={"fill-orange-700 absolute z-20 w-20 heart transition-all " + (props.favoritesPage ? "" : "opacity-0")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" /></svg>
                    </div>
                )
            }, 400);
        } else {
            setRenderHeart("")
        }
    }, [])
    return (
        <div className="rounded cursor-pointer relative mb-10" >
            {renderHeart}
            <div onClick={movieDetails} className='mask mask-squircle mask-custom overflow-hidden relative w-full h-full'>
                {props.movie?.poster_path ?
                    <img className=" hover:scale-110 hover:-rotate-3  transition-all" src={`https://image.tmdb.org/t/p/w500/${props.movie?.poster_path}`} alt='movie' width="100%" height="100%" />
                    :
                    <img className="transition-all mt-32" src={`movies/assets/images/imageNotFound.png`} alt='movie' width="100%" height="100%" />
                }
                <div className="absolute  w-full p-12 rounded-lg shadow-lg   bottom-0 left-0 bg-gradient-to-t from-slate-900 via-slate-900  to-transparent">
                    <div className=" mt-6  text-center text-white font-bold text-3xl">
                        {props.movie?.title}
                    </div>
                </div>
                <div className="mask mask-heart absolute top-6 right-32 bg-orange-400 shadow-xl shadow-slate-400 opacity-40 scale-125">
                </div>


                <div className="bg-gray-500 shadow-md shadow-slate-800 dark:bg-gray-800 p-1  rounded-full rounded-r-none  absolute top-12 right-0 transition-all opacity-80 hover:opacity-100 ">
                    <span className=" text-white font-bold text-xl p-8">{props.movie?.release_date?.split('-')[0]}</span>
                </div>
                <div className="sh-drop absolute top-0">
                    <div className="mask mask-star-2 w-16 absolute top-6 left-6 bg-orange-400 opacity-40 scale-125">
                        <p className="p-4 text-white font-bold text-xl">{props.movie?.vote_average}</p>
                    </div>
                    <div className="mask mask-star-2 w-16 absolute top-6 left-6 bg-orange-400 shadow-xl  ">
                        <p className="p-4 text-white font-bold text-xl text-center">{props.movie?.vote_average}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MovieCard;