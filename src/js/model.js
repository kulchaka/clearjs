import image from "../img/javascript-illustration.png";

export const model = [
  {
    type: "title",
    value: "Contructor on Vanilla JS ",
    options: {
      tag: "h2",
      styles: {
        background: "linear-gradient(to right, #f68e43 0%, #fbda03 100%)",
        color: "#4b4d65",
        "text-align": "center",
        "text-shadow": "1px 1px 2px #383114",
        padding: "1rem",
      },
    },
  },
  {
    type: "text",
    value: "some text",
  },
  {
    type: "columns",
    value: ["111111", "222222", "333333", "444444"],
  },
  {
    type: "image",
    value: image,
  },
];
