({
  addResultRecord: function (component, result) {
    console.log("apex function will be called");
    // getting apex class method, this is possible because the class is the aura component's controller in controller attribute
    const action = component.get("c.addResult");
    const mode = component.get("v.selectedMode");
    action.setParams({ result, mode });
    action.setCallback(this, function (response) {
      const state = response.getState();
      if (state !== "SUCCESS") {
        console.error("error saving record");
      } else {
        console.log("added record successfully");
      }
    });
    $A.enqueueAction(action);
  }
});
