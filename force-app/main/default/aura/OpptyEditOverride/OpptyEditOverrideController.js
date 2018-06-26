({
	   doInit : function (component) {
        var flow = component.find("myFlow");
        var flowName = "SimpleFlow";
        //alert("Going to start :" + flowName);
        flow.startFlow(flowName );
        var url = "/apex/HelloWorld";
        window.open(url,'_self');
    }
})