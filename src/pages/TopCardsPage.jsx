import React from 'react'
import SectionTitle from '../components/SectionTitle'
import Cards from '../components/Cards'

const TopCardsPage = (columns) => {
    return (
        <>
            <SectionTitle text="Top played cards" />
            <Cards endpoint="/api/cards" limit={54} columns={columns}/>
        </>
    )
}

export default TopCardsPage