import React from 'react';
import PropTypes from 'prop-types';



  function AnswerOption(props) {
    return (
      <li className="answerOption">
        <input
          type="radio"
          className="radioCustomButton"
          name="radioGroup"
          checked={props.answerType === props.answer}
          id={props.answerType}
          value={props.answerType}
          disabled={props.answer}
          onChange={props.onAnswerSelected}
        />
        <label className="radioCustomLabel" htmlFor={props.answerType}>
          {props.answerContent}
        </label>
      </li>
    );
  }
  AnswerOption.propTypes = {
    answerType: PropTypes.string,
    answerContent: PropTypes.string,
    answer: PropTypes.string,
    onAnswerSelected: PropTypes.string
  };
  export default AnswerOption;