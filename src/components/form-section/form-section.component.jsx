import React, { useRef } from 'react';

const FormSection = ({ handleQuery }) => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleQuery(inputRef.current.value);
  };
  return (
    <section className='section'>
      <form
        className='search-main'
        onSubmit={handleSubmit}>
        <div className='input-wrapper'>
          <input
            type='search'
            placeholder='Search city...'
            id='search'
            ref={inputRef}
          />
        </div>
        <button>Search</button>
      </form>
    </section>
  );
};

export default FormSection;
