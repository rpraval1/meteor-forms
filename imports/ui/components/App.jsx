import React,{ Component } from 'react';
import { Container } from 'semantic-ui-react'
import Header from './Header';

class App extends Component {

  render(){
    return (
      <Container fluid>
        <Header />
        {this.props.children}
      </Container>
    );
  }
}

export default App;
