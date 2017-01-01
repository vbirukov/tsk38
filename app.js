/**
 * Created by concisv on 25.12.2016.
 */

let elem = document.querySelector(".clps");
let message = 'Свернуть текст';
elem.addEventListener("click", function () {
  let messageTmp = elem.innerText;
  elem.innerText = message;
  message = messageTmp;
})

