## Analyzing News Articles with Natural Language Processing
The objective of this endeavor is to devise a web application enabling users to employ Natural Language Processing (NLP) techniques on articles or blogs sourced from diverse websites. Upon submission of a URL pointing to an article, the application promptly conducts sentiment analysis, leveraging the MeaningCloud API, to glean insights from the article's content.

## Technology Stack
HTML
CSS --> Scss
JavaScript
Node.js
Express.js
Webpack
MeaningCloud API
Jest
Workbox

## Setup Instructions
Ensure that Node.js and npm are installed on your system by executing the following commands in your terminal:
node -v
npm -v
cd <project directory>
git clone <repo>
npm install


# Select appropriate installations based on your development environment
npm i -D @babel/core @babel/preset-env babel-loader
npm i -D style-loader node-sass css-loader sass-loader
npm i -D clean-webpack-plugin
npm i -D html-webpack-plugin
npm i -D mini-css-extract-plugin
npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin

Install the dotenv package: npm install dotenv


 Sign up to get the API key at [meaningcloud.com](https://www.meaningcloud.com/developer/create-account)

Create a new .env file in the root directory of your project.
Populate the .env file with your API key:API_KEY=**************************

## Initiate the project:
npm run build-prod
npm run build-dev
npm  run start: To run server