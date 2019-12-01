export const GET_TRACK_LIST = 'GET_TRACK_LIST'
export const GET_TRACK_DETAIL = 'GET_TRACK_DETAIL'
export const RESET_TRACK_DETAIL = 'RESET_TRACK_DETAIL'

export function getTrackList() {
    return async function(dispatch: any) {
        const res = await fetch('https://itunes.apple.com/search?term=rock&media=music');
        const trackListJson = await res.json();
        const trackListResults = await trackListJson.results 
        return dispatch({
            type: GET_TRACK_LIST,
            data: trackListResults
        })
    }
}

export function getTrackDetail(index: any) {
    return async function(dispatch: any) {
        const res = await fetch('https://itunes.apple.com/search?term=rock&media=music');
        const trackList = await res.json();
        const trackDetail = await trackList.results[index]
        return dispatch({
            type: GET_TRACK_DETAIL,
            data: trackDetail
        })
    }
}

export function resetTrackDetail() {
    return {
        type: 'RESET_TRACK_DETAIL'
    }
}