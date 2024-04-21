import React from 'react'
import { useParams } from 'react-router-dom';

const CommandersPage = () => {
    const { colors } = useParams();

    return (
        <>
            { colors }
        </>
    )
}

export default CommandersPage