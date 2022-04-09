import MovieCard from "../../Components/MovieCard/MovieCard";
import { useSelector, useDispatch } from 'react-redux';
import { deleteFavorite } from "../../store/acttions/favorite";
import { useHistory } from "react-router-dom";


const Favorites = () => {
    const movies = useSelector((state => state.favorites.movies));
    const dispatch = useDispatch();
    const handleFavorite = (e, movie) => {
        e.preventDefault()
        dispatch(deleteFavorite(movie))
        e.currentTarget.children[1].classList.toggle('opacity-0');
    }
    let History = useHistory();
    const home = () => {
        History.push(`/movies`)
    }
    return (
        (movies.length > 0) ?
            <div className="overflow-visible  mt-28 container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-2 pt-6 gap-8">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} handleFavorite={handleFavorite} favoritesPage={true} />
                ))}
            </div>
            :
            <div className="bg-gray-800 h-screen">
                <div className="flex h-full items-center justify-center py-12">
                    <div className="bg-white border rounded-md flex items-center justify-center mx-4 md:w-2/3 ">
                        <div className="flex flex-col items-center py-16 ">

                            <h1 className="px-4 pt-8 pb-4 text-center text-5xl font-bold leading-10 text-gray-800">OOPS! </h1>
                            <p className="px-4 pb-10  leading-none text-center text-gray-600 text-xl">No Favorites here for you! please redirect to home page and add favorites </p>
                            <button onClick={home} className="mx-4 h-10 w-44 border rounded-md text-white text-base bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-indigo-800">Go Back</button>
                        </div>
                    </div>
                </div>
            </div>

    );
}
export default Favorites;