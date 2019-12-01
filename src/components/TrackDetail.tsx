import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getTrackDetail } from '../actions'


interface RCProps extends RouteComponentProps {
  trackDetail: any
  trackDetailLoaded: any,
  getTrackDetail: any,
}

class TrackDetail extends React.PureComponent<RCProps> {

  async componentDidMount() {
      let mystring = this.props.match.url;
      mystring = mystring.replace('/','');
      if(this.props.trackDetailLoaded === false) {
        this.props.getTrackDetail(mystring)
      }
  }

  render() {

    if(!this.props.trackDetailLoaded) return <p>loading</p>;
    return (
      <div>
      <img alt={this.props.trackDetail.trackName} src={`${this.props.trackDetail.artworkUrl100}`} />
      <p>{this.props.trackDetail.trackName}</p>
      <p>{this.props.trackDetail.artistName}</p>
      <p>{this.props.trackDetail.trackTimeMillis}</p>
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
  getTrackDetail
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TrackDetail)