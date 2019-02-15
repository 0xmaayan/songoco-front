import React from 'react';
import PropTypes from 'prop-types';

const ChosenTimePart = props => {

  const { chosenPartText, handleChosenTimePartClicked } = props;

  return (
    <button onClick={() => handleChosenTimePartClicked()}>
      {chosenPartText}
    </button>
  );
};

const Clear = props => {

  const { handleChosenTimeClearClicked } = props;

  return (
    <button onClick={() => handleChosenTimeClearClicked()}>Clear</button>
  )
}

const Listen = props => {

  const { handleChosenTimeListen } = props;

  return (
    <button onClick={() => handleChosenTimeListen()}>Listen</button>
  )
}

ChosenTimePart.propTypes = {
  chosenPartText: PropTypes.string,
  handleChosenTimePartClicked: PropTypes.func
};

Clear.propTypes = {
  handleChosenTimeClearClicked: PropTypes.func
};

Listen.propTypes = {
  handleChosenTimeListen: PropTypes.func
};

export {ChosenTimePart, Clear, Listen};
