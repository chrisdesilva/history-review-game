# [History Heroes](https://historyheroes.netlify.com/)

History Heroes is a React app that allows users to enter questions and answers in a Jeopardy-style format. Designed for teachers to use as a review game, the user can enter 5 categories, each with a beginner, intermediate, and advanced level question. As a History teacher, I named the app History Heroes, but I'm certainly open to any clever cross-curricular name changes.

# Contribute [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

I'd LOVE your help on this project! All are welcome to contribute. You can find current issues under the [issues tab](https://github.com/chrisdesilva/history-review-game/issues). Just find an issue that you'd like to work on, make a comment to say you're taking it on, and get to it. 

**Working on your first Pull Request?** You can learn how from this *free* series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

**Would you rather read than watch videos?** Check out this [article](https://akrabat.com/the-beginners-guide-to-contributing-to-a-github-project/).

## Getting Started

1. Fork the project by clicking the Fork button up at the top of the screen.
2. Clone your fork with `git clone [code-you-copied-from-clone-button]`
3. `cd history-review-game` to make sure you are in the right directory
4. Add an `upstream` remote for keeping your local repo up-to-date:
  > `git remote add upstream git@github.com:chrisdesilva/history-review-game.git`
5. Run `npm install` to install project dependencies
6. `cd client` and run `npm start` to start your dev environment 
7. `cd ..` to go back to the root, then `cd server` to go into the server directory. `node server.js` to start the server.
8. Begin making magic

## Creating a New Pull Request
1. Make sure you are on the `master` branch and have pulled the latest changes:
  `git checkout master && git pull upstream master`
2. Install any new dependencies: `npm install`
3. Create a new branch off of the `master` branch for the issue you are working on:
  `git checkout -b [new-branch-name]`
  Make sure your branch name relates to the issue. For example, if your issue is "Add a login page", your branch name could be `add-login-page`.
4. Make your changes. Be sure to check for any errors and address them as they come up.
5. Add and commit your changes: `git add [file-name] && git commit -m [your-message]
  Use present tense with your commits ("add login component" instead of "adds" or "added").
6. Push your branch to your fork: `git push -u origin [branch-name]`
7. Open a new pull request (PR) against the `master` branch from your fork using the GitHub user interface.

