import React from 'react'
import {useContext} from 'react'
import FavoritesContext from '../store/favorite-context';
import MeetupList from '../components/meetups/MeetupList';
function FavoritesPages() {
  const favoriteCtx = useContext(FavoritesContext)
  return  <section>
    <h1>My Favorites</h1>
    <MeetupList meetups={favoriteCtx.favorites} />
  </section>
}

export default FavoritesPages;