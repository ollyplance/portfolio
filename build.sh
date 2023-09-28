#!/bin/sh
ng build
cd docs
cp index.html 404.html
echo ollylance.com > CNAME