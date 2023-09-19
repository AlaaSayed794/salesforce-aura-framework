({
  blockClickHandler: function (component) {
    const open = component.get("v.open");
    const label = component.get("v.label");
    if (!open) {
      component.set("v.open", true);
      const cmpEvent = component.getEvent("onclick");
      cmpEvent.setParams({ value: label });
      cmpEvent.fire();
    }
  },
  scriptsLoaded: function (component) {
    const blockDiv = component.getElement(".board-block");
    fitText(blockDiv);
  }
});
