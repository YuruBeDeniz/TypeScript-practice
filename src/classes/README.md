1. mkdir classes directory
2. tsc --init to initate to initialize Typescript
3. npm init -y --> so i have my package.json
4. npm install lite-server  --> to run our code, auto re-load
5. touch index.html
6. touch src dist
7. in index.html: write -->
<!-- <script src="./dist/index.js"></script> -->
(i will put all my code to index.ts but it will be converted in index.js)
then go to tsconfig.json & uncomment outDir -->
add: outDir: './dist'
8. tsc -w --> to watch
9. go to package.json:
delete test in scripts and add:
"start": "lite-server" 
10. npm start