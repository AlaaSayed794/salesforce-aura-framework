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
  }
});
