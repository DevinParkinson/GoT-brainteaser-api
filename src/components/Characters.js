import React from 'react';
import { Container, Header, Card, } from 'semantic-ui-react';
import {connect} from 'react-redux';
import axios from 'axios';

class Characters extends React.Component {
  state = { characters: []}

  componentDidMount() {
    axios.get('https://api.got.show/api/characters/locations')
      .then( res => {
        this.setState({ characters: res.data })
        console.log(res.data)
      }).catch(err => {
        console.log(err);
      })
  }

  displayCharacters = () => {
    const {characters} = this.state;
    return characters.map(c => {
      return (
        <Card key={c.name}>
          <Card.Content>
            <Card.Header>{c.name}</Card.Header>
          </Card.Content>
          <Card.Content>
          {c.locations}
          </Card.Content>
        </Card>
      );
    });
  }

  render() {
    return (
      <Container>
        <Header textAlign="center">List of Characters in GOT</Header>
        <Card.Group>
        {this.displayCharacters()}
        </Card.Group>
      </Container>
    )
  }

}

export default connect()(Characters);
