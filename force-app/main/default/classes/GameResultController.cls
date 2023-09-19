public with sharing class GameResultController {
  @AuraEnabled
  public static List<Word_Shuffle__c> getResults() {
    try {
      String userId = UserInfo.getUserId();
      List<Word_Shuffle__c> result = [
        SELECT Id, Name, Result__c, Mode__c, CreatedDate
        FROM Word_Shuffle__c
        WHERE CreatedById = :userId
        ORDER BY CreatedDate DESC
      ];
      return result;
    } catch (Exception e) {
      throw new AuraHandledException(e.getMessage());
    }
  }
}
