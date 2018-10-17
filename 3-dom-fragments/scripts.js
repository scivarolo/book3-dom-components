// In your JavaScript, use querySelector() to obtain a reference to that article DOM element.
const messagesContainer = document.querySelector('#messages');
const messagesFrag = document.createDocumentFragment();

let messages = [
  `Are we doing fireworks this year?`,
  `After last year's "tree incident", should we?`,
  `The fire fighters put it out in like a minute. Wasn't even a real fire.`,
  `We can set them off in the street.`,
  `Our neighbors' houses are flammable, too`,
];
let moreMessages = [
  `2Are we doing fireworks this year?`,
  `2After last year's "tree incident", should we?`,
  `2The fire fighters put it out in like a minute. Wasn't even a real fire.`,
  `2We can set them off in the street.`,
  `2Our neighbors' houses are flammable, too`,
]

let newMessage = `This message is not in an array`;


// Create five (5) section components, each with a class of message, and with the content of your choosing.
// Using appendChild(), attach each message as a child to the messages element.

const message = (content) => {
  let messageElement = document.createElement('section');
  messageElement.className = 'message';
  messageElement.textContent = content;
  messagesFrag.appendChild(messageElement);
}

//Experiment with rest operator to allow for unlimited arguments.
const outputMessages = (...messageArray) => {
  messageArray.forEach((currentMessage) => {
    message(currentMessage);
  });

  messagesContainer.appendChild(messagesFrag);
}

outputMessages(...messages, ...moreMessages, newMessage);