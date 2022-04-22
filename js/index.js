const body = document.querySelector(".body"),
  header = document.createElement("header"),
  logoLink = document.createElement("a"),
  nav = document.createElement("nav"),
  menuContainer = document.createElement("div"),
  ul = document.createElement("ul"),
  liRGBA = document.createElement("li"),
  liHEX = document.createElement("li"),
  liHSL = document.createElement("li"),
  aLiRGBA = document.createElement("a"),
  aLiHEX = document.createElement("a"),
  aLiHSL = document.createElement("a"),
  main = document.createElement("main"),
  section = document.createElement("section"),
  divContainer = document.createElement("div"),
  textColor = document.createElement("h2"),
  button = document.createElement("button");

body.append(header, main);
header.append(nav);
nav.append(logoLink, menuContainer);
logoLink.append("Color Flipper 🎨");
menuContainer.append(ul);
ul.append(liRGBA, liHEX, liHSL);
liRGBA.append(aLiRGBA);
liHEX.append(aLiHEX);
liHSL.append(aLiHSL);
aLiRGBA.append("RGBA");
aLiHEX.append("HEX");
aLiHSL.append("HSL");
main.append(section);
section.append(divContainer);
divContainer.append(textColor, button);

button.classList.add("button");
button.innerText = "click me";

const displayFlex = (display) => {
  display.style.display = "flex";
  display.style.alignItems = "center";
  display.style.justifyContent = "center";
};

const fontCursive = (font) => {
  font.style.color = "white";
  font.style.fontFamily = "Poppins";
  font.style.fontSize = "1rem";
  font.style.letterSpacing = "5px";
};

const styleAnchorLi = (option, color = "orange") => {
  option.style.cursor = "pointer";

  option.addEventListener("mouseover", () => {
    option.style.color = color;
    option.style.transition = ".3s";

    option.addEventListener("mouseleave", () => {
      option.style.color = "white";
      option.style.transition = ".3s";
    });
  });
};

const styleButton = (option) => {
  option.style.outline = "none";
  option.style.padding = ".55rem 1.3rem";
  option.style.color = "black";
  option.style.backgroundColor = "transparent";
  option.style.fontFamily = "Poppins";
  option.style.borderRadius = "7px";
  option.style.borderWidth = "2px";
  option.style.borderColor = "black";
  option.style.textTransform = "uppercase";
  option.style.fontSize = "1rem";
  option.style.fontWeight = "600";
  option.style.letterSpacing = "2.5px";
  option.style.cursor = "pointer";

  option.addEventListener("mouseover", () => {
    option.style.color = "white";
    option.style.backgroundColor = "black";
    option.style.transition = ".5s";

    option.addEventListener("mouseleave", () => {
      option.style.color = "black";
      option.style.backgroundColor = "transparent";
      option.style.transition = ".5s";
    });
  });
};

displayFlex(header);
displayFlex(nav);
displayFlex(ul);
displayFlex(divContainer);

fontCursive(header);
fontCursive(button);

styleAnchorLi(aLiRGBA);
styleAnchorLi(aLiHEX);
styleAnchorLi(aLiHSL);
styleAnchorLi(logoLink)

styleButton(button);

const stylesHeader = (header) => {
  header.style.height = "3.5rem";
  header.style.backgroundColor = "black";
  header.style.padding = "1rem";
  header.style.fontWeight = "600";
};

const styleNav = (nav) => {
  nav.style.width = "100%";
  nav.style.maxWidth = "968px";
  nav.style.justifyContent = "space-between";
};

const stylesUl = (ul) => {
  ul.style.listStyle = "none";
  ul.style.columnGap = "1rem";
  ul.style.color = "white";
};

const styleDiv = (div) => {
  div.style.height = "calc(100vh - 3.5rem)";
  div.style.placeItems = "center";
  div.style.flexDirection = "column";
  div.style.rowGap = "2rem";
  div.style.backgroundColor = "white"
};

const styleTextColor = (text) => {
  text.innerText = "Background Color : ";
  text.style.backgroundColor = "black";
  text.style.color = "white";
  text.style.fontFamily = "Poppins";
  text.style.padding = ".75rem";
  text.style.borderRadius = "10px";
  text.style.letterSpacing = "5px";
  text.style.fontSize = "2.2rem";
};

stylesHeader(header);
styleNav(nav);
stylesUl(ul);
styleDiv(divContainer);
styleTextColor(textColor);

// Gerando a troca de cores
const listColors = ["Cyan", "Red", "Blue", "Purple", "Green", "Yellow"];
textColor.innerText = `Background Color : White`

var index, i = 0;

const setColor = (div, text, listColors) => {
  index = i;
  i++;
  console.log(listColors[index]);
  div.style.backgroundColor = listColors[index];
  text.innerText = `Background Color : ${listColors[index]}`;

  styleAnchorLi(aLiRGBA, listColors[index]);
  styleAnchorLi(aLiHEX, listColors[index]);
  styleAnchorLi(aLiHSL, listColors[index]);
  styleAnchorLi(logoLink, listColors[index]);


  if (i == 6) i = 0;
};

// setColor(divContainer, textColor, listColors);

button.addEventListener("click", () =>
  setColor(divContainer, textColor, listColors)
);
