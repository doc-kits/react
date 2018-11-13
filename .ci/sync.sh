#!/bin/sh

setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

sync_dev_branch() {
  git remote -v
  git branch
  git checkout master
  git pull origin master
  git checkout dev
  git merge master
  git push origin dev
}

setup_git
sync_dev_branch
