import { row, col, css } from "./utils";

function title(block) {
  const { tag = "h1", styles } = block.options;
  console.log(css(styles));
  return row(col(`<${tag}>${block.value}</$tag>`), css(styles));
}

function text(block) {
  return row(col(`<p>${block.value}</p>`));
}

function columns(block) {
  const html = block.value.map(col);

  return row(html.join(""));
}

function image(block) {
  return row(`<img src="${block.value}" alt="javascript">`);
}

export const templates = { title, text, columns, image };
