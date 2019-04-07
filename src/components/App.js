import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import SongList from './SongList';
import SelectedSong from './SelectedSong';

const App = ()=> {
  return (
    <div style={{margin: 10}}>
        {/* <ButtonToolbar>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="success">Success</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="info">Info</Button>
            <Button variant="light">Light</Button>
            <Button variant="dark">Dark</Button>
            <Button variant="link">Link</Button>
        </ButtonToolbar> */}

        <Container>
            <Row>
                <Col>
                <SongList/>
                </Col>
                <Col>
                    <SelectedSong/>
                </Col>
            </Row>
           
        </Container>

        
    </div>
  )
}
export default App;
