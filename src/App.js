import React, { useState } from 'react';
import MasonryGrid from './components/MasonryGrid';
import GalleryModal from './components/GalleryModal';
import initialPhotos from './data/photos';

import './App.scss';

function App() {
  const [photos, setPhotos] = useState(initialPhotos);
  const [isModelOpen, setIsModelOpen] = useState(false);

  const openModal = () => setIsModelOpen(true);
  const closeModal = () => setIsModelOpen(false);

  return (
    <div className="app">
      <GalleryModal
        isOpen={isModelOpen}
        onRequestClose={closeModal}
      >
        {'Hello'}
      </GalleryModal>
      <MasonryGrid
        photos={photos}
        onDoubleClick={openModal}
      />
    </div>
  );
}

export default App;
