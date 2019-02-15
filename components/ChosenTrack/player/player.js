// libs
import { connect } from 'react-redux';
import ReactPlayer from 'react-player';
import Duration from '../../../libs/helpers/Duration';
import format from '../../../libs/helpers/format';
// grid
import { Row, Col } from '../../../components/Common/Grid';
// buttons
import { ChosenTimePart, Clear, Listen } from './buttons';
import PropTypes from "prop-types";

class Player extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      played: 0,
      seeking: false,
      duration: 0,
      controls: false,
      chosenStart: '',
      chosenEnd: '',
      chosenPartText: 'Start',
      chosenStartNotFormated: 0,
      chosenEndNotFormated: null
    }
  }

  onProgress = state => {
    //console.log('onProgress', state)
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state)
    }
  }

  onDuration = (duration) => {
    this.setState({ duration })
  }

  onSeekMouseDown = e => {
    this.setState({ seeking: true })
  }

  onSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) })
  }

  onSeekMouseUp = e => {
    this.setState({ seeking: false })
    this.player.seekTo(parseFloat(e.target.value))
  }

  handleChosenTimePartClicked = () => {

    const { duration, played, chosenStart } = this.state;

    chosenStart === '' ?
    this.setState({
      chosenStart: format(duration * played),
      chosenStartNotFormated: Math.floor(duration * played),
      chosenPartText: 'End'
    }) :
    this.setState({
      chosenEnd: format(duration * played),
      chosenEndNotFormated: Math.floor(duration * played),
    })

  }

  handleChosenTimeClearClicked = () => {
    this.setState({
      chosenStart: '',
      chosenEnd: '',
      chosenPartText: 'Start'
    })
  }

  handleChosenTimeListen = () => {
    const { chosenStartNotFormated } = this.state;
    this.player.seekTo(chosenStartNotFormated);
  }

  ref = player => {
    this.player = player
  }

  render(){

    const { video } = this.props;
    const { played, chosenStart, chosenEnd, chosenPartText, duration, chosenStartNotFormated, chosenEndNotFormated } = this.state;

    let videoUrl = 'https://www.youtube.com/watch?v=';
    videoUrl += video.items[0].id.videoId;

    return (
      <Col lg={7}>
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            ref={this.ref}
            url={videoUrl}
            config={{
              youtube: {
                playerVars: {
                  start: chosenStartNotFormated,
                  end: chosenEndNotFormated
                }
              }
            }}
            onDuration={this.onDuration}
            onProgress={this.onProgress}
            width='100%'
            height='100%'
          />
        </div>
        <div className="controlsWrapper">
            <input
              type='range' min={0} max={1} step='any'
              className="mainRange"
              value={played}
              onMouseDown={this.onSeekMouseDown}
              onChange={this.onSeekChange}
              onMouseUp={this.onSeekMouseUp}
            />
        </div>
        <div style={{'marginBottom':'30px'}}>
          <Duration seconds={duration * played} />
          <Duration seconds={duration * (1 - played)} className="pull-right" />
        </div>
        {/*<div>
          <ChosenTimePart
            chosenPartText = {chosenPartText}
            handleChosenTimePartClicked = {() => this.handleChosenTimePartClicked()}
          />
          <input type="text" value={chosenStart} readOnly/>
          <input type="text" value={chosenEnd} readOnly/>
          <Clear
            handleChosenTimeClearClicked = {() => this.handleChosenTimeClearClicked()}
          />
          <Listen
            handleChosenTimeListen ={() => this.handleChosenTimeListen()}
          />
          <button type="submit">Submit</button>
        </div>*/}
      </Col>
    )
  }
}

Player.propTypes = {
  video: PropTypes.object
};

export default connect(null, null)(Player);
