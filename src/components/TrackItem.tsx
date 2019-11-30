import React from 'react';
import { Link } from 'react-router-dom';

export const TrackItem = ({ track }: any) => (
    <>
        <Link to={`/${track.trackName}`}>
            <img src={`${track.artistViewUrl}`} />
            <p>{track.trackName}</p>
        </Link>
    </>
);


