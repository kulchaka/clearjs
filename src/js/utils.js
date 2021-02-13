export function row(content) {
  return `<div class="row">${content}</div>`;
}

export function col(content, styles) {
  return `<div class="col-sm" style="${styles}">${content}</div>`;
}
