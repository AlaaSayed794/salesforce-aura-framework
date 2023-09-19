({
  startGame: function (component, event, helper) {
    const comboBox = component.find("gameMode");
    const selectedValue = comboBox.get("v.value");
    component.set("v.selectedMode", selectedValue);
    //alert("start game with difficulty " + selectedValue);
    if (component.get("v.selectedMode")) {
      component.find("boardComp").startGame();
    }
  },
  reshuffleBoard: function (component, event, helper) {
    const board = component.find("boardComp");
    board.reshuffleBoard();
    component.set("v.reshuffleDisabled", true);
  },
  onResultHandler: function (component, event, helper) {
    const result = event.getParam("result");
    if (result === "win") {
      component.set("v.reshuffleDisabled", true);
    } else {
      component.set("v.reshuffleDisabled", false);
    }
  }
});
