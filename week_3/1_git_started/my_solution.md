## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  

<b>#### add</b>
Syntax: git add [FILE or DIRECTORY]
Adds the files to the stage where git is ready to commit them and then push them to your online repository.

Follow up by using git commit -m "String explaining the changes to be committed" and git push to push them to your online repository.

<b>#### branch</b>
Syntax: git branch [New Branch name]

Allows you to create a new branch off of your master branch.

<b>#### checkout</b>
Allows you to switch between branches that you're tracking via git in a directory. You must be located in the directory on command line to use git checkout and switch back and forth between your branches.

<b>#### clone</b>
Git clone handles a number of proceeding handles, but all of them help you copy a repository into a new directory. Clone not only allows this, but it alos lets you create a remote tracking branch for each branch in a cloned repository (-r)

<b>#### commit</b>
Records the changes you've made via git add to the branch that you're on. It's you're way of telling git "Okay, Git, I am on [x] branch and I intend to add [y] changes," where [x] is the name of the branch you're on and [y] are the files you've added via 'git add'

<b>#### fetch</b>
Fetch allows you to sync your master branch with the git fetc

<b>#### log</b>
This really useful command allows you to view the commit history! This is one of the most powerful tools on git because it shows you a list of all the things you've done/changed/committed. 

<b>#### merge</b>
Branch merging allows you to combine the changes you make to a new branch with the master branch. It keeps all the new commits and merges them with the informatino from the parent commits. 

Syntax: git merge [current branch] [merging branch]

<b>#### pull</b>
Like push (below), this allows you to pull the changes you've made on a different version of your repository down to your local computer. In simpler terms, however, git pull differs from git fetch in that it pulls down the changes and immediately merges them. You would do a git pull to bring a local branch up-to-date with its remote version, while also updating your other remote-tracking branches.

<b>#### push<b>
This allows you to push your commits to GitHub, assuming you've gone through git config to setup your user login and password so that it's cached.

<b>#### reset</b>
Resets the current HEAD to the specified state. This is a phenomenal article about RESET and git in general: http://git-scm.com/blog. But essentially, git reset moves what HEAD points to and directly changes ths SHA of the reference itself.

<b>#### rm</b>
git rm removes a file or directory from the working tree and the index.`

<b>#### status</b>
Allows you to check the status of your repository to see which files it houses, which changes need to be committed, and which branch of the repository you're working in.

<b><u>Other Useful Git Commands:</b></u>

#### init
Initializes git in the current directory.


git config —-global user.name "Your Name Here"
git config —-global user.email "your_email@youremail.com"

Credential Helper so that user login and passwords are cached:

curl -s -O \
http://github-media-downloads.s3.amazonaws.com/osx/git-credential-osxkeychain
chmod u+x git-credential-osxkeychain


<b>## Release 4: Git Workflow</b>

- Push files to a remote repository
- Fetch changes
- Commit locally

<b>## Release 5: Reflection</b>

I have been using git from command line since I started DBC because I wanted to be prepared for this day! Muahaha! But actually this session was incredibly informative and useful. I feel like I have a MUCH better grasping of branches and I am excited to fork my own branch for this week's work then merge it with my master repo at the end. I want to get in the habit of tracking changes and branches regularly.

Also, these were some great resources:

http://nathanhoad.net/git-amend-your-last-commit
</br>
http://longair.net/blog/2009/04/16/git-fetch-and-merge/
</br>
http://stackoverflow.com/questions/292357/whats-the-difference-between-git-pull-and-git-fetch
</br>
http://git-scm.com/blog