({
  fetchResults: function (component) {
    console.log("apex function will be called");
    // getting apex class method, this is possible because the class is the aura component's controller in controller attribute
    const action = component.get("c.getResults");
    action.setCallback(this, function (response) {
      const state = response.getState();
      if (state !== "SUCCESS") {
        console.error("error saving record");
      } else {
        const data = response.getReturnValue();
        console.log(data);
        component.set("v.data", data);
      }
    });
    $A.enqueueAction(action);
  }
});
