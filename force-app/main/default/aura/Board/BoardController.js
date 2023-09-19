({
  doInit: function (component, event, helper) {
    const mode = component.get("v.mode");
    let dimension = 0;
    if (mode && mode === "hard") {
      dimension = 6;
    } else if (mode === "medium") {
      dimension = 4;
    } else {
      dimension = 3;
    }
    const blockSize = 12 / dimension;
    component.set("v.blockSize", blockSize);
    const words = helper.getWords(dimension * dimension);
    component.set("v.words", words);
    const winWord = helper.getWinWord(words);
    component.set("v.winWord", winWord);
    helper.resetBoard(component);
  },
  onBlockClick: function (component, event, helper) {
    let clickCount = component.get("v.clickCount") + 1;
    const value = event.getParam("value");
    if (value === component.get("v.winWord")) {
      component.set("v.result", "You win");
      helper.disableBoard(component);
      helper.fireResultEvent("win");
    } else if (clickCount === 3) {
      component.set("v.result", "You lose");
      helper.disableBoard(component);
      helper.fireResultEvent("lose");
    }
    component.set("v.clickCount", clickCount);
  },

  reshuffleBoard: function (component, event, helper) {
    const words = component.get("v.words");
    const randomizedWords = helper.randomizeArray(words);
    component.set("v.words", randomizedWords);
    helper.resetBoard(component);
  }
});
