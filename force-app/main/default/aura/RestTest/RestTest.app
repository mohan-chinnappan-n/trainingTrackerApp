<aura:application >
 <!--
     refer: http://peterknolle.com/rest-api-lightning-component/ 
     sobjects/SObjectName/describe/
  -->
    
    <c:Rest
            path="/services/data/v42.0/sobjects/Account/describe/"           
        restResponseEvent="{!c.handleResponse}"
    />
 
</aura:application>