import React from 'react';
import MasonryGrid from './components/MasonryGrid';
import photos from './data/photos';

import './App.scss';

function App() {
  return (
    <div className="app">
      <MasonryGrid photos={photos} />
    </div>
  );
}

export default App;
