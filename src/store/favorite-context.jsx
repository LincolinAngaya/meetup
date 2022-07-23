import { createContext,useState } from "react";
 const FavoritesContext = createContext({
    favorites:[],
    totalFavorites:0,
    addFavorite:(favoriteMeetup) =>{},
    removeFavorite:(MeetupId) => {},
    itemIisFavorite:(meetupId) => {}
 });
 export function FavoritesContextProvider(props){
    const [userFavorites, setUserFavorites]=useState([]);

    function addFavoriteHandler(favoriteMeetup){
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup)
        });
    }
    function removeFavoriteHandler(meetupId){
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter(Meetup => meetupId !==meetupId)
    })};
    function itemIisFavoriteHandler(meetupId){
        
            return userFavorites.some(Meetup => meetupId === meetupId)
        
    }
    const context ={
        favorites:userFavorites,
        totalFavorites:userFavorites.length,
        addFavorite:addFavoriteHandler,
        removeFavorite:removeFavoriteHandler,
        itemIisFavorite:itemIisFavoriteHandler
    };
    return <FavoritesContext.Provider value={context}>
       {props.children}
    </FavoritesContext.Provider>
 }
 export default FavoritesContext;