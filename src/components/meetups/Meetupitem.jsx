import React from 'react'
import Card from '../ui/Card'
import { useContext } from 'react'
import classes from './Meetupitems.module.css'
import FavoritesContext from '../../store/favorite-context'
function Meetupitem(props) {
 
  const favoriteCtx = useContext(FavoritesContext);

  const itemIisFavorite= favoriteCtx.itemIisFavorite(props.id);

  function toggleFavoriteStatusHandler(){
   if(itemIisFavorite){
    favoriteCtx.removeFavorite(props.id)
   }
   else 
   {
    favoriteCtx.addFavorite({
      id:props.id,
      title:props.title,
      description:props.description,
      image:props.image,
      address:props.address,
    });
   }
  }
  return (
    <li className={classes.item}>
        <Card>
    <div className={classes.image}>
       <img src={props.image} alt={props.title}/>
    </div>
       <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
       </div>
        <div className={classes.actions}>
            <button onClick={toggleFavoriteStatusHandler}>{itemIisFavorite? 'remove from favorites': 'Ton favorites'}</button>
        </div>
        </Card>
    </li>
  )
}

export default Meetupitem;
