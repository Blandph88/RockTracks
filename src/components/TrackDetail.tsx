import React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';

interface State {
    artworkUrl100: string
    trackName: string
    trackPrice: string
    currency: string
    artistName: string
    trackTimeMillis: string
    releaseDate: string
    trackViewUrl: string
}

export class TrackDetail extends React.PureComponent<
    RouteComponentProps<{
        index: string
    }>,
    State
> {
  
    state = {
        artworkUrl100: "",
        trackName: "",
        trackPrice: "",
        currency: "",
        artistName: "",
        trackTimeMillis: "",
        releaseDate: "",
        trackViewUrl: ""
    }

    async componentDidMount() {
        try {
          const res = await fetch('https://itunes.apple.com/search?term=rock&media=music');
          const tracks = await res.json();
          const track = await tracks.results[this.props.match.params.index]
          this.setState({
            artworkUrl100: track.artworkUrl100,
            trackName: track.trackName,
            trackPrice: track.trackPrice,
            currency: track.currency,
            artistName: track.artistName,
            trackTimeMillis: track.trackTimeMillis,
            releaseDate: track.releaseDate,
            trackViewUrl: track.trackViewUrl
          });
          console.log("track: ", track)
          console.log("tracks.results: ", tracks.results) 
          console.log("params.index: ", this.props.match.params.index)
        } catch (e) {
          console.log(e);
          console.log('error')
        }
      }
   

  render() {

    console.log("render track: ", this.state)

    if(!this.state) return <p>loading</p>;
    return (
        <div>
            <img src={`${this.state.artworkUrl100}`} />
            <p>{this.state.trackName}</p>
            <p>{this.state.artistName}</p>
            <p>{this.state.trackTimeMillis}</p>
            <p>{this.state.releaseDate}</p>
            <p>{`${this.state.currency}${this.state.trackPrice}`}</p>
            <a href={`${this.state.trackViewUrl}`}>
            <button>More details</button>
            </a>
        </div>
    );
  }
}
