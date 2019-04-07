import React from 'react';
import {connect } from 'react-redux';
import { Card } from 'react-bootstrap';

const SelectedSong = ({selectedSong}) =>{
    if(selectedSong==null){
        return 'No Song Selected';
    }
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={selectedSong.imgUrl} />
        <Card.Body>
            <Card.Title>{selectedSong.name}</Card.Title>
            <Card.Text>
           {selectedSong.price}
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
        </Card>
    </div>
  )
}
const mapStateToProps = (state)=>{
    return {
        selectedSong: state.selectedSong
    }
}
export default connect(mapStateToProps)(SelectedSong);