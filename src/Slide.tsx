import * as React from "react";
import "./Slide.css";

export type Slide = {
  kind: "title" | "question" | "answer" | "results";
  ordinal: string;
  questionText: string;
  answerText: string;
  choices: string[];
  picture: string;
};
export const SlideView: React.FC<Slide> = slide => {
  return slide.kind === "question" ? <QuestionSlideView {...slide} /> : null;
};

export const QuestionSlideView: React.FC<Slide> = ({
  ordinal,
  questionText,
  answerText,
  choices,
  picture
}) => {
  console.log(ordinal);
  return (
    <SlideLayout picture={!!picture}>
      <Picture src={picture} />
      <HUD>{ordinal}</HUD>
      <Controls>next / prev</Controls>
      <QuestionText>{questionText}</QuestionText>
      {choices.map((choice, i) => (
        <Choice key={"choice-" + i} index={i}>
          {choice}
        </Choice>
      ))}
      <AnswerText>{answerText}</AnswerText>
    </SlideLayout>
  );
};

const SlideLayout: React.FC<{ picture: boolean }> = ({ children, picture }) => (
  <div
    className={"question-slide " + (picture ? "with-picture" : "no-picture")}
  >
    {children}
  </div>
);
const HUD: React.FC = ({ children }) => <div className="hud">{children}</div>;
const Controls: React.FC = ({ children }) => (
  <div className="controls">{children}</div>
);

const QuestionText: React.FC = ({ children }) => (
  <div className="question-text">{children}</div>
);

const Choice: React.FC<{ index: number }> = ({ index, children }) => (
  <div className={"choice choice-" + index}>{children}</div>
);

const AnswerText: React.FC = ({ children }) => (
  <div className="answer-text">{children}</div>
);

const Picture: React.FC<{ src: string }> = ({ src }) => {
  return src ? (
    <div
      className="picture"
      style={{
        backgroundImage: `url(${src})`
      }}
    />
  ) : null;
};
