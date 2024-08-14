function customRender(Element, Container) {
  /*
  const domElement = document.createElement(Element.type);
  domElement.innerHTML = Element.children;
  domElement.setAttribute("href", Element.props.href);
  domElement.setAttribute("target", Element.props.target);
  Container.appendChild(domElement);
*/
  const domElement = document.createElement(Element.type);
  domElement.innerHTML = Element.children;
  for (const prop in Element.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, Element.props[prop]);
  }
  Container.appendChild(domElement);

  Container.appendChild(domElement);
}

const mainContainer = document.querySelector("#root");

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "Click here to visit the site",
};

customRender(reactElement, mainContainer);
