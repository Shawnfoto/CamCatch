const GrabEvent = sendResponse => {
  console.log("grab");
  // const studentApp = document.getElementById("student-app").children[0]
  //   .children[1].children[0].children[1].children[1].children[0].children[0]
  //   .children[4];
  // const text =
  //   studentApp.children[0].children[1].children[0].children[0].children[0]
  //     .innerText;
  let textDOM = document.querySelectorAll(
    'div[style="padding: 10px 20px; background: rgb(218, 240, 247); border-radius: 4px; border: 1px solid rgba(0, 0, 0, 0.1); word-break: break-all;"]'
  );
  const textArr = Array.from(textDOM);
  const msgArr = [];
  
  for (let i = 0; i < textArr.length; i++) {
    let v = textArr[i].innerText;
    console.log("text: ", v);
    msgArr.push(v);
  }
  sendResponse({ msgArr: msgArr });
};



chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  switch (message.action) {
    case "Grab":
      console.log(message.action);
      GrabEvent(sendResponse);
      break;
    default:
      break;
  }
});
