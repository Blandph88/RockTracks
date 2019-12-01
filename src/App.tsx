import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
} from 'react-router-dom'
import { Provider } from 'react-redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
import TrackList from './components/TrackList';
import TrackDetail from './components/TrackDetail';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

const middleware = [ logger, thunk ]

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
)

const App: React.FC = () => {
  return (
    <div>
      <Provider store={store}>
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
      </Provider>
      </div>
  );
}

export default App;