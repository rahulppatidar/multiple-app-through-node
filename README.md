# multiple-app-through-node
Serve multiple build app through single node file.

## Uses
* Build the app.
* Create a folder for that app and put build code there.
* Locate that folder's static file path 
* ```app.use("/app1", express.static(path.join(__dirname, "app1/build"))); ```
* Repeate this for each app.
* Now you can navigate to multiple apps using address ```/app1 ``` in address bar.
* Enjoy multiple apps serverd through single file.

This code is running for react app. you can modify this accordingly.

## Contributer
[RahulPpatidar](https://github.com/rahulppatidar/multiple-app-through-node)