({
    doInit : function(component, event, helper) {
         var action = component.get("c.svrGetSID");
         action.setCallback(this, function(res) {
         component.set('v.SID', res.getReturnValue() );
            
         console.log(res.getState(), res.getReturnValue());
         //
         });
        $A.enqueueAction(action);
  
            
    }
	,makeRequest : function(component, event, helper) {
        var action = component.get("c.svrService");
        
        action.setParams({
            path: component.get("v.path"),
            method: component.get("v.method"),
            responseFormat: component.get("v.responseFormat"),
            bodyContent: component.get("v.bodyContent"),
            bodyContentType: component.get("v.bodyContentType"),
            sid: '00DL0000005uKf8!AQsAQMyrXCO4D0xnHobqoUv.8oIAH6hbFAFi9YJd5l2UoRgUXQSkQv.Qz4rgfci7CrhrLvV9EWNVeccNX5viDCbPNqTMtaLn'
        });
        
        action.setStorable();
        
        action.setCallback(this, function(a) {
           alert(a.getReturnValue());
        	component.getEvent("restResponseEvent").setParams({
            	response: a.getReturnValue()
        	}).fire(); 
        });
        
        $A.enqueueAction(action);
	}
})