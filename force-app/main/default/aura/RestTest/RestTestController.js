({
    handleResponse : function(component, event, helper) {
        var response = event.getParam("response");
        alert(response);
        console.log(response.body);
        // do something interesting...
    }
})