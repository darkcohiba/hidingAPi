## Test file for hiding API keys

1. Creating a Config.js script
    - Create a .gitignore file
    - Create a config.js file
    - Create a index.js file
    - Create a index.html file
    - add your API key as a variable to your config.js file
    ```
     const APIKEY = '123456789' 
    ```
    - At the bottom of your body in your HTML file add a script tag for Config.js and index.js
    ```  
    <script src="config.js"></script>
	<script src="index.js"></script> 
    ```
    - now you will be able to console.log your API key in your index.js file
    - finally add config.js to your .gitignore file
    - commit and push your project to github with your API key hidden!