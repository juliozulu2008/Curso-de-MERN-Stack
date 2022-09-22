import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {About, Description, Image} from '../styles';

// Import dos icones
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-solid-svg-icons';



const ServiceSection = () => {
    return(
        <Services>
            <Image>
                <img src="https://i.pinimg.com/564x/85/1d/5e/851d5ea6b0848560ad41e009bbf0b4ec.jpg" alt="Service" />
            </Image>
            <ServiceDescription>
                <h2>Things I do</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            Icone 
                            <h3>Portifolio</h3>
                        </div>
                    </Card>
                    <Card>
                        <div className="icon">
                            Icone 
                            <h3>Hobbies</h3>
                        </div>
                    </Card>
                    <Card>
                        <div className="icon">
                            <FontAwesomeIcon icon="fa-brands fa-square-github" />
                            
                            <h3>Github</h3>
                        </div>
                    </Card>
                </Cards>


            </ServiceDescription>

        </Services>
    )
}

const Services = styled(About)`
    h2{
        padding:5rem;
    }
    p{
        width:70%;
        padding:2rem0rem 4rem 0rem;
    }
`;

const ServiceDescription = styled(Description)`
    flex:2;
`;

const Cards = styled.div`
    display:flex;
    flex-wrap:wrap;
    padding: 1rem;

`;
const Card = styled.div`
    padding:0.5rem;
    flex-basis:20rem;
    .icon{
        display:flex;
        align-items: center;
    }
    h3{
        margin-left:1rem;
        background:white;
        color:black;
        padding:1rem;
    }
`;




export default ServiceSection;