declare module "@apex/RestRequestCtrl.svrService" {
  export function svrService(param: {path: any, method: any, responseFormat: any, bodyContent: any, bodyContentType: any, sid: any}): Promise<any>;
}
declare module "@apex/RestRequestCtrl.svrGetSID" {
  export function svrGetSID(): Promise<any>;
}
