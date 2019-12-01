import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components';
import { TrackItem } from './TrackItem';
import { getTrackList } from '../actions'

interface Props {
  getTrackList: any
  trackList: any
  trackListLoaded: any
}

class TrackList extends React.PureComponent<Props> {
    
    componentDidMount() {
      if(this.props.trackListLoaded === false) {
        this.props.getTrackList();
      }
    }

    render() {

      if(!this.props.trackListLoaded) return <h1>...Loading</h1>
      return (
        
        <TrackGrid>
          {this.props.trackList.map((x: any, i: any) => <TrackItem index={i} track={x} key={i}/>)}
        </TrackGrid>
      );
    }
  }
 
  const mapStateToProps = (state: any) => (
    {
    
      trackList: state.item.trackList,
      trackListLoaded: state.item.trackListLoaded
  })

  const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    getTrackList,
  }, dispatch)

  export default connect(mapStateToProps, mapDispatchToProps)(TrackList)
  
  const TrackGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;
