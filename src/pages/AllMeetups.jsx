import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';
 
function AllMeetupsPages() {
  const[isLoading, setIsLoading] = useState(true);

  const[loadedMeetups, setLoadedMeetups] = useState([]);

useEffect(() => {
  setIsLoading(true)

  fetch('https://react-getting-started-ea3e0-default-rtdb.firebaseio.com/meetups.json')

  .then(response =>{
      return response.json();
  }).then(data => {
    const meetups=[];

    for(const key in data){
      const meetup={
        id:key,
        ...data[key]
      };
      meetups.push(meetup);
    }
     setIsLoading(false)
     setLoadedMeetups(meetups)
  });

},[])

  if (isLoading){
    return (
      <section>
        <p>Loading........</p>
      </section>
    )
  }

  return (
    <section>
        <h1>All Meetups</h1>
        <ul>
       
         <MeetupList meetups={loadedMeetups}/>
       
        </ul>
    </section>
  )
}

export default AllMeetupsPages;