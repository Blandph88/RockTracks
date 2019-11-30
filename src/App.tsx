import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom'
import TrackList from './components/TrackList';
import TrackDetail from './components/TrackDetail';

const App: React.FC = () => {
  return (
    <div>
      <Router>
      <div>
      <Link to="/">
      <h1> Rock Tracks</h1>  
      </Link>         
        <Switch>
          <Route exact path="/" component={TrackList} />
          <Route path="/:index" component={TrackDetail} />
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;