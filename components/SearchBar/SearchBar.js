import PropTypes from 'prop-types';
import React from "react";
import { connect } from 'react-redux';
import { Router } from '../../universal/routes';
import slugify from 'slugify';
// actions
import { siteFetchTracks} from '../../redux/actions/site/fetch-tracks';
import { siteSetTerm } from '../../redux/actions/site/set-term';
import ChosenTrack from "../ChosenTrack";

class SearchBar extends React.Component {

  constructor(props){
    super(props);

    this.state = { term: '' };
  }

  onInputChange(e) {
    this.setState({
      term: e.target.value
    })
  }

  onFormSubmit =  async (e) => {
    e.preventDefault();
    await this.props.siteSetTerm(this.state.term);
    await this.props.siteFetchTracks(this.state.term);
    Router.pushRoute('search', {term: slugify(this.state.term, {lower: true })})
  }

  render(){

    const {siteTerm} = this.props;

    return (
      <form action="" className="input-group" onSubmit={(e) => this.onFormSubmit(e)}>
        <input
          placeholder= {siteTerm ? siteTerm :  "Search for a song" }
          className="form-control"
          value={this.state.term}
          onChange={(e) => this.onInputChange(e)}
          type="text" />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Search
          </button>
        </span>
      </form>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    siteSetTerm: (term) => dispatch(siteSetTerm(term)),
    siteFetchTracks: (term) => dispatch(siteFetchTracks(term)),
  }
}

SearchBar.propTypes = {
  siteTerm: PropTypes.string
};

export default connect(null, mapDispatchToProps)(SearchBar);
