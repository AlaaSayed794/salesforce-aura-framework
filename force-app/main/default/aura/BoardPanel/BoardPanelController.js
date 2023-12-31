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
    console.log("on result handler");
    var toastEvent = $A.get("e.force:showToast");

    const result = event.getParam("result");
    if (result === "win") {
      toastEvent.setParams({
        title: "Success!",
        message: "Winner winner chicken dinner",
        type: "success"
      });
      component.set("v.reshuffleDisabled", true);
    } else {
      toastEvent.setParams({
        title: "Fail!",
        message: "You lose, try a new game or reshuffle",
        type: "error"
      });
      component.set("v.reshuffleDisabled", false);
    }
    toastEvent.fire();

    helper.addResultRecord(component, result);
  }
});
