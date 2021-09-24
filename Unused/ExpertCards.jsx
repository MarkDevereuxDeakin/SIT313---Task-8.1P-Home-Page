import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Rating } from 'semantic-ui-react'
import './ExpertCard.css';
const faker = require('faker');

const experts = [];
var randomCard;

function Experts ()
{
    
    for(var i = 0; i < 10; i++)
    {
        randomCard = faker.helpers.contextualCard();
        experts.push(randomCard);        

    }

}

Experts();    

function ExpertCards(){
    return(
        <div>
            <Card.Group itemsPerRow={3}>
            <Card className='expert-card-container'>
            <Image src= {experts[0].avatar} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{experts[0].name}</Card.Header>
                <Card.Meta>
                    <span>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                {experts[0].name} is a Senior {experts[0].company.bs} expert with 10 years experience.
                </Card.Description>
                <Rating icon='star' defaultRating={3} maxRating={5} />
            </Card.Content>            
        </Card>
        <Card className='expert-card-container'>
            <Image src={experts[1].avatar} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{experts[1].name}</Card.Header>
                <Card.Meta>
                    <span>Joined in 2018</span>
                </Card.Meta>
                <Card.Description>
                {experts[1].name} is a Senior {experts[1].company.bs} expert with 7 years experience.
                </Card.Description>
                <Rating icon='star' defaultRating={3} maxRating={5} />
            </Card.Content>            
        </Card>
        <Card className='expert-card-container'>
            <Image src={experts[2].avatar} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{experts[2].name}</Card.Header>
                <Card.Meta>
                    <span >Joined in 2010</span>
                </Card.Meta>
                <Card.Description>
                {experts[2].name} is a Senior {experts[2].company.bs} expert with 20 years experience.
                </Card.Description>
                <Rating icon='star' defaultRating={3} maxRating={5} />
            </Card.Content>            
        </Card>
        </Card.Group>
        <Card.Group itemsPerRow={3}>
            <Card className='expert-card-container'>
            <Image src= {experts[3].avatar} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{experts[3].name}</Card.Header>
                <Card.Meta>
                    <span>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                {experts[3].name} is a Senior {experts[3].company.bs} expert with 10 years experience.
                </Card.Description>
                <Rating icon='star' defaultRating={3} maxRating={5} />
            </Card.Content>            
        </Card>
        <Card className='expert-card-container'>
            <Image src={experts[4].avatar} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{experts[4].name}</Card.Header>
                <Card.Meta>
                    <span>Joined in 2018</span>
                </Card.Meta>
                <Card.Description>
                {experts[4].name} is a Senior {experts[4].company.bs} expert with 7 years experience.
                </Card.Description>
                <Rating icon='star' defaultRating={3} maxRating={5} />
            </Card.Content>            
        </Card>
        <Card className='expert-card-container'>
            <Image src={experts[5].avatar} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{experts[5].name}</Card.Header>
                <Card.Meta>
                    <span>Joined in 2010</span>
                </Card.Meta>
                <Card.Description>
                {experts[5].name} is a Senior {experts[5].company.bs} expert with 20 years experience.
                </Card.Description>
                <Rating icon='star' defaultRating={3} maxRating={5} />
            </Card.Content>            
        </Card>
        </Card.Group>
        </div>
        
    )
}

export default ExpertCards;