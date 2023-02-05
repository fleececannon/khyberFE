//***********************
//***********************
document.addEventListener("click", (event) => {
  console.log(event);
  if (event.target.className === "oZ-jc T-Jo J-J5-Ji T-Jo-Jp") {
    console.log("Event target class name is oZ-jc T-Jo J-J5-Ji T-Jo-Jp");
    addSelectorToHeader();
  }
});

const createSelector = () => {
  // Create a div element
  const selectorContainer = document.createElement("div");
  selectorContainer.style.display = "inline-block";

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
  // button.style.backgroundRepeat = "no-repeat";
  // button.style.backgroundSize = "cover";

  // Create options container
  const optionsContainer = document.createElement("div");
  optionsContainer.style.display = "none";

  // Add options to the options container
  const option1 = document.createElement("div");
  option1.textContent = "Option 1";
  optionsContainer.appendChild(option1);

  const option2 = document.createElement("div");
  option2.textContent = "Option 2";
  optionsContainer.appendChild(option2);

  selectorContainer.appendChild(button);
  selectorContainer.appendChild(optionsContainer);

  button.addEventListener("click", function () {
    optionsContainer.style.display =
      optionsContainer.style.display === "none" ? "block" : "none";
  });

  return selectorContainer;
};

// const createSelector = () => {
//   // Create a div element
//   const selectorContainer = document.createElement("div");
//   selectorContainer.style.display = "inline-block";

//   // Create an image element
//   const khyberImage = document.createElement("img");
//   khyberImage.src =
//     "https://uploads-ssl.webflow.com/63d84672894ec400b3fa0cfe/63d87d54eea9124df8bf575f_color-p-500.png";
//   khyberImage.style.height = "20px";
//   khyberImage.style.width = "20px";
//   selectorContainer.appendChild(khyberImage);

//   // Create a dropdown selector
//   const selector = document.createElement("select");
//   selector.style.height = "20px";
//   selector.style.width = "100px";
//   selector.style.marginLeft = "5px";

//   // Add options to the selector
//   const option1 = document.createElement("option");
//   option1.value = "option1";
//   option1.text = "Option 1";
//   selector.add(option1);

//   const option2 = document.createElement("option");
//   option2.value = "option2";
//   option2.text = "Option 2";
//   selector.add(option2);

//   selectorContainer.appendChild(selector);
//   return selectorContainer;
// };

const addSelectorToHeader = () => {
  // Get the Gmail inbox header element
  const header = document.querySelector(".G-tF");

  // Append the selector container to the header
  header.appendChild(createSelector());
};
