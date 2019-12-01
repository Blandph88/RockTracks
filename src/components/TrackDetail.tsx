import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getTrackDetail, resetTrackDetail } from '../actions'


interface RCProps extends RouteComponentProps {
  trackDetail: any
  trackDetailLoaded: any,
  getTrackDetail: any,
  resetTrackDetail: any,
}

class TrackDetail extends React.PureComponent<RCProps> {

  componentDidMount() {
      let mystring = this.props.match.url;
      mystring = mystring.replace('/','');
      if(this.props.trackDetailLoaded === false) {
        this.props.getTrackDetail(mystring)
      }
  }

  componentWillUnmount() {
    this.props.resetTrackDetail()
  }

  render() {

    const millisToMinutesAndSeconds = (millis: any) => {
      var minutes = Math.floor(millis / 60000);
      var seconds = ((millis % 60000) / 1000).toFixed(0);
      return minutes + ":" + (parseFloat(seconds) < 10 ? '0' : '') + seconds;
    }

    if(!this.props.trackDetailLoaded) return <p>loading</p>;
    return (
      <div>
      <img alt={this.props.trackDetail.trackName} src={`${this.props.trackDetail.artworkUrl100}`} />
      <p>{this.props.trackDetail.trackName}</p>
      <p>{this.props.trackDetail.artistName}</p>
      <p>{millisToMinutesAndSeconds(this.props.trackDetail.trackTimeMillis)}</p>
      <p>{this.props.trackDetail.releaseDate}</p>
      <p>{`${this.props.trackDetail.currency}${this.props.trackDetail.trackPrice}`}</p>
      <a href={`${this.props.trackDetail.trackViewUrl}`}>
      <button>More details</button>
      </a>
    </div>
    );
  }
}

const mapStateToProps = (state: any) => (
  { trackDetail: state.item.trackDetail,
    trackDetailLoaded: state.item.trackDetailLoaded
  })

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
  getTrackDetail,
  resetTrackDetail
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TrackDetail)