# Localization in REACT
## Step 01: Dependencies to be installed:

`1. npm install react-i18next i18next`  
*"i18next" & "react-i18next" are tranlation package*    

`2. npm install i18next-http-backend`   
*The "i18next-http-backend" package loads translation files from the backend server*

`3. npm install i18next-browser-languagedetector`   
*An "i18next plugin" which provide an option for users to switch languages in the frontend while persisting the selected locale in the browser storage. This enables content to display in the preferred language on a subsequent visit.*

`4. npm install js-cookie`  
*We can get the current locale value(ex: selected language) from the storage by installing a package called "js-cookie"*

## Step 02: Some other intial Setup:
- create a configaration file named "i18n.js" in src folder
- Next, import the configuration file in the src/index.js   
`import './i18n';`  
- Create 2 folders - public/locales/bn and public/locales/en. Bangla and English translation JSON file will be here.
-  Open the src/index.js file and use the Suspense component, like so(make sure to import the "Suspense' component):  
```js
ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
``` 



