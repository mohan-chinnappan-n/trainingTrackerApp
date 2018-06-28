public with sharing class OverrideSaveOpptyCtrl {

    @AuraEnabled 
    public static Id svrSaveOppty(Opportunity opptyRec) {
        try {
            System.debug('opptyRec.Name = ' + opptyRec.Name);
            opptyRec.StageName = 'Prospecting';
            Date td = Date.today();
            
            opptyRec.CloseDate = td.addDays(30);
            insert opptyRec;
        }
        catch(Exception e){
            System.debug('error: ' + e.getMessage());
        }
        return opptyRec.Id;
    
    }
}