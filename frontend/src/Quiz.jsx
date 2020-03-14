import React, { useState } from "react";
import AppContext from "./AppContext";

import styled from "styled-components";
import {
  StyledCol as Col,
  StyledRow as Row,
  StyledForm as Form,
  StyledButton as Button,
  StyledContainer as Container
} from "./bootstrap-components";

import { Circle } from "./icons";

const View = styled.div``;
const ColorButtonArea = styled.div``;
const PitchArea = styled.div``;
const ColorButton = styled(Button)``;
const ButtonWrapper = styled.div``;

let getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const audio = [];
audio.push(new Audio("/audio/C4.mp3"));
audio.push(new Audio("/audio/Db4.mp3"));
audio.push(new Audio("/audio/D4.mp3"));
audio.push(new Audio("/audio/Eb4.mp3"));
audio.push(new Audio("/audio/E4.mp3"));
audio.push(new Audio("/audio/F3.mp3"));
audio.push(new Audio("/audio/Gb3.mp3"));
audio.push(new Audio("/audio/G3.mp3"));
audio.push(new Audio("/audio/Ab3.mp3"));
audio.push(new Audio("/audio/A3.mp3"));
audio.push(new Audio("/audio/Bb3.mp3"));
audio.push(new Audio("/audio/B3.mp3"));

let Quiz = ({ className }) => {
  const [numOfQuiz, setNumOfQuiz] = useState(0);
  const [start, setStart] = useState(false);
  const [stage, setStage] = useState(0);
  const [pitchIndex, setPitchIndex] = useState(getRandomInt(0, audio.length));

  let makeQuiz = p => {
    if (pitchIndex === p.id - 4) {
      setStage(stage + 1);
      setPitchIndex(getRandomInt(0, audio.length));
    }
  };

  return (
    <div className={className}>
      <AppContext.Consumer>
        {value => (
          <View>
            {start ? (
              <>
                <PitchArea>
                  <Button
                    onClick={() => {
                      audio[pitchIndex].play();
                    }}
                  >
                    Play
                  </Button>
                </PitchArea>
                <ColorButtonArea>
                  <Container fluid>
                    <Row>
                      {value.pitches.map(
                        p =>
                          p.id % 4 === 0 && (
                            <Col key={p.id} sm={4} xs={8}>
                              <ColorButton
                                variant="link"
                                onClick={() => makeQuiz(p)}
                              >
                                <Circle color={p.color} />
                              </ColorButton>
                            </Col>
                          )
                      )}
                    </Row>
                    <Row>
                      {value.pitches.map(
                        p =>
                          p.id % 4 === 1 && (
                            <Col key={p.id} sm={4} xs={8}>
                              <ColorButton
                                variant="link"
                                onClick={() => makeQuiz(p)}
                              >
                                <Circle color={p.color} />
                              </ColorButton>
                            </Col>
                          )
                      )}
                    </Row>
                    <Row>
                      {value.pitches.map(
                        p =>
                          p.id % 4 === 2 && (
                            <Col key={p.id} sm={4} xs={8}>
                              <ColorButton
                                variant="link"
                                onClick={() => makeQuiz(p)}
                              >
                                <Circle color={p.color} />
                              </ColorButton>
                            </Col>
                          )
                      )}
                    </Row>
                    <Row>
                      {value.pitches.map(
                        p =>
                          p.id % 4 === 3 && (
                            <Col key={p.id} sm={4} xs={8}>
                              <ColorButton
                                variant="link"
                                onClick={() => makeQuiz(p)}
                              >
                                <Circle color={p.color} />
                              </ColorButton>
                            </Col>
                          )
                      )}
                    </Row>
                  </Container>
                </ColorButtonArea>
              </>
            ) : (
              <>
                <Form>
                  <Form.Label>Number of quizes</Form.Label>
                  <Form.Control
                    placeholder="Number of quizes"
                    type="number"
                    value={numOfQuiz}
                    onChange={event => setNumOfQuiz(event.target.value)}
                  ></Form.Control>
                </Form>
                <ButtonWrapper>
                  <Button onClick={() => setStart(true)}>Start</Button>
                </ButtonWrapper>
              </>
            )}
          </View>
        )}
      </AppContext.Consumer>
    </div>
  );
};

Quiz = styled(Quiz)`
  margin-top: 30px;
  ${View} {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  ${ColorButtonArea} {
  }

  ${PitchArea} {
    padding: 20px 0;
  }

  ${ColorButton} {
    margin-right: 10px;
  }

  ${ButtonWrapper} {
    margin-left: 20px;
  }
`;

export default Quiz;
