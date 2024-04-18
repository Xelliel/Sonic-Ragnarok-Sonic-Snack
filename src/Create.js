import React, { useState } from 'react';

function Create() {
  // Define state variables to store input values
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Submitted:', { title, description });
    
    setTitle('');
    setDescription('');
  };

  return (
    <div>
      <h2>Create New Item</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Create;
