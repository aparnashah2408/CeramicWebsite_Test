import React from 'react'
import Title from '../components/Title/Title';
import RecommendationSection from './RecommendationSection';
import SkillsSection from './SkillSection';
import ProjectSection from './ProjectSection';
import About from './About';
import BlogSection from './BlogSection';

function HomePage() {
    return (
        <div>
            <Title />
            <RecommendationSection />
            <SkillsSection />
            <ProjectSection />
            <About />
            <BlogSection />
        </div>
    )
}

export default HomePage;