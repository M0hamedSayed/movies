import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getMovieDetail } from "../../Network/moviesApi";
const MovieItem = () => {
    let id = useParams().id;
    let history = useHistory()
    const [movieDetail, setMovieDetail] = useState({})
    const getMovieDetails = async () => {
        const response = await getMovieDetail(id);
        if (response?.data)
            setMovieDetail(await response?.data)
        else history.push('../notFound')
    }
    useEffect(() => {
        getMovieDetails();

    }, []);
    useEffect(() => {
        console.log(movieDetail);
    }, [movieDetail]);
    return (
        <div className="container px-2 mx-auto  my-32 xl:mt-16">
            <div className="card card-side w-full  bg-base-100  shadow-xl mt-10 flex-col lg:flex-row">
                <figure className="lg:w-1/3">
                    {movieDetail?.poster_path ?
                        <img src={`https://image.tmdb.org/t/p/w500${movieDetail?.poster_path}`} alt="Movie" /> :
                        <img src={`../assets/images/imageNotFound.png`} alt="Movie" />}
                </figure>
                <div className="card-body bg-white text-slate-700 lg:w-2/3">
                    <h2 className="card-title pb-2 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-900">{movieDetail?.title}</h2>
                    {movieDetail.tagline && <span className="text-xl font-bold text-gray-600">{movieDetail?.tagline}</span>}
                    <div className="bg-gray-500 shadow-md shadow-slate-800 bg-gradient-to-r from-blue-400 to-cyan-900 p-1  rounded-full rounded-r-none  absolute top-12 right-0 transition-all opacity-80 hover:opacity-100 ">
                        <span className=" text-white font-bold text-xl p-8">{movieDetail?.release_date?.split('-')[0]}</span>
                    </div>
                    <div className="mask mask-star-2 absolute top-6 left-6 bg-orange-400 shadow-xl shadow-slate-400 opacity-40 scale-125">
                        <p className="p-4 text-white font-bold text-xl">{movieDetail?.vote_average}</p>
                    </div>
                    <div className="mask mask-star-2 absolute top-6 left-6 bg-orange-400 shadow-xl shadow-slate-400 ">
                        <p className="p-4 text-white font-bold text-xl">{movieDetail?.vote_average}</p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-300 to-blue-500 w-max mt-4 py-1 px-3 mb-4 md:mb-0 rounded-md flex items-center justify-center">
                        <div className="flex items-center">
                            <div className="h-1 w-1 rounded-full bg-white  mr-1" />
                            <h3 className="text-xl font-semibold text-white ">Overview</h3>
                        </div>
                    </div>
                    <p className="text-lg">{movieDetail?.overview}</p>
                    <div className="flex flex-wrap">
                        {movieDetail.genres && movieDetail.genres.map((genre) => (
                            <div className="bg-blue-500 py-1  m-2 w-max  px-3 mb-4 shadow-lg  rounded-full flex items-center justify-center">
                                <span className="text-md  text-white font-normal">{genre.name}</span>
                            </div>
                        ))}
                    </div>

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary bg-gradient-to-r from-blue-300 to-blue-500 border-0">Watch</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default MovieItem;