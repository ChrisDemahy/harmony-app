rm -r deploy
mkdir deploy
cp ./_redirects ./deploy/_redirects
cd ./frontend
export PUBLIC_URL="/app"
yarn build
mv ./build ../deploy/app
cd ../template
export PUBLIC_URL="/home"
yarn build 
mv ./build ../deploy/home
cd ..
netlify deploy --prod --dir=deploy