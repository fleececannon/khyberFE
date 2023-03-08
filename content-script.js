"use strict";

var emailsCheckbox = [...document.querySelectorAll(".oZ-jc")];
var inbox = document.querySelector(".UI");

console.log(inbox);

function respondToClick(event) {
  const element = event.target;
  if (element.getAttribute("aria-checked") === "true") {
    console.log("checked");
    console.log(element.getAttribute("aria-checked"));
  } else {
    console.log("not checked");
    console.log(element.getAttribute("aria-checked"));
  }
}

inbox.addEventListener("click", respondToClick);

// const createSelector = () => {
//   // Create a div element
//   const selectorContainer = document.createElement("div");
//   selectorContainer.style.display = "inline-block";

//   //get background color
//   const headerBackgroundColor = window.getComputedStyle(
//     document.querySelector("header")
//   ).backgroundColor;

//   // Create an image element
//   const khyberImage = document.createElement("img");
//   khyberImage.src =
//     "https://uploads-ssl.webflow.com/63d84672894ec400b3fa0cfe/63d87d54eea9124df8bf575f_color-p-500.png";
//   khyberImage.classList.add("khyberImage");
//   selectorContainer.appendChild(khyberImage);

//   // Create a dropdown button
//   const dropButton = document.createElement("button");
//   dropButton.classList.add("dropButton");
//   dropButton.style.backgroundImage =
//     "url(https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/arrow_drop_down_baseline_nv700_20dp.png)";
//   dropButton.style.backgroundColor = headerBackgroundColor;

//   // Create options container
//   const optionsContainer = document.createElement("div");
//   optionsContainer.style.display = "block";
//   optionsContainer.style.backgroundColor = "white";
//   optionsContainer.style.borderRadius = "4px";
//   optionsContainer.style.boxShadow = "0 2px 4px rgb(0 0 0 / 20%)";
//   dropButton.classList.add("optionsContainer");

//   // Add options to the options container
//   const option1 = document.createElement("div");
//   dropButton.classList.add("options");
//   // option1.textContent = "Option 1";
//   // option1.style.paddingBottom = "6px";
//   // option1.style.paddingTop = "6px";
//   // option1.style.color = "#202124";
//   // option1.style.paddingLeft = "48px";
//   // option1.style.paddingRight = "48px";
//   // option1.style.font = "roboto";
//   // option1.style.fontSize = ".875rem";
//   // option1.style.fontFamily = "Roboto";
//   optionsContainer.appendChild(option1);

//   const option2 = document.createElement("div");
//   option2.textContent = "Option 2";
//   option2.style.paddingBottom = "6px";
//   option2.style.paddingTop = "6px";
//   option2.style.color = "#202124";
//   option2.style.paddingLeft = "48px";
//   option2.style.paddingRight = "48px";
//   option2.style.font = "roboto";
//   option2.style.fontSize = ".875rem";
//   option2.style.fontFamily = "Roboto";
//   optionsContainer.appendChild(option2);

//   const option3 = document.createElement("div");
//   option3.textContent = "Option 2";
//   option3.style.paddingBottom = "6px";
//   option3.style.paddingTop = "6px";
//   option3.style.color = "#202124";
//   option3.style.paddingLeft = "48px";
//   option3.style.paddingRight = "48px";
//   option3.style.font = "roboto";
//   option3.style.fontSize = ".875rem";
//   option3.style.fontFamily = "Roboto";
//   optionsContainer.appendChild(option3);

//   selectorContainer.appendChild(dropButton);
//   selectorContainer.appendChild(optionsContainer);

//   dropButton.addEventListener("click", function () {
//     console.log("button click");
//     optionsContainer.style.display =
//       optionsContainer.style.display === "none" ? "block" : "none";
//   });

//   return selectorContainer;
// };

// const addSelectorToHeader = () => {
//   // Get the Gmail inbox header element
//   const header = document.querySelector(".G-tF");

//   // Append the selector container to the header
//   header.appendChild(createSelector());
// };
