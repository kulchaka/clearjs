const model = [
  {
    type: "title",
    value: "Hello world from JS",
  },
  {
    type: "text",
    value: "some text",
  },
  {
    type: "columns",
    value: ["111111", "222222", "333333"],
  },
];

const site = document.querySelector("#site");

model.forEach((block) => {
  // console.log(block);
  let html = "";

  if (block.type === "title") {
    html = `
    <div class="row">
      <div class="col-sm">
        <h1>${block.value}</h1>
       </div>
    </div>
    `;
  } else if (block.type === "text") {
    html = `
    <div class="row">
      <div class="col-sm">
        <p>
          ${block.value}
        </p>
      </div>
    </div>
    `;
  } else if (block.type === "columns") {
  }

  site.insertAdjacentHTML("beforeend", html);
});
