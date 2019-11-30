import * as React from 'react'
import styled from 'styled-components';
import { TrackItem } from './TrackItem';

class TrackList extends React.PureComponent {
    state = {
      tracks: [],
    }
  
    async componentDidMount() {
      try {
        const res = await fetch('https://itunes.apple.com/search?term=rock&media=music');
        const tracks = await res.json();
        this.setState({
          tracks: tracks.results,
        });
        console.log('Object=',this.state.tracks)
        console.log(this.state.tracks.map((x: any) => (x)))
      } catch (e) {
        console.log(e);
      }
    }
 
    render() {
        
      return (

        <TrackGrid>
          {this.state.tracks.map((x: any, i: any) => <TrackItem index={i} track={x} key={i}/>)}
        </TrackGrid>
      );
    }
  }
  
  export default TrackList;
  
  const TrackGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;
