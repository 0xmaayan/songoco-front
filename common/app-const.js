export const INITIAL_STATE = {
  tracks: {
    data: [],
    chosenTrack: {
      info:[],
      video:[]
    },
    info: {
      artist: [],
      song: []
    },
    isLoading: false,
    hasError: false
  },
  site: {
    term: "",
    token: ""
  }
};
