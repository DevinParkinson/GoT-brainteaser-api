import React from 'react';
import axios from 'axios';

class Characters extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props;
    axios.get('https://api.got.show/api/characters')
      .then( res => {
        console.log(res.data)
      })
  }.catch(err => {
    console.log(err);
  })
}
