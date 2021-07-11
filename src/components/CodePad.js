import { useDispatch } from 'react-redux';
import React from 'react';
import { Col } from './Col';
import { Row } from './Row';
import { actions } from '../redux/actions';

const KeyButton = (props) => {
  const value = props.value || '';
  const dispatch = useDispatch();
  const defaultHandler = (e) => {
    dispatch(actions.keypress({ value }));
  };
  const handler = props.handler || defaultHandler;
  return (
    <button onClick={handler} className="button is-dark is-large is-fullwidth">
      {props.children}
    </button>
  );
};

export const CodePad = (props) => {
  const dispatch = useDispatch();
  return (
    <>
      <Row cols={3}>
        <Col sizeClass="is-one-third">
          <KeyButton value="1">1</KeyButton>
        </Col>
        <Col sizeClass="is-one-third">
          <KeyButton value="2">2</KeyButton>
        </Col>
        <Col sizeClass="is-one-third">
          <KeyButton value="3">3</KeyButton>
        </Col>
      </Row>
      <Row cols={3}>
        <Col sizeClass="is-one-third">
          <KeyButton value="4">4</KeyButton>
        </Col>
        <Col sizeClass="is-one-third">
          <KeyButton value="5">5</KeyButton>
        </Col>
        <Col sizeClass="is-one-third">
          <KeyButton value="6">6</KeyButton>
        </Col>
      </Row>
      <Row cols={3}>
        <Col sizeClass="is-one-third">
          <KeyButton value="7">7</KeyButton>
        </Col>
        <Col sizeClass="is-one-third">
          <KeyButton value="8">8</KeyButton>
        </Col>
        <Col sizeClass="is-one-third">
          <KeyButton value="9">9</KeyButton>
        </Col>
      </Row>
      <Row cols={3}>
        <Col sizeClass="is-one-third">
          <KeyButton handler={(e) => dispatch(actions.clear())}>CLR</KeyButton>
        </Col>
        <Col sizeClass="is-one-third">
          <KeyButton value="0">0</KeyButton>
        </Col>
        <Col sizeClass="is-one-third">
          <KeyButton handler={(e) => dispatch(actions.enter())}>⇒</KeyButton>
        </Col>
      </Row>
    </>
  );
};
