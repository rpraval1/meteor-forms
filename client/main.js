import React from 'react';
import {render} from 'react-dom';

import App from '../imports/components/App'

Meteor.startup(() => {
  render(<App />, document.querySelector('.render-target'))
});
