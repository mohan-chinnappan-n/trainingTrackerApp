({

    doInit : function (component) {
        var flow = component.find("myFlow");
        var flowName = "SimpleFlow";
        //alert("Going to start :" + flowName);
        flow.startFlow(flowName );
    },

	createOppty2 : function(component, event, helper) {
        var action = component.get("c.svrSaveOppty");
        var oppty = component.get("v.oppty");
        action.setParams({
            "opptyRec":component.get("v.oppty")
        });
        
        action.setCallback(this, function(response){
            //alert (response.getState());
            if(response.getState()==='SUCCESS'){
                var opptyId = response.getReturnValue();
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    "title": "Success!",
                    "type":"Success",
                    "message": "Opportunity created successfully."
                });
                toastEvent.fire();

                // -- navigate to the create record
                var navEvt = $A.get("e.force:navigateToSObject");
                navEvt.setParams({
                    "recordId": opptyId,
                    "slideDevName": "related"
                });
                navEvt.fire();
            }
            else {
                //alert (response.getState());
            }
        });
        $A.enqueueAction(action);
	}
})