import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
    index: any
    track: any
}

export class TrackItem extends React.PureComponent<Props> {

    render() {
    
        // if(!track.id) return null;
        return (
            <div>
                <Link to={`/${this.props.index}`}>
                    <img src={`${this.props.track.artworkUrl100}`} />
                    <p>{this.props.track.trackName}</p>
                    <p>{this.props.track.artistName}</p>
                    <p>{`${this.props.track.currency}${this.props.track.trackPrice}`}</p>
                </Link>
            </div>
        );
      }
    }
