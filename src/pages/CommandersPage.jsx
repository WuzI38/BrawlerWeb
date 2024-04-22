import React from 'react'
import { useParams } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import Cards from '../components/Cards';
import colors from '../assets/json/colors.json';

const getColorName = (colorCombination) => {
    for (const colorCategory in colors) {
        if (colors[colorCategory][colorCombination]) {
            return colors[colorCategory][colorCombination].toLowerCase();
        }
    }
    return 'Unknown color combination';
};

const CommandersPage = (columns) => {
    const { colors } = useParams();
    const title = `Top ${ getColorName(colors) } commanders`;

    return (
        <div>
            <SectionTitle text={title} />
            <Cards endpoint={`/api/commanders/${colors}`} link={ colors } columns={columns}/>
        </div>
    )
}

export default CommandersPage
