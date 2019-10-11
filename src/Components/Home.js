import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css';
import HomeBackground from '../DesignElements/Great_Hall.png';


function Home () {
    return (
      <div className="Main-container">
        <div className="Home" style={{backgroundImage: `url(${HomeBackground})`}}>
          <div className="Home-content">
            <h1 className="Text1">WELCOME TO</h1>
            <h2 className="Text2">Hogwarts 
              <br/>
              <br/>
              <br/>
              <br/> 
              School
              </h2>
               <Link to="/quiz">
                 <button class="button">
                 FIND YOUR HOUSE
               </button>
               </Link>
          </div>
        </div>   
    </div>
    );
  };

export default Home