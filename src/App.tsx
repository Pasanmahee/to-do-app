import React, { Component }  from 'react';
import StyledForm from './styles/StyledForm';
import './App.less';

class App extends React.Component {
  render() {
    return (
      <StyledForm>
      <form>
        <input type="text" placeholder="Full name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <button>Sign In</button>
      </form>
    </StyledForm>
    )
  }
}

export default App;
