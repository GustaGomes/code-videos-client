import { Banner } from './components/Banner';
import Header from './components/Header';
import { MovieRow } from './components/MovieRow';
import { getFeaturedMovie } from './service/MovieService';

export default async function Home() {
  const featureMovie = await getFeaturedMovie('106');
  return (
    <div className='relative bg-gradient-to-b pb-8'>
      <Header />
      <main className='relative mb-48 h-screen pl-4 lg:pl-16 '>
        <Banner movie={featureMovie} />
        <MovieRow sectionTitle='Popular' />
        <MovieRow sectionTitle='Trending' />
        <MovieRow sectionTitle='Top Rated' />
      </main>
    </div>
  );
}
