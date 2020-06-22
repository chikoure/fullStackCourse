import React from 'react';
import CardInfo from './CardInfo/CardInfo';

 const Card = (props) => {
  return (
    <div
      className='d-inline-block g-card'
      onClick={(e) => props.click(props.item)}>
      <img className='g-card-image' src={props.imgSrc} />
      
        <CardInfo
          title={props.title}
          price={props.price}
          link={props.link}
        />
      
    </div>
  );
};

export default Card