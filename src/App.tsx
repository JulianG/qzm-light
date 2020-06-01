import * as React from "react";

// import "antd/dist/antd.css";
import "./App.css";

import { slideshowFromQuiz } from "./slideshowFromQuiz";
import { SlideShowView } from "./SlideShow";
import { Quiz } from "./types";

const quiz: Quiz = {
  title: "My first Quiz",
  description: "Let's see who can guess the most questions.",
  rounds: [
    {
      title: "Round 1",
      description: "Get ready...",
      config: {
        showAnswers: "after-round"
      },
      questions: [
        {
          ordinal: "1 / 5",
          questionText: "How much is 1 + 1?",
          choices: ["1", "2", "3"],
          correctAnswers: ["2", "Two"]
        },
        {
          ordinal: "2 / 5",
          questionText: "Who is this?",
          picture:
            "https://www.dropbox.com/s/47798925bilxyqb/05BE1597-AEAC-4918-947A-96BA7111DB77.jpg?raw=1",
          choices: [
            "Montserrat Caballé",
            "Vilma Palma",
            "Princes Leia",
            "Betty Boop"
          ],
          correctAnswers: ["Montserrat Caballé"]
        }
      ]
    }
  ]
};

const slideshow = slideshowFromQuiz(quiz);

console.log(slideshow);
export default function App() {
  return (
    <>
      <SlideShowView initialIndex={0} slides={slideshow.slides} />
    </>
  );
}
