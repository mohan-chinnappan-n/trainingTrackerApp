public class RestRequestCtrl {

    @AuraEnabled
    public static Response svrService(
        String path, 
        String method, 
        String responseFormat, 
        String bodyContent, 
        String bodyContentType,
        String sid
    ) {
        HttpRequest request = buildRequest(path, method, responseFormat, bodyContent, bodyContentType, sid);
        HttpResponse httpRes = sendRequest(request);
        Response restRes = buildResponse(httpRes);
        
        System.debug('restRes: ' + restRes);
        
        return restRes;
    }
    
    @AuraEnabled
    public static String svrGetSID() {
        return UserInfo.getSessionId();
    }
    
    private static HttpRequest buildRequest(String path, String method, String responseFormat, String bodyContent, String bodyContentType, String sid) {
        HttpRequest request = new HttpRequest();
        
        request.setEndpoint(URL.getSalesforceBaseUrl().toExternalForm() + path);
        request.setMethod(method);
        
        if (bodyContent != null) {
            request.setBody(bodyContent);
            request.setHeader('Content-Type', bodyContentType); 
        }
        
        request.setHeader('Authorization', 'Bearer ' + sid ); //UserInfo.getSessionId());
        request.setHeader('ACCEPT', responseFormat);
        
        return request;
    }
      
    private static HttpResponse sendRequest(HttpRequest request) {    
        return new Http().send(request);
    }
    
    private static Response buildResponse(HttpResponse httpRes) {
        Response restRes = new Response();
        
        restRes.status = httpRes.getStatus();
        restRes.statusCode = httpRes.getStatusCode();
        restRes.body = httpRes.getBody();
        
        return restRes;
    }

    public class Response {

        @AuraEnabled
        public String status { get; set; }
        
        @AuraEnabled
        public Integer statusCode { get; set; }
        
        @AuraEnabled
        public String body { get; set; }
    }
}