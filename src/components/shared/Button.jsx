import React from 'react';

function Button() {
  function handleClick() {
    alert('Haz clic en el botón');
  }

  return (
    <button onClick={handleClick}>Haz clic aquí</button>
  );
}

export default Button;