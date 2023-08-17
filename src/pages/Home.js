import React, { Component } from 'react'

import Header from  './../conponents/header/Header';
import Main from  './../conponents/main/Main';

export class Home extends Component {
  render() {
    return (
      <div>

        <Header/>

        <Main/>

      </div>
    )
  }
}

export default Home