import React from 'react';
import {Switch,Route, Redirect} from 'react-router-dom';

import Orders from './containers/Orders';
import OrderProcess from './containers/OrderProcess';
import Shop from './containers/Shop';

import * as ROUTES from './constants/Routes';

export const AppContext = React.createContext(null);
class App extends React.Component{
  
  render(){
    return (
      <div className="App">
        <Switch>
          <Route exact path={ROUTES.SHOP}
                  render={(props) => <Shop{...props}/>}  />
          <Route path={ROUTES.ORDERS}
                  render={(props) => <Orders{...props}/>}  />
          <Route exact path={ROUTES.ORDERPROCESS}
                  render={(props) => <OrderProcess{...props}/>} />
          <Redirect from="/" to={ROUTES.SHOP} />
        </Switch>
      </div>

    );
  }
}

export default App;
