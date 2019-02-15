// libs
import React from "react";
import PropTypes from 'prop-types';
// grid
import { Row, Col } from '../../components/Common/Grid';
// components
import Loader from '../../components/Common/Loader';
import SingleTrackList from './SingleTrackList';

class TrackList extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      showMoreTracks: false,
      showMoreTracksClicked: false
    }
  }

  loadmore = () => {
    this.setState({
      showMoreTracks: true,
      showMoreTracksClicked: true
    })
  }

  render() {
      const { tracks } = this.props;
      const { isLoading, hasError } = tracks;

      const { showMoreTracks, showMoreTracksClicked } = this.state;

      const sameTracksNameRow = [];
      const differentTracksNameRow = [];


      tracks.data.tracks.items.forEach((item, i) => {
        const { site, onSelectVideo } = this.props;

        // check if the searched term equal to the returned name
          site.term.replace(/-/g, ' ').toLowerCase() == item.name.replace(/-/g, ' ').toLowerCase()
            ? sameTracksNameRow.push(
              <SingleTrackList
                onSelectVideo={(item) => onSelectVideo(item)}
                item={item}
                key={item.id}
              />)
            : differentTracksNameRow.push(
              <SingleTrackList
                onSelectVideo={(item) => onSelectVideo(item)}
                item={item}
                key={item.id}
              />)


      });

      if (isLoading) {
        return (
          <div className="custom-loader">
            <Loader
              type="bars"
              color="gray"
            />
            <style jsx>{`
              .custom-loader {
                display: flex;
                align-items: center;
                justify-content: center;
              }
            `}</style>
          </div>
        )
      }
      if (hasError) {
        return (<div>error...</div>)
      }else{
        return (
          <div  style={{marginTop:'50px'}}>
            <Row>
                {sameTracksNameRow}
                {showMoreTracks && differentTracksNameRow}
            </Row>
            <Row>
              <Col lg={12} md={12} sm={12} className="text-center">
                {!showMoreTracksClicked &&
                <button onClick={() => this.loadmore()} className="btn btn-primary btn-block" style={{'marginBottom':'30px'}}>
                  Load More
                </button>}
              </Col>
            </Row>
          </div>
        )
      }

    }
  }

TrackList.propTypes = {
  site: PropTypes.object,
  onSelectVideo: PropTypes.func,
  tracks: PropTypes.object
}

export default TrackList;
