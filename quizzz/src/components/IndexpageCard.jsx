import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./IndexPageCard.css"
export default function IndexpageCard({image,alt,content}) {
  return (
  <div className='card-container'>
      <img className="card-img" src={image} alt={alt} />
      <p className="content">{content}</p>
      <p className='attempt-now'>Atempt Quiz</p>

  </div>
  );
}