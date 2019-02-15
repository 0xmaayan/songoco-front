// libs
import React from 'react';
import withRedux from 'next-redux-wrapper';
import configureStore from '../redux/store/configure-store';
import { loadGetInitialProps } from 'next/dist/lib/utils';
import { siteGetToken } from '../redux/actions/site/get-token';
import isEmpty from 'lodash.isempty';
// components
import Layout from '../components/Layout/Layout';
import SearchBar from '../components/SearchBar/SearchBar';
import { Container } from '../components/Common/Grid';
// style
import "./css/style.scss"

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Layout>
        <Container>
          <SearchBar
            siteTerm = {this.props.site.term}
          />
        </Container>
      </Layout>
    )
  }


}

App.getInitialProps = async (ctx) => {

  const { store, query } = ctx;
  const { data } = store.getState().site;
  const token = data;

  if(isEmpty(token)){
    await store.dispatch(siteGetToken());
  }

  return {
    ...await loadGetInitialProps(ctx),
  };

}

const mapStateToProps = (state) => {
  return {
    site: state.site
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    siteGetToken: () => dispatch(siteGetToken()),
  }
}

export default withRedux(configureStore, mapStateToProps, mapDispatchToProps)(App);
