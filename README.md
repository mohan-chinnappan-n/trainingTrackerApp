#  Training Tracker Application

## Goals

- Show the SFDX packaging concepts
- Show usage info for most of the lightning components


### Demo - ButtonMenu
![buttonMenu demo](img/buttonMenu-demo-1.gif)


```bash

## enable package2 in DEV hub
$ sfdx force:auth:web:login 
Successfully authorized mohan.chinnappan.dh201@gmail.com with org ID 00D1H000000NSUhUAO
You may now close the browser

```

![Enable Package2 in DevHUb](img/dev-hub-enable-p2-1.png)

## Create unlocked package2
$ sfdx force:package2:create -o Unlocked -n "TrainingTracking App 2018.06.18 6:27"
WARNING: The command "force:package2:create" has been deprecated and will be removed in v43.01.0 or later. Use "force:package:create" instead.
Successfully created a second-generation package (package2). 0Ho1H0000004CABSA2 0331H00000025buQAA
=== Ids
NAME                   VALUE
─────────────────────  ──────────────────
Package2 Id            0Ho1H0000004CABSA2
Subscriber Package Id  0331H00000025buQAA



## list the packages
$ sfdx force:package2:list 
WARNING: The command "force:package2:list" has been deprecated and will be removed in v43.01.0 or later. Use "force:package:list" instead.
=== Package2 Packages [1]
NAMESPACE PREFIX  NAME                                  ID                  SUBSCRIBER PACKAGE2 ID  DESCRIPTION  OPTIONS
────────────────  ────────────────────────────────────  ──────────────────  ──────────────────────  ───────────  ────────
                  TrainingTracking App 2018.06.18 6:27  0Ho1H0000004CABSA2  0331H00000025buQAA                   Unlocked



## Update the version in the sfdx-project.json

vi sfdx-project.json 

$ cat sfdx-project.json 
{
  "packageDirectories": [
    {
      "path": "force-app",
      "id":"0Ho1H0000004CABSA2",
      "versionName": "Training Tracking App",
      "versionNumber": "1.0.0.NEXT",

      "default": true
    }
  ],
  "namespace": "",
  "sfdcLoginUrl": "https://login.salesforce.com",
  "sourceApiVersion": "43.0"
}


## Create the version
$ sfdx force:package2:version:create  -i 0Ho1H0000004CABSA2
WARNING: The command "force:package2:version:create" has been deprecated and will be removed in v43.01.0 or later. Use "force:package:version:create" instead.
Package2 version creation request is InProgress. Run "sfdx force:package2:version:create:get -i 08c1H0000004CAGQA2" to query for status.

# create status
$ sfdx force:package2:version:create:get -i 08c1H0000004CAGQA2
WARNING: The command "force:package2:version:create:get" has been deprecated and will be removed in v43.01.0 or later. Use "force:package:version:create:report" instead.
=== Package2 Version Create Request
NAME                            VALUE
──────────────────────────────  ──────────────────
ID                              08c1H0000004CAGQA2
Status                          InProgress
Package2 Id                     0Ho1H0000004CABSA2
Package2 Version Id
Subscriber Package2 Version Id
Tag
Branch
Created Date                    2018-06-18 06:36
Installation URL

## Success

$ sfdx force:package2:version:create:get -i 08c1H0000004CAGQA2
WARNING: The command "force:package2:version:create:get" has been deprecated and will be removed in v43.01.0 or later. Use "force:package:version:create:report" instead.
=== Package2 Version Create Request
NAME                            VALUE
──────────────────────────────  ─────────────────────────────────────────────────────────────────────────────────
ID                              08c1H0000004CAGQA2
Status                          Success
Package2 Id                     0Ho1H0000004CABSA2
Package2 Version Id             05i1H0000004CAGQA2
Subscriber Package2 Version Id  04t1H000000uy0ZQAQ
Tag
Branch
Created Date                    2018-06-18 06:36
Installation URL                https://login.salesforce.com/packaging/installPackage.apexp?p0=04t1H000000uy0ZQAQ


```
