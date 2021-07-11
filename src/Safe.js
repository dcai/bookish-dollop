import React from 'react';
import { Container } from './components/Container';
import { Led } from './components/Led';
import { LcdDisplay } from './components/LcdDisplay';
import { CodePad } from './components/CodePad';
import { Row } from './components/Row';
import { Col } from './components/Col';

export const Safe = () => (
  <section className="hero is-success">
    <div className="hero-body">
      <Container>
        <Row>
          <Col sizeClass="is-half">
            <CodePad />
          </Col>
          <Col sizeClass="is-half">
            <LcdDisplay />
            <br />
            <Led />
          </Col>
        </Row>
      </Container>
    </div>
  </section>
);
