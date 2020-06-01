import { Quiz } from "./types";
import { Slide } from "./Slide";
import { SlideShow } from "./SlideShow";

export function slideshowFromQuiz(quiz: Quiz): SlideShow {
  // const title = {
  //   kind: "title",
  //   middleText: quiz.title + quiz.description
  // };
  const slides: Slide[] = quiz.rounds[0].questions.map(q => {
    return {
      kind: "question",
      ordinal: q.ordinal,
      questionText: q.questionText,
      answerText: q.correctAnswers[0],
      choices: q.choices.slice(),
      picture: q.picture || ""
    };
  });
  return { initialIndex: 0, slides };
}

// const slides = [
//   {
//     kind: "question",
//     ordinal: "1 / 10",
//     topText: "",
//     //"Quién es esta persona que aparece aqui en esta foto. Será posible saber, me cacho en diez?",
//     middleText: "",
//     bottomText: "Quien es?",
//     picture:
//       "https://www.dropbox.com/s/47798925bilxyqb/05BE1597-AEAC-4918-947A-96BA7111DB77.jpg?raw=1",
//     options: ["Option 1000000", "Option 2", "Option 3", "Option 4"]
//   },
//   {
//     kind: "question",
//     ordinal: "1 / 10",
//     topText: "Quién es?",
//     middleText: "",
//     bottomText: "Montserrat Caballé",
//     picture:
//       "https://www.dropbox.com/s/47798925bilxyqb/05BE1597-AEAC-4918-947A-96BA7111DB77.jpg?raw=1",
//     options: []
//   },
//   {
//     kind: "question",
//     ordinal: "2 / 10",
//     topText: "Top Text 2",
//     middleText: "Answer Text 2",
//     bottomText: "Bottom Text 2",
//     picture: "https://placeimg.com/1920/1080/tech",
//     options: []
//   },
//   {
//     kind: "question",
//     ordinal: "3 / 10",
//     topText: "Top Text 3",
//     middleText: "Answer Text 3",
//     bottomText: "Bottom Text 3",
//     picture: "https://placeimg.com/1008/900/animals",
//     options: []
//   }
// ];
