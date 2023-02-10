import React from 'react';
import CardSlider from './CardSlider';

export default function Slider({movies}) {
    const getMoviesFromRange = (from, to)=>{
        return movies.slice(from, to)
    };
  return (
    <div>
        <CardSlider title="New release movies" data={getMoviesFromRange(0,10)}/>
        <CardSlider title="Drama movies" data={getMoviesFromRange(10,20)}/>
        <CardSlider title="Crime movies" data={getMoviesFromRange(20,30)}/>
        <CardSlider title="Blockbuster movies" data={getMoviesFromRange(30,40)}/>
        <CardSlider title="Popular on netflix" data={getMoviesFromRange(40,50)}/>
        <CardSlider title="Intense dramas" data={getMoviesFromRange(50,60)}/>
    </div>
  )
}
