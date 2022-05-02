
import { Route, Switch } from 'react-router-dom';
import AllMeetUp from './pages/AllmeetUps';
import NewMeetUp from './pages/NewMeetsUps';
import Favorites from './pages/Favorite';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path='/' exact>
          <AllMeetUp />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetUp />
        </Route>
        <Route path='/favorites'>
          <Favorites />
        </Route>
      </Switch>
    </div>
  );
}

export default App;