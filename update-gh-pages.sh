#!/usr/bin/bash
cp -r documentation dist/digital-overdose/browser/
git subtree push --prefix dist/digital-overdose/browser/ origin gh-pages
