# Demo_project
1.Reading txt File from Spring boot  
2.Parsing txt file with name, date, color, company  
3.Wrap the object and put in to ArrayList.  
4.Using HashMap <String, ArrayList>, Color as key, ArrayList with object as value.  
5.Using Angular to read all the JSON File and perform in the frontend.  

## Running Backend
 1. Clone project 
Run `git clone https://github.com/xjapanseikima/Demo_project.git`
 2. Change to directory 
`cd Demo_project`
 3. build package 
`mvn clean package`
 4. change to target directory 
`cd target`  
 5. ~~!!!!!!(Important) please move the resources from the Demo_project/src/main to the target folder~~  Update with a new maven build
 6. running jar. 
`java -jar demo-0.0.1-SNAPSHOT.jar`

## Running frontend
1. Install npm via this url
https://nodejs.org/en/download/
2. Install Angluar CLI via npm 
`npm install -g @angular/cli`
3. Install Angurlar package
`npm install --save-dev @angular-devkit/build-angular`
5. Change directoy to Angular project package (the package called app which is under root file) 
`cd app`
5.  Build the project 
`ng build`
6. change to the dist/app 
`cd dist/app`
7. run the frontend 
`ng serve`
#  (&#x1F534;) <span style="font-size:larger;">Never used force push again. Almost ruin my whole project by this mistake!</span>




## Stop all process on 8080 port
`kill $(lsof -t -i:8080)`
