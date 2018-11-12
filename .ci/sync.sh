#!/bin/sh

setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

update_dev_branch() {
  git checkout master
  git pull origin master
  git checkout dev
  git merge master
  git push "https://${GH_TOKEN}@github.com/doc-kit/ui.git" dev > /dev/null 2>&1
}

setup_git
update_dev_branch
