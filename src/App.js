import { Route, Switch } from "react-router-dom";
import AllMeetUp from "./pages/AllmeetUps";
import NewMeetUp from "./pages/NewMeetsUps";
import Favorites from "./pages/Favorite";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <AllMeetUp />
          </Route>
          <Route path="/new-meetup">
            <NewMeetUp />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
        </Switch>
      </Layout> 
    </div>
  );
}

export default App;
