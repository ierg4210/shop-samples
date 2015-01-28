Setting Amazon Elastic Beanstalk for deployment
==============

Prerequisite 1: You're expected to have installed EB CLI v3.0 or up using virtualenv, as described in [SETUP-DEVENV](SETUP-DEVENV.md)
Prerequisite 2: You're expected to have initialized a npm project, as decribed in [SETUP-DEVJS](SETUP-DEVJS.md)
```
(local-dev-env) $ eb --version
```

Initialize EB with these configurations:
- Region: ap-southeast-1 : Asia Pacific (Singapore)
- Application: [ Create new Application ]
- Application Name: shopXX
- Using Node.js? y
- Do you want to set up SSH for your instances? y
- keypair: [ Create new KeyPair ]
- keypair name: aws-eb
- keypair passphase: ********
- kerpair same passphrase: ********
```
(local-dev-env) $ eb init
```
> Your keypair is generated at ~/.ssh/aws-eb (secret key) and ~/.ssh/aws-eb.pub (public key)
> Remember to keep especially your secret key safe. (Many students lost it and could no longer access the VM instances anymore.) 

Create the remote environment for deployment
```
(local-dev-env) $ eb create
```

Open the application URL in a browser, and you will see your "Hello World" application deployed remotely.
```
(local-dev-env) $ eb open
```

Check your settings using the Web Interface
```
(local-dev-env) $ eb console
```

Later you'll improve your app. Deploy your latest committed changes of the current branch to beanstalk
```
(local-dev-env) $ eb deploy
```
> Remember any unstaged changes will not be uploaded and deployed. 
> So, ```$ git add``` and ```$ git commit``` your changes before running ```$ eb deploy```.

> On the other hand, if you expect to deploy your master branch, remember to switch by running ```$ git checkout master``` before ```$ eb deploy```.

SSH into an EC2 instance for debugging purpose
```
(local-dev-env) $ eb ssh
```
