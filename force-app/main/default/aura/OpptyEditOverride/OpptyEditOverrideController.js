({
	   doInit : function (component) {
        var flow = component.find("myFlow");
        var flowName = "SimpleFlow";
        //alert("Going to start :" + flowName);
        flow.startFlow(flowName );
    }
})