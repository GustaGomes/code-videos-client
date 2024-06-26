import { Suspense } from 'react';
import { Banner } from './components/Banner';
import Header from './components/Header';
import { MovieRow } from './components/MovieRow';
import { getFeaturedMovie, getMoviesByGenre } from './service/MovieService';

export default async function Home() {
  const featureMovie = await getFeaturedMovie('106');
  const genres = ['Drama', 'Comedy', 'Action', 'Animation'];

  const movies = await Promise.all(
    genres.map(async (genre) => {
      const movies = await getMoviesByGenre(genre, { _limit: 10 });
      return { sectionTitle: genre, movies };
    })
  );

  return (
    <div className='relative bg-gradient-to-b pb-8'>
      <Suspense>
        <Header />
        <main className='relative overflow-y-scroll p-8 pb-20 scrollbar-hide lg:px-16'>
          <Banner movie={featureMovie} />
          {movies.map((movie) => (
            <MovieRow
              key={movie.sectionTitle}
              sectionTitle={movie.sectionTitle}
              movies={movie.movies}
            />
          ))}
        </main>
      </Suspense>
    </div>
  );
}
