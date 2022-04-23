import React from 'react'
import '../App.css'

export const About = () => {
  return (
    <div className='App'>
        <h1>About PetHouse Services Summary</h1>
        <p>Boarding facilities you leave em we love them</p>
        <p>Number of pets that will be watched at one time: 8</p>
        <ul style={{listStyle: "none"}}>
        Accepted Pet Types Dog Cats Rabbits Accepted Pet size:
        <li>1-5kg</li>
        <li>5-10kg</li>
        <li>10-20kg</li>
        <li>20-40kg</li>
        <li>40+kg</li>
        </ul>

        <p>
        Level of adult supervision.
        <br />
        Pets will never be left unattended
        <br />

        The place your pet will be if they are left unsupervised at home.
        <br />
        Free roam of the house

        <br />
        The place your pet will sleep at night.
        <br />
        Wherever they want

        <br />
        The number of potty breaks provided per day.
        <br />
        Full access outside
        </p>

        <h4>The number of walks provided per day: 22</h4>

        <h4>The type of home I stay in: House</h4>

        <h4>My outdoor area size: Large</h4>

        <h4>Emergency transport: Yes</h4>
    </div>
  )
}
