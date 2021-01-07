rm -r deploy


cd ./template
export PUBLIC_URL=""
yarn build 
mv ./build ../deploy

cd ./frontend
export PUBLIC_URL=""
yarn build
mv ./build ../deploy/app

cp ../_redirects ./deploy/_redirects


cd ..
netlify deploy --prod --dir=deploy