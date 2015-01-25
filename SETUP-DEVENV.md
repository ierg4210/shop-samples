Setting up Development/Runtime Environment
====================
We need to install the Amazon Elastic Beanstalk CLI and Node.js for development

## Preparing a virtual environment
Check if python is already installed (see the version # returned)
```
$ python --version
Python 2.7.8 
```
> If not, install python if needed: https://www.python.org/downloads/

Check if virtualenv is already installed (see the version # returned)
```
$ virtualenv --version
1.11.6
```
> If not, install virtualenv by ```$ sudo pip install virtualenv ```

Create a virtual environment for local development
```
$ virtualenv "local-dev-env"
New python executable in local-dev-env/bin/python2.7
Also creating executable in local-dev-env/bin/python
Installing setuptools, pip...done.
```

Activate the newly created virtual environment (remember the first dot)
```
$ . local-dev-env/bin/activate
(local-dev-env) $ 
```
> You'll notice your virtual environment's name in front of your command line. 

> To quit the virtual environment: ```(local-dev-env) $ deactivate```

> Notice that a new folder "local-dev-env" will be created storing the python packages. *Never commit them into git to save space.* Your remote environment don't need anything you just installed to run. So, exclude this folder from git's control by: ```$ echo "local-dev-env/*" >> .gitignore```


## Install the required packages under the virtual environment

Install "awsebcli" (management and deployment tool for Beanstalk) and "nodeenv" (tool to install "Node.js")
```
(local-dev-env) $ pip install awsebcli nodeenv
(message truncated here to save space...)
Successfully installed awsebcli nodeenv
Cleaning up...
```
> *pip* is a package management tool to help resolve and install any required dependencies. 

Now, install "Node.js" using "nodeenv"
```
(local-dev-env) $ nodeenv -p
 * Install node (0.10.35) ... done.
 * Appending data to /Users/adon/projects/ierg4210/shopXX/test/local-dev-env/bin/../bin/activate
```
> This can take up to 5 minutes

Check if "awsebcli" is successfully installed
```
(local-dev-env) $ eb --version
EB CLI 3.0.10 (Python 2.7.8)
```
Check if "node" is successfully installed
```
(local-dev-env) $ node --version
v0.10.35
(local-dev-env) $ npm --version
1.4.28
```
> Remember: Once you leave the virtual environment (closing terminal/window/PC), you'll need to run the activation command again (i.e., ```$ . local-dev-env/bin/activate```)  in order to use ```node```, ```npm```, and ```eb```
