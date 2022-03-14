document.getElementById("button1").addEventListener("click", (e) => {
  /** @type HTMLInputElement */
  const input1 = document.getElementById("input1");
  window.parent.postMessage(
    {
      type: "button-click",
      message: input1.value
    },
    "*"
  );
  input1.value = "";
});
