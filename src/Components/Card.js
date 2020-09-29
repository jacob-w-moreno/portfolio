import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Card = (props) => {
  const [showMore, toggleMore] = useState(false);

  const button1 = props.button1
    ? <a className='card-button' href={props.href1} target='_blank' rel="noopener noreferrer">{props.button1}</a>
    : null;
  const button2 = props.button2
    ? <a className='card-button' href={props.href1} target='_blank' rel="noopener noreferrer">{props.button2}</a>
    : null;
  const link = props.link && props.linkWords
    ? <Link to={props.link} className='card-button'>{props.linkWords}</Link>
    : null

  return (<div className='card-div' onClick={()=>toggleMore(showMore ? false:true)}>
    <div className='card-main-info'>
      <h3>{props.title}</h3>
      <span>{props.details ? props.details + ' •' : null}  {props.date}</span>
    </div>
    { props.image ? <div className='card__image'/> : null }
    <div className='card-buttons'>
      {button1}
      {button2}
      {link}
    </div>
  </div>);
}
export default Card;
