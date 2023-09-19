({
  startGame: function (component, event, helper) {
    const comboBox = component.find("gameMode");
    const selectedValue = comboBox.get("v.value");
    component.set("v.selectedMode", selectedValue);
    //alert("start game with difficulty " + selectedValue);
    if (component.get("v.selectedMode")) {
      component.find("boardComp").startGame();
    }
  }
});
