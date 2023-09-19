public with sharing class BoardPanelController {
  @AuraEnabled
  public static void addResult(String result, String mode) {
    try {
      Word_Shuffle__c word = new Word_Shuffle__c(
        Result__c = result,
        Mode__c = mode
      );
      insert word;
    } catch (Exception e) {
      throw new AuraHandledException(e.getMessage());
    }
  }
}
