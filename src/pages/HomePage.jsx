import React, { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import Cards from '../components/Cards';

const HomePage = (columns) => {
  return (
    <div>
      <SectionTitle text="Top commanders by popularity" />
      <Cards endpoint="/api/commanders/popularity" limit={6} columns={columns}/>
      <SectionTitle text="Top commanders by winrate" />
      <Cards endpoint="/api/commanders/winrate" limit={6} columns={columns}/>
    </div>
  )
};

export default HomePage;
