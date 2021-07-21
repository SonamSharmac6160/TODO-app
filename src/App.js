import React from "react";
import ReactDOM from "react-dom";
import { Strider, Step } from "react-strider";
import cx from "classnames";

import "./styles.scss";

import data from "./data";
import Button from "./button";

import QuizSingle from "./single";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      correct: 0 // Set the total right answered to zero
    };
  }
  render() {
    return (
      <div className="f jcc aic site">
        <div>
          <Strider activeIndex="0" transitionSpeed={300}>
            <Step>
              {({ next, goTo, active, hiding, activeIndex }) => (
                <div
                  className={cx("step__wrapper", {
                    "is-active": active,
                    "is-hiding": hiding
                  })}
                >
                  <QuizStart next={next} />
                </div>
              )}
            </Step>
            <Step>
              {({ next, goTo, active, hiding, activeIndex }) => (
                <div
                  className={cx("step__wrapper", {
                    "is-active": active,
                    "is-hiding": hiding
                  })}
                >
                  <QuizSingle
                    {...this.props}
                    pushAnswer={() =>
                      this.setState({ correct: this.state.correct + 1 })
                    }
                    number={activeIndex}
                    next={next}
                    item={data[activeIndex]}
                  />
                </div>
              )}
            </Step>
            <Step>
              {({ next, goTo, active, hiding, activeIndex }) => (
                <div
                  className={cx("step__wrapper", {
                    "is-active": active,
                    "is-hiding": hiding
                  })}
                >
                  <QuizSingle
                    {...this.props}
                    pushAnswer={() =>
                      this.setState({ correct: this.state.correct + 1 })
                    }
                    number={activeIndex}
                    next={next}
                    item={data[activeIndex]}
                  />
                </div>
              )}
            </Step>
            <Step>
              {({ next, goTo, active, hiding, activeIndex }) => (
                <div
                  className={cx("step__wrapper", {
                    "is-active": active,
                    "is-hiding": hiding
                  })}
                >
                  <QuizSingle
                    {...this.props}
                    pushAnswer={() =>
                      this.setState({ correct: this.state.correct + 1 })
                    }
                    number={activeIndex}
                    next={next}
                    item={data[activeIndex]}
                  />
                </div>
              )}
            </Step>
            <Step>
              {({ active, hiding, activeIndex }) => (
                <div
                  className={cx("step__wrapper", {
                    "is-active": active,
                    "is-hiding": hiding
                  })}
                >
                  <QuizEnd {...this.props} score={this.state.correct} />
                </div>
              )}
            </Step>
          </Strider>
        </div>
      </div>
    );
  }
}

class QuizStart extends React.Component {
  render() {
    return (
      <div>
        <Button
          classes={`f jcb mt1 regular bold cw`}
          clickHandle={() => this.props.next()}
        >
          Start Quiz
        </Button>
      </div>
    );
  }
}

class QuizEnd extends React.Component {
  render() {
    const { score } = this.props;
    return (
      <div className="mha container--q">
        <h4>You scored a {score}/3!</h4>
       
      </div>
    );
  }
}

export default App;