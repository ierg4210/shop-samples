Setting Amazon Elastic Beanstalk for deployment
==============

Prerequisite: You're expected to use EB CLI v3.0 or up
```
(local-dev-env) $ eb --version
```

Initialize EB with some configurations
- Web Server Model
- Node.js
```
(local-dev-env) $ eb init
```

Create the remote environment for deployment
```
(local-dev-env) $ eb create
```

Open the application URL in a browser
```
(local-dev-env) $ eb open
```

Deploy your latest commit of the current branch to beanstalk
```
(local-dev-env) $ eb deploy
```
> Remember any unstaged changes will not be uploaded and deployed. 
> So, ```$ git add``` and ```$ git commit``` your changes before running ```$ eb deploy```.

> On the other hand, if you expect to deploy your master branch, switch to it by running ```$ git checkout master``` before ```$ eb deploy```.

SSH into an EC2 instance for debugging purpose
```
(local-dev-env) $ eb ssh
```
