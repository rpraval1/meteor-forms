import { Meteor } from 'meteor/meteor';
import {ExampleForm} from '../../imports/collections/ExampleForm';

if (Meteor.isServer) {

  Meteor.publish('exampleforms', function() {
    return ExampleForm.find({});
  });
}
