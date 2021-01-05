#!/bin/bash

npm run build
pkg . --out-path package

rm -rf public/downloads

mkdir public/downloads
mkdir public/downloads/linux
mkdir public/downloads/macos
mkdir public/downloads/windows

cp -r package/tcgox-linux public/downloads/linux/
cp -r package/tcgox-macos public/downloads/macos/
cp -r package/tcgox-win.exe public/downloads/windows/

cp -r node_modules/sharp public/downloads/linux
cp -r node_modules/sharp public/downloads/macos
cp -r node_modules/sharp public/downloads/windows

cp -r node_modules/fsevents public/downloads/linux
cp -r node_modules/fsevents public/downloads/macos
cp -r node_modules/fsevents public/downloads/windows

cd public/downloads
zip -r linux.zip ./linux
zip -r macos.zip ./macos
zip -r windows.zip ./windows

rm -rf linux
rm -rf macos
rm -rf windows

cd ../../
rm -rf package
