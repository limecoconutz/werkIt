import React from 'react';
import {Image, Transformation} from 'cloudinary-react';
import '../stylesheets/pages/GoalsPage.scss';

const GoalsPage = ({cloudName}) => {
  const goalsDiv = title => (
    <div className="container_forms-elem">
    <h2 className="container_forms-elem-title">{title}</h2>
    <button className="container_forms-elem-btn">
      <i className="fas fa-pen"></i>
    </button>
    <div className="container_forms-elem-details">5 per week</div>
    </div>
    )

  return (
    <div className="goals-page">
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
      <main className="container_forms">
        {goalsDiv('Workouts Goals')}
        {goalsDiv('Calories Goals')}
        {goalsDiv('Protein Goals')}
      </main>
    </div>
  )
}

export default GoalsPage;
