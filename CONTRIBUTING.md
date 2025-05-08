## Prerequisites

1. [Install git](https://git-scm.com/)
2. [Install node](https://nodejs.org/)
3. [Download mkcert](https://github.com/FiloSottile/mkcert)

## Forking, cloning and installing locally

1. Login to GitHub
2. Go to the [FSH repository](https://github.com/fallenswordhelper/fallenswordhelper)
3. Click on the Fork button near the top right
4. In your fork, click the Code button and copy the URL shown
5. Clone and install
```
git clone <your repo URL>
cd fallenswordhelper
npm i
```
## Preparing the dev server

1. Create certs
```
mkcert -install
mkcert localhost 127.0.0.1 ::1
```
2. Copy localhost+2.pem and localhost+2-key.pem to the root of your cloned repo
3. Rename localhost+2.pem to cert.pem
4. Rename localhost+2-key.pem to key.pem
5. If you are using Firefox on Windows follow [these instructions](https://ddev.readthedocs.io/en/stable/#windows-and-firefox-mkcert-install-additional-instructions)

## Running and using the dev server

1. Start dev server
```
npm run watch
```
2. Install local FSH from [https://localhost:9966/dist/Releases/watch/fallenswordhelper.user.js](https://localhost:9966/dist/Releases/watch/fallenswordhelper.user.js)

