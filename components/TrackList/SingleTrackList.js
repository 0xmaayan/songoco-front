import PropTypes from 'prop-types';
// grid
import { Col } from '../../components/Common/Grid';

const SingleTrackList = (props) => {

  const { item, onSelectVideo } = props;
  const { album, artists, name } = item;

  const artistsArray = [];
  artists.forEach((artist) => {
    artistsArray.push(
      <div className="" key={artist.id}>
        {artist.name}
      </div>
    );
  });


  return (
    <Col lg={3} md={4} sm={6}>
      <div style={{ cursor: 'pointer' }} className='text-center' onClick={() => onSelectVideo(item)}>
        <img className="img-responsive" src={album.images[1].url} alt={name} style={{width:'200px'}} />
        <div className="" style={{ height: '100px' }}>
            {artistsArray}
          <div className="">
            {name}
          </div>
        </div>
      </div>
    </Col>
  )
}

SingleTrackList.propTypes = {
  item: PropTypes.object,
  onSelectVideo: PropTypes.func,
}

export default SingleTrackList;
