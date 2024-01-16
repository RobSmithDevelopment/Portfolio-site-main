import React from "react";
import PortfolioCard from './PortfolioCard';
import HangmanImage from '../images/Hangman.png';
import WeatherImage from '../images/Weather.png';
import NetflixImage from '../images/netflix-clone.png';

const projects = [
  {
    id: 1,
    title: 'Hangman',
    imageUrl: HangmanImage,
    description: 'Hangman game created in React.',
    linkUrl: 'http://hangman.robertsmithdevelopment.co.uk/',
    linkText: 'View Project',
  },
  {
    id: 2,
    title: 'Weather App',
    imageUrl: WeatherImage,
    description: 'Weather app created using HTML, CSS and Javascript and utilising api calls. This application will take a valid place name and return the temperature, the current weather state with an icon, will tell you the wind speed and the humidity, as well as changing the background of the page to a relevant picture to the location.',
    linkUrl: 'http://weather.robertsmithdevelopment.co.uk/',
    linkText: 'View Project',
  },
  {
    id: 3,
    title: 'Netflix Clone site',
    imageUrl: NetflixImage,
    description: ' A Netflix clone site made as a bootcamp project created with React. This site is a clone of the main signup page of netflix. It is fully responsive and utilising react components.',
    linkUrl: 'http://netflixclone.robertsmithdevelopment.co.uk/',
    linkText: 'View Project',
  },
];


const Work = () => {
    return (
        <>
            <h1 className="work-title">My Projects</h1>
            <div className="work-container">
                {projects.map((project) => (
                <PortfolioCard
                    key={project.id}
                    title={project.title}
                    imageUrl={project.imageUrl}
                    description={project.description}
                    linkUrl={project.linkUrl}
                    linkText={project.linkText}
                />
                ))}
            </div>
      </>
    )
}

export default Work;