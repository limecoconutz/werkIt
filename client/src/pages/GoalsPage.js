import React from 'react';
import {Image, Transformation} from 'cloudinary-react';
import '../stylesheets/pages/GoalsPage.scss';
import Footer from '../components/Footer';

const GoalsPage = ({cloudName}) => {
  const goalsDiv = (title, per) => (
    <div className="container_forms-elem">
      <h2 className="container_forms-elem-title">{title}</h2>
      <button className="container_forms-elem-btn">
        <i className="fas fa-pen"></i>
      </button>
      <div className="container_forms-elem-details">
        <p>{per}</p>
      </div>
    </div>
    )

  return (
    <main className="goals-page">
      <header className="goals_header">
        <Image 
              className="logo-large"
              cloudName={cloudName}
              secure={true} 
              upload_preset="ml_default"
              publicId={'download_yzp9ff.png'} 
        ><Transformation aspectRatio="1.0" width='100' height='100' crop="fit"/>
        </Image>
        <h1 className="goals_header-title">Your Goals</h1>
      </header>
      <div className="underline"/>
      <section className="container_forms">
        {goalsDiv('Workouts Goals', '5/week')}
        {goalsDiv('Calories Goals', '2100/day')}
        {goalsDiv('Weight Goals', '0,5kg/week')}
        {goalsDiv('Protein Goals', '110g/day')}
      </section>
    </main>
  )
}

export default GoalsPage;
