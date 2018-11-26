#!/bin/sh

setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

# Syncs dev branch even with master after release
sync() {
  git checkout master
  git pull origin master
  git checkout dev
  git merge master
  git push "https://${GH_TOKEN}@github.com/shockits/doc-ui.git" dev > /dev/null 2>&1
}

setup_git
sync
