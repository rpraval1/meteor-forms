import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from '../imports/ui/components/App'
import CreateForm from '../imports/ui/components/CreateForm'
import ManageData from '../imports/ui/components/ManageData'

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={CreateForm} />
      <Route path="managedata" component={ManageData} />
    </Route>
  </Router>
);

Meteor.startup(() => {
  render(routes, document.querySelector('.render-target'));
});
