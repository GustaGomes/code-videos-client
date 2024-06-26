import Header from '@/app/components/Header';
import Player from '@/app/components/Player';
import { getMovieById } from '@/app/service/MovieService';
import React, { Suspense } from 'react';

interface IWatchProps {
  params: {
    id: string;
  };
}

export default async function Watch({ params }: IWatchProps) {
  const movie = await getMovieById(params.id);

  if (!movie) {
    return (
      <div className='flex h-screen justify-center align-middle'>
        <Suspense>
          <Header />
          <main className='flex flex-1 flex-col items-center justify-center px-20 text-center'>
            <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
              Sorry, this movie is not available.
            </h1>
          </main>
        </Suspense>
      </div>
    );
  }

  return <Player movie={movie} />;
}
