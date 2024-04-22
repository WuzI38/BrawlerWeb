import React from 'react'
import { useParams } from 'react-router-dom';
import CardsByType from '../components/CardsByType';

const SingleCommanderPage = (columns) => {
    const { id } = useParams();

    return (
        <div>
           <CardsByType id={id} columns={columns}/>
        </div>
    )
}

export default SingleCommanderPage

// 