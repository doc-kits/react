#!/bin/sh

setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

setup_remote() {
   git remote add upstream "https://${GH_TOKEN}@github.com/doc-kit/ui.git" > /dev/null 2>&1
}

sync_dev_branch() {
  git branch
  git remote
  git checkout origin/master
  git pull origin origin/master
  git checkout upstream/dev
  git merge origin/master
  git push upstream dev
}

setup_git
setup_remote
sync_dev_branch
