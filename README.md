# SM_Calendar Dev guide

#### Running the Node Backend app 

- Install Node. It comes with npm installed so you should have a version of npm. However, npm gets updated more frequently than Node does, so you'll want to make sure it's the latest version.
For this run ```npm install npm@latest -g```
- Run ```npm install nodemon -g``` and ```npm install mongodb -g``` and  ```npm install pm2 -g```
- Run from /node folder ```npm install```
- For development environment type  ```npm run development```
- For production environment ```npm run production```
- Your server is up on http://localhost:3000/
- pm2 start appNode.js

#### Migrations
##### Creating migrations
Run command
 ```mm create --config config/mm.json MIGRATION-NAME```
##### Running migrations
Run all migrations by simply calling
```mm``` or ```mm migrate```
## SM Calendar Facebook APP's

#### SM_Calendar_Dev
    - Version: v2.8
    - Application ID: 616491011878896.
    - Application secret key: 32a35e56a56ba362a094b99f74a43b22.
 
#### SM_Calendar_Staging
    - Version: v2.8
    - Application ID: 685850151568055.
    - Application secret key: 57527fb01731103183d3ba6f7fa20aca.
 
#### SM_Calendar_Production

    - Version: v2.8
    - Application ID: 225152751288998.
    - Application secret key: f392e8692697413b39f4ef3820a00177.
 
#### SM Calendar Odnoklassniki APP's

#### SM_Calendar_Dev

    URL https://ok.ru/app/1249955328
    - Application ID: 1249955328.
    - Application public key: CBAPMBILEBABABABA.
    - Application secret key: 15D2C791612E8F9CF36E9F2E.
 
#### SM_Calendar_Staging

    URL https://ok.ru/app/1250237184
    - Application ID: 1250237184.
    - Application public key: CBAMBGILEBABABABA.
    - Application secret key: E6DF115E8D7A9753C4DEBD14.

#### SM_Calendar_Production

     URL https://ok.ru/app/1250236928
    - Application ID: 1250236928.
    - Application public key: CBALBGILEBABABABA.
    - Application secret key: D25416006F947762F3967B8D.

# API Documentation

   

### Authentication Routes   
 
##### [POST] /register   
 
##### [POST] /authenticate  
 
##### [POST] /forgot  
 
##### [GET]  /reset/:token  
  
##### [POST] /reset/:token 
 

## Media Files Routes
##### [Get all media files of a page group 
##### [GET] /smmediafile/:pageGroupId/ query params /limit=?page=? 
##### [Upload a media file to page group with url
##### [POST] /smmediafile/:pageGroupId/url
##### [Upload a media file to a page group
##### [POST] /smmediafile/pageGroupId
##### [DELETE] /smmediafile/:id
##### [Delete a media file by id

### SMUser routes

##### [GET] /me', smUserRoute.getCurrentSMUserInfo
##### [GET] /smusers', smUserRoute.getSMUsers
##### [GET] /smuser/:id', smUserRoute.getSMUserInfoById
##### [PUT] /smuser/setting/:id/profile', directory.avatar, smUserRoute.uploadMediaFile.single('avatar'), smUserRoute.updateMySMUserInfo);

### SMPost routes

##### [GET] /smposts, .getSMPosts
##### [GET] /smpost/:id', .getSMPostById
##### [POST] /smpost/scrape/url/:pageGroupId', .scrapeUrl
##### [PUT] /smpost/:id/state', .changeStateSMPost
##### [PUT] /smpost/:id', .updateSMPost
##### [PUT] /smpost/:id/approve', .approveOrDenySMPost
##### [DELETE] /smpost/:id

### SMPage routes

##### [GET] /smpage/:id', smPageRoute.getPageById
##### [POST] /smpage/:id', smPageRoute.createPage
##### [POST] /smpage/ok/:id', smPageRoute.createOdnoPage
##### [POST] /smpage/:id/smpost', smPostRoute.addNewSMPostToSMPage
##### [POST] /smpage/token/:id/facebook', smPageRoute.refreshAccessTokenFacebook
##### [POST] /smpage/token/:id/odnoklassniki', smPageRoute.refreshAccessTokenOdnoklassnikii
##### [DELETE] /smpage/:id', smPageRoute.deletePage

### SMPageGroup routes

##### [GET] /smpagegroup/:id', smPageGroup.getSMPageGroupById);
##### [GET] /smpagegroups/me', smPageGroup.getAllSMPageGroupsOfCurrentUser
##### [POST] /smpagegroup', smPageGroup.createSMPageGroup
##### [PUT] /smpagegroup/:id/permissions', smPageGroup.editPermissions
##### [PUT] /smpagegroup/:id/permissions/delete', smPageGroup.deletePermissions
##### [PUT] /smpagegroup/:id', directory.pageGroupAvatar, smPageGroup.uploadMediaFile.single('pageGroupAvatar'), smPageGroup.updateSMPageGroup
##### [DELETE] /smpagegroup/:id', smPageGroup.deleteSMPageGroup

### SMComment routes

##### [POST] /smpostcomment/:id/smpost', smCommentRoute.addComment);
##### [PUT] /smpost/:id/smpostcomment/:commentId', smCommentRoute.updateComment);
##### [DELETE] /smpost/:id/smpostcomment/:commentId', smCommentRoute.deleteComment);
