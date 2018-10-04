import React from 'react';

const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSchcj7b7slun0027babtwZFJsd8EFcm_oi5eYNny4999Wr4jQ/viewform';

export default () => {
  return (
    <a href={FORM_URL} target="_blank" rel="noopener noreferrer">
      <strong>You can apply here</strong>
    </a>
  );
};
