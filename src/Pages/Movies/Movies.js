
import MovieCard from './../../Components/MovieCard/MovieCard';
import { useEffect } from 'react';
import { getMoviesByPage, searchMovie } from './../../Network/moviesApi';
import { useState } from 'react';
import './Movies.css'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFavorite, setFavorite } from './../../store/acttions/favorite';
import { getMovies } from './../../store/acttions/movies';
const Movies = (props) => {
    const [movies, setMovies] = useState([]);
    let [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const moviesFavorite = useSelector((state) => state.favorites.movies)
    const moviesRedux = useSelector((state) => state.movies.list);
    let [firstMovie, setfirstMovie] = useState({});
    const fetchMoreData = async () => {

        if (props.search !== '') {
            setMovies([]);
            setMovies(await searchMovie(props.search) || movies)
        }
        else {
            let allMovies = [];
            if (movies[0]?.id === firstMovie?.id && movies[0]?.id) {
                allMovies = movies.concat(await getMoviesByPage(page))
            } else {
                allMovies = await getMoviesByPage(1);
                firstMovie = setfirstMovie(allMovies[0]);
                // dispatch(getMovies(1))
                // allMovies = moviesRedux;
            }

            setTimeout(() => {
                setPage(page + 1);
                setMovies([...allMovies])
            }, 1000);
        }
    }
    useEffect(() => {
        fetchMoreData();
    }, [])

    useEffect(() => {
        fetchMoreData();
    }, [props.search]);


    const handleFavorite = (e, movie) => {
        e.preventDefault()
        if (e.currentTarget.children[1].classList.contains('opacity-0')) {
            dispatch(setFavorite(movie))
        } else {
            dispatch(deleteFavorite(movie))
        }
        e.currentTarget.children[1].classList.toggle('opacity-0');
    }

    const moviesActive = (movie) => {
        if (moviesFavorite.find((item) => item.id === movie.id)) {
            return true;
        } else {
            return false;
        }
    }
    return (
        <div className="w-full h-screen  overflow-auto" id='scrollableDiv' >
            {props.search ?
                <div className="overflow-visible  container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-2 pt-14 gap-8">

                    {movies.map((movie, id) => (

                        movie.poster_path && <MovieCard movie={movie} key={id} handleFavorite={handleFavorite} favoritesPage={moviesActive(movie)} />
                    ))}
                </div>
                :
                <InfiniteScroll
                    id='scrollableDiv'
                    dataLength={movies.length * 2}
                    next={fetchMoreData}
                    hasMore={true}
                    scrollableTarget="scrollableDiv"
                    loader={<progress className="progress  h-4 w-1/5  my-4"></progress>}
                >
                    <div className="overflow-visible  container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-2 pt-14 gap-8">

                        {movies.map((movie, id) => (

                            movie.poster_path && <MovieCard movie={movie} key={id} handleFavorite={handleFavorite} favoritesPage={moviesActive(movie)} />
                        ))}
                    </div>
                </InfiniteScroll>
            }

        </div>






    );
}
export default Movies;