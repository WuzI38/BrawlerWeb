import React from 'react'
import SectionTitle from '../components/SectionTitle'
import Cards from '../components/Cards'

const TopCardsPage = () => {
    return (
        <>
            <SectionTitle text="Top played cards" />
            <Cards endpoint="/api/cards" limit={30} />
        </>
    )
}

export default TopCardsPage