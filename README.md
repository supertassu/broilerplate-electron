# Tassu's Electron Boilerplate

A boilerplate for Electron and React, utilizing AVA and XO for testing and code style.
This is a grab-and-go style starter kit for any electron project for me.

## Setup & usage

```bash
# setup
git clone https://github.com/supertassu/broilerplate-electron project-name
cd project-name
rm -rf .git
npm install

# usage
npm run dev # starts webpack in watch mode, starts electron and starts xo and ava in watch mode
npm run build && npm test && npm start # builds files, runs tests and electron app
```
