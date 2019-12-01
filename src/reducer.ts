import { GET_TRACK_LIST, GET_TRACK_DETAIL, RESET_TRACK_DETAIL } from './actions'

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
        case RESET_TRACK_DETAIL:
            return {
                ...state,
                trackDetail: {},
                trackDetailLoaded: false
        };
        default:
            return state
    }
}