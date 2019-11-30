import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { TrackList } from './routes/TrackList';
import { TrackDetail } from './routes/TrackDetail';

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