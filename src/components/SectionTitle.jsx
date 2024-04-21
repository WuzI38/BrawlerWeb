import React from 'react';

const SectionTitle = ({ text }) => {
  return (
    <div className="w-full bg-background_dark flex justify-center items-center py-6">
      <h1 className="text-3xl text-detail">{text}</h1>
    </div>
  );
};

export default SectionTitle;