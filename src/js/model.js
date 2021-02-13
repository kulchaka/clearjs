import image from "../img/javascript-illustration.png";

export const model = [
  {
    type: "title",
    value: "Hello world from JS",
    options: {
      tag: "h2",
      styles:
        "background-image: linear-gradient(to right, #f68e43 0%, #fbda03 100%); color: #4b4d65; text-align: center; padding: 1rem",
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
