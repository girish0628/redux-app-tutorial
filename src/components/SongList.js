import React from 'react'
import { connect } from 'react-redux';
import {Button, ListGroup, Card} from 'react-bootstrap';
import { selectedSong } from '../actions';
const SongList = ({songs, selectedSong})=> {  
  return (
    songs.map((song)=>{
          return (<Card key={song.price} style={{ width: '18rem' }}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>{song.name}
                            <Button 
                            onClick={()=>selectedSong(song)}
                            style={{float:"right"}} 
                            variant="primary">Select Song</Button>
                        </ListGroup.Item>
                                    
                    </ListGroup>
                </Card>)
    })
    
  )
}
const mapStateToProps = (state)=>{
    return {
        songs: state.songs       
    }
}
export default connect(mapStateToProps, {selectedSong})(SongList);