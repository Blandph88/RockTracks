import { GET_TRACK_LIST } from './actions'
import { GET_TRACK_DETAIL } from './actions'

const initialState = {
    trackList: [],
    trackListLoaded: false,
    trackDetail: {},
    trackDetailLoaded: false
}

export default function(state = initialState, action: any) {
    const { type, data } = action;
    switch(type) {
        case GET_TRACK_LIST:
            return {
                ...state,
                trackList: data,
                trackListLoaded: true
           };
        case GET_TRACK_DETAIL:
            return {
                ...state,
                trackDetail: data,
                trackDetailLoaded: true
            };
        default:
            return state
    }
}