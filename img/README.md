## Standard Button Override - Lightning Experience Override and Mobile Override using Lightning Component

![Override Demo](std-btn-override-lex-oppty-1.gif)

## How to call Flow in Lightning component

### In the Component Markup put the following

```xml


<lightning:flow aura:id="myFlow"/>


```


### Component Controller code

```js

({

    doInit : function (component) {
        var flow = component.find("myFlow");
        var flowInputData  = [
        {
            name : "Larry wall"
            // and more fields here
        }
        ];
        var flowName = "CreateMaster";
        flow.startFlow(flowName, flowInputData );
    }

    //... other controller methods


})

 

```

### References

1. [Considerations for Configuring Components for Flows ](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/components_config_for_flow_screens_tips.htm?search_text=lightning:flow)
