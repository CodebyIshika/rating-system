import React, { useState } from 'react';
import StarRating from './components/StarRating';
import Dialog from './components/Dialog';

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isRatingVisible, setIsRatingVisible] = useState(true);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
    setIsRatingVisible(false);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setIsRatingVisible(true);
  };

  return (
    <div className="container app">
      {isRatingVisible && <StarRating />}
      <div className="dialog-btn">
        <button onClick={isDialogOpen ? handleCloseDialog : handleOpenDialog}>
          {isDialogOpen ? 'Close Dialog' : 'Open Dialog'}
        </button>
      </div>
      <Dialog isOpen={isDialogOpen} onClose={handleCloseDialog} />
    </div>
  );
}

export default App;