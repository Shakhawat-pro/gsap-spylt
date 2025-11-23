import React from 'react';
import HeroSection from './HeroSection';
import MessageSection from './MessageSection';
import FlavorSection from './FlavorSection';
import NutritionSection from './NutritionSection';

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <MessageSection />
            <FlavorSection />
            <NutritionSection />
        </div>
    );
};

export default HomePage;