import "./style.css";
import beer from "./beer.jpg";

export default function composition() {
  const content = document.getElementById("content");
  const info = document.createElement("div");
  info.setAttribute("id", "words");
  content.appendChild(info);

  const hOne = document.createElement("h1");
  hOne.textContent = `Heidi's Public`;

  const hTwo = document.createElement("h2");
  hTwo.textContent = `When you're here, you're public`;

  const copy = document.createElement("div");
  copy.setAttribute("id", "copy");
  copy.textContent =
    "Brewed under the tutelage of diverse European masters who never lost sight of the three beer ingredients: hops, barley, malts, love, hops and hope. We hope you enjoy the beer and the family and being here. It's what you want - right now.";

  const myBeer = new Image();
  myBeer.src = beer;
  myBeer.setAttribute("id", "sidebar");

  info.appendChild(hOne);
  info.appendChild(hTwo);
  info.appendChild(copy);
  content.appendChild(myBeer);
  content.appendChild(info);
}
