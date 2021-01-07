cd ./template
export PUBLIC_URL=""
yarn build 
cp ../_redirects ./build/_redirects
cd ./build
netlify deploy --prod
