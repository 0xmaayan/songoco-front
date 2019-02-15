// libs
import PropTypes from 'prop-types';
// grid
import { Col } from '../../components/Common/Grid';

const ChosenTrack = (props) => {

  const { track } = props;
  const image = track.album.images[1].url;

  return (
    <div style={{'margin': '40px 0px 40px 0px','width':'100%'}}>
    <Col lg={12}>
      <img className="img-left" style={{'float': 'left','marginRight': '20px'}} src={image}/>
      <div className="content-heading"><h3>{track.name} </h3></div>
      <p>artist: {track.artists[0].name}</p>
      <p>album: {track.album.name}</p>
    </Col>
    </div>
  )
}

ChosenTrack.propTypes = {
  track: PropTypes.object
};

export default ChosenTrack;
