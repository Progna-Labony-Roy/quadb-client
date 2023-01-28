import React from 'react';

const Loader = () => {
    return (
        <div className='flex justify-center items-center h-full'>
        <div className='w-6 h-6 border-2 border-dashed rounded-full animate-spin border-black'></div>
      </div>
    );
};

export default Loader;