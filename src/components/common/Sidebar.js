// Sidebar.js
import React from 'react';
import './Sidebar.css';
import CaretRight from '../images/CaretRight.svg'
import CaretRight1 from '../images/CaretRight1.svg'
import FolderImg from '../images/FolderSimple.svg'
import FilmReel from '../images/FilmReel.svg'
import Films from '../images/Films.png'
import MovieName from '../images/Movie Name.png'
import Vehicles from '../images/Vehicles.png'
import Species from '../images/Species.png'
import Planets from '../images/Planets.png'
import People from '../images/People.png'
import Starships from '../images/Starships.png'

const Sidebar = ({ displayImages }) => {
  return (
 <div className='side-bar'>
<div className='folder' id='folder'>
  <img src={FolderImg} alt='img' />
<img className='text-img' src={Films} alt='img'/>
<img src={CaretRight}  alt='img'/>
</div>
<div className='reel' id='reel1'>
<img src={FilmReel} alt='img' />
<img className='text-img' src={MovieName} height={20} width={40} alt='img' />
  <img src={CaretRight1} alt='img' />
</div>
<div className='reel' id='reel2'>
<img src={FilmReel} alt='img' />
<img className='text-img' src={MovieName}  height={20} width={40} alt='img' />
  <img src={CaretRight1} alt='img' />
</div>
<div className='folder' onClick={()=>displayImages()}>
<img src={FolderImg} alt='img' />
<img className='text-img' src={People} alt='img' />
  <img src={CaretRight1} alt='img' />
</div>
<div className='folder'>
<img src={FolderImg} alt='img' />
<img className='text-img' src={Planets} alt='img' />
  <img src={CaretRight1} alt='img' />
</div>
<div className='folder'>
<img src={FolderImg} alt='img' />
<img className='text-img' src={Species} alt='img' />
  <img src={CaretRight1} alt='img' />
</div>
<div className='folder'>
<img src={FolderImg} alt='img' />
<img className='text-img' src={Starships} alt='img' />
  <img src={CaretRight1} alt='img' />
</div>
<div className='folder'>
<img src={FolderImg} alt='img' />
<img className='text-img' src={Vehicles} alt='img' />
  <img src={CaretRight1} alt='img' />
</div>
 </div>
    // <div className="sidebar-container">
    //   <h2>{resource.name}</h2>
    //   <p>{resource.opening_crawl}</p>
    //   {/* Add other details based on the resource type */}
    // </div>
  );
};

export default Sidebar;
