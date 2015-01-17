# Setup

Prerequisite: install GitHub adn enable its Command Line Interface utilities.
https://git-scm.com/downloads

Create a directory to store your source code locally
```
mkdir shopXX
```

Enter the directory
```
cd shopXX
```

Initialize the current directory with git setup
```
git init
```

Configure Username and Email for this repository 
```
git config user.name your_name
git config user.email email@example.com
```

Configure the remote repository locations
```
git remote add origin https://github.com/ierg4210/shopXX.git
git remote add shop-samples https://github.com/ierg4210/shop-samples.git
```
> Here, *origin* belongs to you, whereas *shop-samples* are controlled by the teaching team.

Finally, verify your settings
```
git config -l
```

# Getting Started

Now, inside your local directory, create a simple README.md file
```
echo "# shopXX" > README.md
```
> This is equivalent to put ```# shopXX``` into a new file named README.md. You may need to manually do it with a Windows machine.

Take a look on what was changed since your last commit
```
git status
```
> Do this anytime you're curious on what was added. 

Add all changes for the upcoming commit
```
git add -A
```
> You may thereafter use ```git add README.md``` instead to explicitly add each file you want, so as to avoid adding accidential changes.

> Learn from https://help.github.com/categories/manipulating-files/ for additional commands/options such as using ```git rm``` to undo changes.

Commit the changes, with a description on what you did
```
git commit -m "Added README.md"
```

Push/Upload your changes to the master branch of your remote private repository
```
git push --set-upstream origin master
```
> (p.s. You might be prompted for your github username and password)

> So, you've successfully added, committed, and pushed your changes to your remote repository. Verify this by visiting https://github.com/ierg4210/shopXX, which shows your remote contents.

List out all branches, and your current working one.
```
git branch -a
```
> The arterisk (*) indicates your current working branch. Use this command whenever you're unsure which branch you're working on.

Pull/Download the phase 1 sample code from the teachers' remote repository, "shop-samples"
```
git pull shop-samples phase1
```
> You'll be prompted to enter a commit message to explain the merge. Using the given one (with a save) will do. 

> In case there're any conflicts with your own files, resolve them. See below for reference.
[https://help.github.com/articles/resolving-a-merge-conflict-from-the-command-line/]

> Be reminded that the changes introduced from the *shop-samples* are reflected only in your local directories before you **push** them to your remote repository!

## Assignment Submissions
Remember to commit all your changes to the master branch, and optionally push them to your remote called origin.

Make sure you switch to the master branch:
```
git checkout master
```
Then, branch out "phaseY" from the master branch, and push it to your remote again:
```
git checkout -b phaseY
git push --set-upstream origin phase1
```
You're now working on the phase1 branch (Use ```git branch``` to verify). So, you may like to switch back to your master branch to continue your work (add/commit/push new changes):
```
git checkout master
```
In case you want to update phase1 with changes you just made to master: 
```
git checkout phase1
git merge master
```
> You check the results with ```git status```. Resolve the conflicts, if any. 
Then push the changes to your remote using ```git push```.

## Help yourself
Help yourself with explantions on the commands you need 
```
git [command] --help
git add --help
```

