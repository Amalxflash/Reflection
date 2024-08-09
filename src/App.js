// src/App.js
import React from 'react';
import Gallery from './component/Gallery';
import Gallery2 from './component/Gallery2';


const App = () => {
  return (
    <div className="App" >
      <>
      <Gallery />
      <div className='absolute bottom-0 left-[59px] bottom-[148px]'>
        <img  src='https://picsum.photos/id/101/300/300' width={80} />

      </div>
      <Gallery2/>
      </>
    </div>
  );
};

export default App;
