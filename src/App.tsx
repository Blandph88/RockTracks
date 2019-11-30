import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { TrackDetail } from './components/TrackDetail';
import TrackList from './components/TrackList';

const App: React.FC = () => {
  return (
    <div>
      <Router>
      <div>
      <h1> Rock Tracks</h1>           
        <Switch>
          <Route exact path="/" component={TrackList} />
          <Route path="/:id" component={TrackDetail} />
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;