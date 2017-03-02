import React, { Component } from 'react'
import { Button, Container, Form, Input } from 'semantic-ui-react'
import {ExampleForm} from '../../collections/ExampleForm'
import { Meteor } from 'meteor/meteor'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

class CreateForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: '',
      success: false,
      visible:false,
      loading: false,
      formerror: false
    };
  }

  handleSubmit(e,{formData}){
    e.preventDefault();
    this.setState({loading: true})
    console.log(formData);
    //validate
    Meteor.call('exampleforms.save', formData, function(error){
      if(error){
        //console.log(error.reason);
        this.setState({error:error.reason, visible:true, formerror: true})
      } else {
        // reload table ....
        this.setState({
          success: true,
          error:''
        })
        //document.getElementById('role').children[0].value = "";
        document.getElementById("addForm").reset();

      }

      this.setState({loading: false})
    }.bind(this))

  }

  render() {
    const {error, formerror, loading, success} = this.state;
    return (
      <Container>
        <Form id="addForm" onSubmit={this.handleSubmit.bind(this)} loading={loading} error={formerror}>
          <Form.Group widths='equal'>
            <Form.Input id="firstName" name='firstName' label='First name' placeholder='First name' required type='text'/>
            <Form.Input id='lastName' name='lastName' label='Last name' placeholder='Last name' required type='text'/>
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Select id='gender' name='gender' label='Gender' options={options} placeholder='Gender' required/>
            <Form.Input id='homePhone' name='homePhone' label='Home Phone' placeholder='Home Phone' required type='text'/>
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input id='companyName' name='companyName' label='Company Name' placeholder='Company Name' required type='text'/>
            <Form.Input id='companyAddress' name='companyAddress' label='Comapny Address' placeholder='Comapny Address' required type='text'/>
          </Form.Group>
          <Form.Input id='workPhone' name='workPhone' label='Work Phone' placeholder='Work Phone' required type='text'/>
          <Form.TextArea id='aboutYou' name='aboutYou' label='About' placeholder='Tell us more about you...' required type='text'/>
          <Form.Group>
            <Button primary type='submit'>Submit</Button>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

export default CreateForm;
