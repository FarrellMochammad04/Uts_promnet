import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGithub, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])
    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A','b','o','u','t',' ','m','e']}
                    idx={15} 
                    />
                </h1>
                <p>
                Hey there! I'm Farrell Mochammad, a budding frontend developer 
                with a passion for making cool things on the web. 
                Right now, I'm diving into the world of JavaScript, 
                soaking up all the knowledge I can get. 
                </p>
                <p>
                I love turning ideas into interactive websites, 
                and I'm all about creating designs that people enjoy using. 
                JavaScript is my current playground, 
                and I'm excited about the endless possibilities it offers to make websites more dynamic and fun.
                </p>
                <p>
                I'm on a mission to stay up-to-date with the latest trends in web development, 
                always looking for new ways to make user experiences better. 
                Whether it's learning popular frameworks like React or exploring the newest tech, 
                I'm eager to grow and bring fresh ideas to the table.
                </p>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#FO6529" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4fA" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGithub} color="#EC4D28" />
                    </div>
                </div>

            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
    
}

export default About