// let apiKey = "AIzaSyAF5NzuxS9Nphv6YE1U07dRzwPuIOHOeY0";
// console.log("h");

let inputField = document.getElementById("inputFeild");
let searchBtn = document.getElementById("button");
let container = document.getElementById("one");
// console.log(inputField);
import { GoogleGenerativeAI } from "@google/generative-ai";

let txt = document.getElementById("inputFeild").value;
      // Fetch your API_KEY
      const API_KEY = "AIzaSyBwjvrEruCJIy1RJnEr0XeYmjmdFMuEWY8";

      // Access your API key (see "Set up your API key" above)
      const genAI = new GoogleGenerativeAI(API_KEY);

      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

      async function run() {
        // document.getElementById("main").style.display = "none";
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        let value = document.getElementById("inputFeild").value;
        const prompt = value;

        // Display the user's input
        // addMessage(prompt, "user-message", "User", "my.jpg");

        // try {
          const result = await model.generateContent(prompt);
          const response = result.response;
          let text = await response.text();
        //   let x=marked.parse(text);
        //   console.log(x);

      

        //   addMessage(
        //     x,
        //     "ai-message",
        //     "Gemini",
        //     "geimi-removebg-preview.png"
        //   );
          document.getElementById("inputFeild").value = "";
    //     } catch (error) {
    //       console.error("Error generating content:", error);
    //     //   addMessage(
    //     //     "Error generating content. Please try again.",
    //     //     "ai-message",
    //     //     "Gemini",
    //     //     "geimi-removebg-preview.png"
    //     //   );
    //     }
    //   }

    //   function addMessage(text, className, sender, imgSrc) {
    //     const chatBox = document.getElementById("chat-box");
    //     const message = document.createElement("div");
    //     message.className = "message " + className;

    //     const img = document.createElement("img");
    //     img.src = imgSrc;
    //     img.alt = sender;
    //     img.className = "chat-img";

    //     const textNode = document.createElement("span");
    //     textNode.innerHTML = text;

    //     message.appendChild(img);
    //     message.appendChild(textNode);
    //     chatBox.appendChild(message);
    //     chatBox.scrollTop = chatBox.scrollHeight;
      }

      document.getElementById("button").addEventListener("click", run);
    //   document
    //     .getElementById("text")
    //     .addEventListener("keypress", function (event) {
    //       if (event.key === "Enter") {
    //         run();
    //       }
        // });
       