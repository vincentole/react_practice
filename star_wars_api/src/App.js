import { useEffect, useState } from 'react';

function App() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    async function fetchMovies() {
        setIsLoading(true);
        setError(false);
        setMovies([]);

        const response = await fetch('https://swapi.dev/api/films');

        try {
            if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const content = await response.json();

        content.results.forEach((movie) => {
            setMovies((prev) => {
                return [
                    ...prev,
                    { title: movie.title, episode: movie.episode_id, crawl: movie.opening_crawl },
                ];
            });
        });
        } catch(error) {
            setError(error.message)
        }
        

        setIsLoading(false);
    }

    useEffect(() => {
        fetchMovies();
    }, []);

    const moviesList = movies.map((movie, i) => {
        return (
            <li key={i}>
                <h1 className='text-xl mt-6 mb-4 first:mt-2'>
                    <span>Episode {movie.episode},</span> {movie.title}
                </h1>
                <p>{movie.crawl}</p>
            </li>
        );
    });

    return (
        <div className='bg-black p-4 text-amber-400 min-h-screen'>
            <div className='max-w-2xl mx-auto'>
                {error && <h1 className='text-xl mt-6 mb-4 first:mt-2'>{error}</h1>}
                {isLoading && <h1 className='text-xl mt-6 mb-4 first:mt-2'>Loading ...</h1>}
                {!isLoading && movies.length !== 0 && <ul className='space-y-8'>{moviesList}</ul>}
            </div>
        </div>
    );
}

export default App;
