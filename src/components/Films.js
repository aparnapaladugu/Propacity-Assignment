// Films.js
import React, { useState, useEffect } from 'react';
import Sidebar from './common/Sidebar';
import { getFilms } from './services/api';
import './Films.css';

const Films = () => {
  const [films, setFilms] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState(null);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await getFilms(); 
        setFilms(response.results);
      } catch (error) {
        console.error('Error fetching films:', error);
      }
    };

    fetchFilms();
  }, []);

  const handleCardClick = async (film) => {
    try {
      const response = await fetch(film.url);
      const data = await response.json();

      film.image = `https://picsum.photos/200?random=${film.episode_id}`; 
      film.details = data;
      setSelectedFilm(film);
    } catch (error) {
      console.error('Error fetching film details:', error);
    }
  };

  return (
    <div>
      <div className='total'>
        <div className='fm'>
          <h2>Films</h2>
          <div className='path'>
            <svg className='xx' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
             
            </svg>
            <h1 className='xx'>Grid</h1>
            <div className='xy'>
              <svg className='xy' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              
              </svg>
            </div>
          </div>
        </div>
        <div></div>
      </div>

      <div className='image-view'>
      <div className='grid-view'>
      {films.map((film) => (
       <div key={film.episode_id}> 
      <img src={`https://picsum.photos/200?random=${film.episode_id}`} alt={film.title} />
      <h3>{film.title}</h3>
      {/* <p>Release Date: {film.release_date}</p>
      <p>Director: {film.director}</p>
      <p>Producer: {film.producer}</p> */}
      </div>
 ))}
     </div>
      </div>
      {selectedFilm && <Sidebar resource={selectedFilm} />}
    </div>
  );
};

export default Films;
