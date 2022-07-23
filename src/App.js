import {Route, Routes, Switch } from 'react-router-dom'
import AllMeetupsPages from './pages/AllMeetups';
import FavoritesPages from './pages/Favorites';
import NewMeetupPages from './pages/NewMeetup';
import Layout from './components/MAIN/Layout';

function App() {
  return (
  <Layout>
   
    <Switch>
  <Route exact path='/'>
  <AllMeetupsPages />
  </Route>

  <Route exact path='/favorites'>
  <FavoritesPages />
  </Route>

  <Route exact path='/NewMeetup'>
  <NewMeetupPages />
  </Route>
  </Switch>
  </Layout>
  );
}

export default App;
