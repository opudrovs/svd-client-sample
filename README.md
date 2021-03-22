# svd-client-sample

This project uses React, Next.js (framework for adding server-side rendering to React apps), and React Bootstrap.

## How to Run the App

Please install or update `npm` command-line utility.

`cd` in Terminal to the app's root directory (where `package.json` file is located) and run `npm install` to install the packages.

To run the development build (slow, with debugging info and hot module reloading on code change), run

```
npm run dev
```

To run the production build, run
 
 ```
 npm run build
 npm start
 ```
 
 or
 
  ```
  npx next build
  npx next start
  ```

Then open `http://localhost:3000/` in your browser.

## How to Export the Static App for Deployment

`cd` in Terminal to the app's root directory and run `npm install` to install the packages.

Run

```
npx next build
npx next export
```

The exported app is placed in the `out` folder and can be deployed.

## How to Test the Exported Static App

Run

```
cd out
npx serve -p 8089
```

Open `http://localhost:8089/` in your browser.

(Alternatively, you can run `npm run serve` from the app's root directory.)

You can enter a different port number. There can be an issue with running the app on port 8080 under macOS.
