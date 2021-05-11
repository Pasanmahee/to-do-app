import React, { Component }  from 'react';
import { Form, Input, Button } from 'antd';
import StyledForm from './styles/StyledForm';
import './App.less';

class App extends React.Component {
  render() {
    return (
      <StyledForm>
      <Form>
        <Input type="text" placeholder="Full name" />
        <Input type="text" placeholder="Email" />
        <Input type="text" placeholder="Password" />
        <Button>Sign In</Button>
      </Form>
    </StyledForm>
    )
  }
}

export default App;
