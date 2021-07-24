import React from 'react';
import { HomePageFooter } from '../Footer/HomePageFooter';
import { AboveFooterSection } from "./AboveFooterSection";
import { BelowTravelBlogSection } from './BelowTravelBlogSection';
import { BusesFromSection } from './BusesFromSection';
import { SuperOffer } from './SuperOffer';
import { TravelVlogSection } from './TravelVlogSection';
import { TripMoneySection } from './TripMoneySection';


const Content = () => {
    return (
        <div>
            <SuperOffer/>
            <TripMoneySection/>
            <BusesFromSection/>
            <TravelVlogSection/>
            <BelowTravelBlogSection/>
            <AboveFooterSection/>
            <HomePageFooter/>
        </div>
    )
}

export {Content}
