import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
} from 'react-router-dom'
import { TrackList } from './components/TrackList';
import { TrackDetail } from './components/TrackDetail';

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
      <Switch>
      <div>
      <Link to="/">
      <h1> Rock Tracks</h1>  
      </Link>         
          <Route exact path="/" component={TrackList} />
          <Route path="/:index" component={TrackDetail} />
      </div>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;