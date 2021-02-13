import image from "../img/javascript-illustration.png";
import {
  TitleBlock,
  ImageBlock,
  ColumnsBlock,
  TextBlock,
} from "./classes/Blocks";

export const model = [
  new TitleBlock("Contructor on Vanilla JS", {
    tag: "h2",
    styles: {
      background: "linear-gradient(to right, #f68e43 0%, #fbda03 100%)",
      color: "#4b4d65",
      "text-align": "center",
      "text-shadow": "1px 1px 2px #383114",
      padding: "1rem",
    },
  }),

  new ImageBlock(image, {
    styles: {
      padding: "2rem 0",
      display: "flex",
      "justify-content": "center",
    },
    imageStyles: {
      width: "500px",
      height: "auto",
    },
    alt: "javascript image",
  }),

  new ColumnsBlock(
    [
      "Pure JavaScript application, without any libraries",
      "Learn how SOLID and OOP principles work in JavaScript",
      "JavaScript is easy, interesting.",
    ],
    {
      styles: {
        background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
        padding: "2rem",
        color: "#fff",
        "font-weight": "bold",
      },
    }
  ),

  new TextBlock("Andrii Kulchytskyi - kulchaka@gmail.com", {
    styles: {
      background: "linear-gradient(to left, #f2994a, #f2c94c)",
      padding: "1rem",
      "font-weight": "bold",
    },
  }),
];
