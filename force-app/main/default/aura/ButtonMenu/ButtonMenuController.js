({
    doInit : function(cmp, event, helper) {
        var device = $A.get("$Browser.formFactor");
        cmp.set("v.browser", device );
    },
    
    handleSelect: function (cmp, event, helper) {
        // This will contain the string of the "value" attribute of the selected
        // lightning:menuItem
        var selectedMenuItemValue = event.getParam("value");
        cmp.set("v.menuSelection", selectedMenuItemValue);
    },
    
    handleShowNotice : function(cmp, event, helper) {
        cmp.find('notifLib').showNotice({
            "variant": "info",
            "header": "High Value Oppty Won!",
            "message": "Here is the message",
            closeCallback: function() {
               cmp.set("v.notifyStatus", 'You have closed the info notifier!');
            }
        });
    },
    
    handlePillRemove: function (cmp, event) {
        var msg = 'Remove button was clicked!';
        //alert(msg);
        // Display toast message about this
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams( {
            "title": "Info - Pill Remove",
            "message": msg
        });
        toastEvent.fire();
        

        
    },
    
    goToRecord : function(component, event, helper) {
        // Fire the event to navigate to the contact record
        var sObjectEvent = $A.get("e.force:navigateToSObject");
        sObjectEvent.setParams({
            "recordId":"003f400000Nb1QkAAJ"
        })
        sObjectEvent.fire();
    }
    
    
})