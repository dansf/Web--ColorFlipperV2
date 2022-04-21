const loadPage = () => {
  let body = document.querySelector(".body"),
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
    aLiHSL = document.createElement("a");

  body.append(header);
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

  const stylesHeader = ((header) => {
    header.style.height = "3.5rem";
    header.style.backgroundColor = "black";
    header.style.color = "white";
    header.style.display = "flex";
    header.style.fontFamily = "Square peg";
    header.style.fontSize = "1.5rem";
    header.style.letterSpacing = ".2rem";
    header.style.padding = "1rem";
  })(header);

  const styleNav = ((nav) => {
    nav.style.display = "flex";
    nav.style.alignItems = "center";
    nav.style.justifyContent = "space-between";
    nav.style.width = "100%";
    // nav.style.border = "1px solid red"
  })(nav);

  const stylesUl = ((ul) => {
    ul.style.display = "flex";
    ul.style.alignItems = "center";
    ul.style.justifyContent = "center";
    ul.style.listStyle = "none";
    ul.style.columnGap = "1rem";
    ul.style.color = "white";
  })(ul);

  const styleALi = ((aLiRGBA, aLiHEX, aLiHSL) => {
    aLiRGBA.style.cursor = "pointer";
    aLiRGBA.addEventListener("mouseover", () => {
      aLiRGBA.style.color = "red";
      aLiRGBA.style.transition = ".3s";

      aLiRGBA.addEventListener("mouseleave", () => {
        aLiRGBA.style.color = "white";
        aLiRGBA.style.transition = ".3s";
      }
      )
    }),

    aLiHEX.style.cursor = "pointer";
    aLiHSL.style.cursor = "pointer";
  })(aLiRGBA, aLiHEX, aLiHSL);
};

window.onload = loadPage;
