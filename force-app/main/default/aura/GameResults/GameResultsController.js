({
  doInit: function (component, event, helper) {
    const columns = [
      { label: "Game number", fieldName: "Name", type: "text" },
      { label: "Mode", fieldName: "Mode__c", type: "text" },
      { label: "Played on", fieldName: "CreatedDate", type: "text" },
      { label: "Result", fieldName: "Result__c", type: "text" }
    ];
    component.set("v.columns", columns);
    helper.fetchResults(component);
  },
  onResultHandler: function (component) {
    console.log("game result app handler called");
    helper.fetchResults(component);
  }
});
