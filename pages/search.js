// libs
import React from 'react';
import withRedux from 'next-redux-wrapper';
import configureStore from '../redux/store/configure-store';
import { loadGetInitialProps } from 'next/dist/lib/utils';
import { Router } from '../universal/routes';
import slugify from 'slugify';
import isEmpty from 'lodash.isempty';
// actions
import { siteFetchTracks, fetchChosenTrack, fetchChosenTrackVideo } from '../redux/actions/site/fetch-tracks';
import { siteSetTerm } from '../redux/actions/site/set-term';
import { siteGetToken } from '../redux/actions/site/get-token';
// components
import Layout from '../components/Layout/Layout';
import SearchBar from '../components/SearchBar/SearchBar';
import TrackList from '../components/TrackList/TrackList';
import { Container } from '../components/Common/Grid';


class Search extends React.Component {

  constructor(props) {
    super(props);
  }

  onSelectVideo = async (item) => {
    const term = { song:item.name, artist:item.artists[0].name};
    await this.props.fetchChosenTrack(item.id);
    await this.props.fetchChosenTrackVideo(term);
    Router.pushRoute(
      'track',
      {track: slugify(item.name, {lower: true }),
      artist: slugify(item.artists[0].name, {lower: true }),
      id: item.id})
  }


  render() {

    const { tracks, site } = this.props;
    const { term } = site;

    return (
      <Layout>
        <Container>
          <SearchBar
            siteTerm = {term}
          />
        </Container>
        <Container>
        {
          tracks.data.tracks.items &&

            <TrackList
              tracks={tracks}
              site={site}
              onSelectVideo={(track) => this.onSelectVideo(track)}
            />

        }
        </Container>
      </Layout>
    )
  }
}


Search.getInitialProps = async (ctx) => {
  const { store, query } = ctx;
  const { data } = store.getState().tracks;
  const { token } = store.getState().site;
  const term = query.term;

  if(isEmpty(token)){
    await store.dispatch(siteGetToken());
  }

  if(isEmpty(data)){
    await store.dispatch(siteSetTerm(term));
    await store.dispatch(siteFetchTracks(term));
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
    siteSetTerm: (term) => dispatch(siteSetTerm(term)),
    siteFetchTracks: (term) => dispatch(siteFetchTracks(term)),
    fetchChosenTrack: (track) => dispatch(fetchChosenTrack(track)),
    fetchChosenTrackVideo: (term) => dispatch(fetchChosenTrackVideo(term))
  }
}

export default withRedux(configureStore, mapStateToProps, mapDispatchToProps)(Search);
