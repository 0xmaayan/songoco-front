// libs
import React from 'react';
import withRedux from 'next-redux-wrapper';
import configureStore from '../redux/store/configure-store';
import isEmpty from 'lodash.isempty';
import { loadGetInitialProps } from 'next/dist/lib/utils';
// actions
import { fetchChosenTrack, fetchChosenTrackVideo } from '../redux/actions/site/fetch-tracks';
import { siteGetToken } from '../redux/actions/site/get-token';
// components
import Layout from '../components/Layout/Layout';
import SearchBar from '../components/SearchBar/SearchBar';
import { Container, Row } from '../components/Common/Grid';
import ChosenTrack from '../components/ChosenTrack/index';
import Player from '../components/ChosenTrack/player/player';
// style
import "./css/player/inputRangeBar.scss"

class Track extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    const { tracks, site } = this.props;
    const { term } = site;
    const { chosenTrack } = tracks;
    const { info, video } = chosenTrack;

    return (
      <Layout>
        <Container>
          <SearchBar
            siteTerm = {term}
          />
        </Container>
        { <Container>
          <Row>
          {info && <ChosenTrack track={info}/>}
          </Row>
          <Row>
           {video && <Player video={video}/>}
          </Row>
        </Container> }
      </Layout>
    )
  }
}


Track.getInitialProps = async (ctx) => {
  const { store, query } = ctx;
  const { id, track, artist } = query;

  const { token } = store.getState().site;

  const { chosenTrack } = store.getState().tracks;
  const { info, video } = chosenTrack;

  if(isEmpty(token)){
    await store.dispatch(siteGetToken());
  }


  if(isEmpty(info)){
    await store.dispatch(fetchChosenTrack(id));
    const searchVideoTerm = {song: track.replace(/-/g, ' '), artist: artist.replace(/-/g, ' ')};
    await store.dispatch(fetchChosenTrackVideo(searchVideoTerm));
  }

  return {
    ...await loadGetInitialProps(ctx),
  };

}

const mapStateToProps = state => ({
  tracks: state.tracks,
  site: state.site
});

const mapDispatchToProps = (dispatch) => {
  return {
    siteGetToken: () => dispatch(siteGetToken()),
    fetchChosenTrack: (fullTerm) => dispatch(fetchChosenTrack(fullTerm)),
    fetchChosenTrackVideo: (fullTerm) => dispatch(fetchChosenTrackVideo(fullTerm))
  }
}

export default withRedux(configureStore, mapStateToProps, mapDispatchToProps)(Track);
