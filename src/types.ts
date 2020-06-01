export type Quiz = {
  title: string;
  description: string;
  rounds: ReadonlyArray<Round>;
};

export type Round = {
  title: string;
  description: string;
  config: {
    showAnswers: "never" | "after-round" | "after-each";
  };
  questions: ReadonlyArray<Question>;
};

export type Question = {
  ordinal: string;
  questionText: string;
  picture?: string;
  audio?: string;
  choices: ReadonlyArray<string>;
  correctAnswers: ReadonlyArray<string>;
};
