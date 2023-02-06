//***********************
//***********************
document.addEventListener("click", (event) => {
  console.log(event);
  if (event.target.className === "oZ-jc T-Jo J-J5-Ji T-Jo-Jp") {
    console.log("Event target class name is oZ-jc T-Jo J-J5-Ji T-Jo-Jp");
    addSelectorToHeader();
    getHoverColor();
  }
});

const getHoverColor = () => {
  // Retrieve the color of a relevant element
  const relevantElement = document.querySelector(".aRz J-KU");
  console.log(relevantElement);
  const computedStyle = window.getComputedStyle(relevantElement);
  const hoverColor = computedStyle.getPropertyValue("background-color");
  console.log(hoverColor);
  // Return the hover color
  return hoverColor;
};

const createSelector = () => {
  // Create a div element
  const selectorContainer = document.createElement("div");
  selectorContainer.style.display = "inline-block";

  //get background color
  const headerBackgroundColor = window.getComputedStyle(
    document.querySelector("header")
  ).backgroundColor;

  // Create an image element
  const khyberImage = document.createElement("img");
  khyberImage.src =
    "https://uploads-ssl.webflow.com/63d84672894ec400b3fa0cfe/63d87d54eea9124df8bf575f_color-p-500.png";
  khyberImage.style.height = "20px";
  khyberImage.style.width = "20px";
  selectorContainer.appendChild(khyberImage);

  // Create a dropdown button
  const button = document.createElement("button");
  button.style.height = "20px";
  button.style.border = "none";
  button.style.width = "20px";
  button.style.marginLeft = "5px";
  button.style.backgroundImage =
    "url(https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/arrow_drop_down_baseline_nv700_20dp.png)";
  button.style.backgroundColor = headerBackgroundColor;

  // Create options container
  const optionsContainer = document.createElement("div");
  optionsContainer.style.display = "block";
  optionsContainer.style.backgroundColor = "white";
  optionsContainer.style.borderRadius = "4px";
  optionsContainer.style.boxShadow = "0 2px 4px rgb(0 0 0 / 20%)";

  // Add options to the options container
  const option1 = document.createElement("div");
  option1.textContent = "Option 1";
  option1.style.paddingBottom = "6px";
  option1.style.paddingTop = "6px";
  option1.style.color = "#202124";
  option1.style.paddingLeft = "48px";
  option1.style.paddingRight = "48px";
  option1.style.font = "roboto";
  option1.style.fontSize = ".875rem";
  option1.style.fontFamily = "Roboto";
  optionsContainer.appendChild(option1);

  const option2 = document.createElement("div");
  option2.textContent = "Option 2";
  option2.style.paddingBottom = "6px";
  option2.style.paddingTop = "6px";
  option2.style.color = "#202124";
  option2.style.paddingLeft = "48px";
  option2.style.paddingRight = "48px";
  option2.style.font = "roboto";
  option2.style.fontSize = ".875rem";
  option2.style.fontFamily = "Roboto";
  optionsContainer.appendChild(option2);

  const option3 = document.createElement("div");
  option3.textContent = "Option 2";
  option3.style.paddingBottom = "6px";
  option3.style.paddingTop = "6px";
  option3.style.color = "#202124";
  option3.style.paddingLeft = "48px";
  option3.style.paddingRight = "48px";
  option3.style.font = "roboto";
  option3.style.fontSize = ".875rem";
  option3.style.fontFamily = "Roboto";
  optionsContainer.appendChild(option3);

  selectorContainer.appendChild(button);
  selectorContainer.appendChild(optionsContainer);

  button.addEventListener("click", function () {
    console.log("button click");
    optionsContainer.style.display =
      optionsContainer.style.display === "none" ? "block" : "none";
  });

  return selectorContainer;
};

const addSelectorToHeader = () => {
  // Get the Gmail inbox header element
  const header = document.querySelector(".G-tF");

  // Append the selector container to the header
  header.appendChild(createSelector());
};
