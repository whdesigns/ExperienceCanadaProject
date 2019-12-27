# Coding Style Guide Comparisons and Choices For 
![](imgs/logo.png)


## HTML5

### Good example of an HTML5 boilerplate

###### Below is an example of what an HTML5 boilerplate should look like. This boilerplate must be included in every HTML5 page for my code to execute effectively and link to my external files e.g. CSS or JavaScript. 
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <link rel="stylesheet" type="text/css" href="css/main.css">
   <title>HTML5 Basics</title>
</head>
<body>
</body>
</html>
```


### Bad example of an HTML5 boilerplate
###### If the boilerplate is a skeleton e.g. devoid of content it will run on most browsers, but it will not link to any of my external files, nor will it be responsive when viewed on a smaller device than a desktop e.g. a mobile. It is essential that my finished project includes a viewport meta tag, which this boilerplate does not include to ensure the page is responsive, as well as another meta tag to make the site compatible with Microsoft Edge. (More on this further down).
```
<!DOCTYPE html>
<html lang="en">
<head>
    <title>HTML5 Basics</title>
</head>
<body>
</body>
</html>
```


### Good example of a comment
###### This is the correct syntax for an HTML5 comment.
```
<!--This is a comment!-->
```


...### Bad example of a comment
###### This is NOT the correct syntax. This is often used to comment in programming languages such as JavaScript and Swift.
```
//This is NOT a comment!
```

### Good example of an ie=edge meta tag
###### This tag is frequently found in head tags of many HTML5 boilerplates and what it does is ensure that my code is compatible to run on Microsoft Edge. 

```
<meta http-equiv="X-UA-Compatible" content="ie=edge">
    
```


### Bad example of an ie=edge meta tag
###### It is never a good idea to push content too close together and because it looks like "meta" and "http" are both one word this will prevent the meta tag from functioning. See example below:
```
<metahttp-equiv="X-UA-Compatible" content="ie=edge">
    
```

### Good example of the viewport meta tag
###### The viewport is always stored in the head tags, often above the title. Its purpose is to make the website responsive on smaller devices e.g. mobiles. This will be essential, since that is the main focus of this project.
```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
    
```


### Bad example of the viewport meta tag
###### If there are not inverted commas around the word "Viewport" and between the "width and 0" the meta tag will not function, however, this will not prevent the site from working as a whole, but it won't be responsive on smaller devices, which will defeat the whole purpose of this project. 
```
    <meta name=viewport content=width=device-width, initial-scale=1.0>
    
```

### Good example on how to structure links
###### Below are some examples of how to structure links which connect to external documents e.g. CSS and JavaScript files. It is good practice to place these links in the head tags, often above the title, which is my intention for this project.

```
 <link rel="stylesheet" type="text/css" href="css/main.css">
    
```
```
 <script src="js/form.js"></script>
    
```


### Bad example on how to structure links
###### If the links are missing inverted commas in specific places they will not function correctly. Inverted commas must always be around the word "stylesheet" and the file in which the page is stored, as well as the page itself. Furthermore, if the file is stored in a seperate folder with an appropriate name like css or js, ensure it is linked, otherwise the file will not connect. This can be done by using css/style or js/form.js. See image below. 
###### More information on folder structure in the folders section of this style guide. 

```

    <link rel=stylesheet type="text/css" href=css/main.css>
    
```
### Headers
###### Headers are a vital part of any HTML document and will be used frequently throughout this project. Their purpose is to present attention-grabbing headlines or Call-To-Actions for the user. They come in six different sizes, with h1 being the largest and h6 being the smallest. See examples below.  
```

<!--Different Headings-->
<h1>Header Tag</h1>
<h2>Sub Header</h2>
<h3>Small Heading</h3>
<h4>Smaller Heading</h4>    
<h5>Much Smaller Heading</h5>
<h6>Smallest Heading</h6>
```
![](imgs/Executed_Headers.png)

### Good example of a paragraph
###### Many paragraphs will be used throughout this project and it is important I use the correct p tags. Without these tags the code will run and cannot be modified, unless I am changing the body as a whole. This is because it has nothing to refer to e.g. tags, divs, classes or IDs.  

```

<p>How to write an HTML paragraph</p>
```


### Bad example of a paragraph
###### As previously mentioned p tags should always be used in HTML5. It is poor practice not to and will irritate other developers if they work on this project in the future, because they'd have to spend time rectifying the issue instead of expanding on the work. I will make sure to do this for the development phase of this project and test everything before deployment.

```

How NOT to write an HTML paragraph
```


### Good examples of images
###### Images are essential for any website and this one will be no different. The images that will be used throughout this project are all royalty free and come from [Unsplash](https://unsplash.com/) and [Pixabay](https://pixabay.com/). It is good practice to ensure each image is named something recognisable and is stored in its own separate folder to reduce clutter. An example of how the code should be written can be seen below: 
###### More information on folder structure in the folders section of this style guide. 

```

<img src="imgs/nameOfIMG.png" alt="nameOfImage">
```

### Bad examples of images
###### If the image is not linked to an associated folder then the content will not be displayed, which could be detrimental to the user experience of this project. All images must be stored in a separate folder with a recognisable name e.g. imgs. If this is not the case then a lot of clutter will occur and the file size will increase dramatically, which may cause the site to run slower than it otherwise would. 
```

<img src="nameOfIMG.png" alt="nameOfImage">
```

### Good examples of unordered lists
###### An unordered list is non-numerical and displayed in bullet points. It includes opening and closing ul tags and inside these tags are opening and closing li tags, which are used to list each item. Below is what an unordered list should look like in HTML5. I am unsure what I'd use a list for in this project, but I thought it best to include it here just in case.
```

<ul>
	
	<li>HTML</li>
	<li>CSS</li>
	<li>JavaScript</li>

</ul>
```
### Bad examples of unordered lists
###### It is never a good idea to use p tags in a list, because it will not create an unordered list and may present problems at a later stage, when trying to style the list in CSS.
```

<ul>
	
	<p>HTML</p>
	<p>CSS</p>
	<p>JavaScript</p>

</ul>
```

### Good examples of ordered lists
###### This is very similar to an unordered list, only ordered lists are numerical. Instead of ul tags ol tags are used.
```

<ol>
	
	<li>HTML</li>
	<li>CSS</li>
	<li>JavaScript</li>

</ol>
```


### Bad examples of ordered lists
###### Like unordered lists, it is never a good idea to include p tags. The correct syntax is li, to list items inside an ordered list. It is a good idea to leave sufficient spacing too, so the code is more organised. 
```

<ol>
	
	<p>HTML</p>
	<p>CSS</p>
	<p>JavaScript</p>

</ol>
```


### What is a div?
###### A div is essentially a synonym for "container". It is used to hold pieces information e.g. paragraphs, headings and images. Often times a div will have an ID or a Class. This is so the content can be styled and realigned in CSS at a later stage. 
```
<div>

	<p>A div is a container that holds content</p>

</div>
```

### How will divs be used in this project?
###### Many divs will be used throughout this project, because a great deal of emphasis will be placed on styling the content to ensure it is responsive and user friendly. Divs will be used on every HTML page to ensure the content is clearly structured and nothing is out of place.

### What are IDS?
###### IDs are used to change certain elements within a div. Many IDs will be used throughout this project to make it easier to style when applying external CSS.

### What are Classes?
###### Classes are similar to IDs, but while IDs change a certain part of a div e.g. the colour or the position of an article, classes are used to change the entire content and layout of the div. In a nutshell, IDs change a component of the div and a class changes everything inside a div. 


### Good examples of IDs and Classes
###### An ID or class must always be placed in a div, so that it can be styled in CSS at a later stage. Furthermore, the name of the ID or Class must be clear and recognisable, otherwise confusion will occur later on if another developer ever decides to add to this project. This is something that I will certainly apply with this project. 
```
<!--IDs-->
<div id="exampleID">

</div>
```
```
<!--Classes-->
<div id="exampleClass">

</div>
```


### Bad examples of IDs and Classes
###### IDs and Classes must never be called the word "ID" or "Class", because this may lead to confusion later on when styling the div and syntax issues may also occur if HTML doesn't recongise it as a valid name. If it is named something simple and associated with it's purpose then it will easier to remember and work with later on, not just for me, but anyone else, because they will understand what it relates to. 
```
<!--IDs-->
<div id=id>

</div>
```
```
<!--Classes-->
<div id=class>

</div>
```

## CSS3 

### Good example of colours
###### I will use a total of three colours throughout this project. This will keep the site clean and consistent.


### What colours will this project use?
###### This project will adhere to a clean white template, so the main colours will be as follows: 
###### #ffffff - White
###### #000000 - Black
###### #ff0000 - Red - Only used for the send button on the Contact Us page.
![](imgs/colours.png)
![](imgs/red.png)

### Bad example of colours
###### If the site has too many colours e.g. more than three the page will start to look too convolted and result in a poor user experience.


### Good examples of font
###### Calibri, Helvetica, Roboto, and Sans-Serif are all great and popular fonts to use. However, like colours only one should be used and adhered to for the duration of the project. 
![](imgs/calibri.png)
![](imgs/helvetica.png)
![](imgs/open_sans.png)
![](imgs/roboto.png)

### What font will be used and at what size?
###### This project will use 12px for paragraphs and the font will be Open Sans. The shades applied will be as follows:
###### Regular
###### Bold
![](imgs/open_sans.png)
![](imgs/open_sans_bold.png)


### Bad examples of font
###### If there are multiple sizes of font e.g. more than two then this will lead to a negative experience for the user. The same logic also applies to the fonts themselves, which is why Open Sans is going to be the only one utilized.  


### Good example of buttons
###### This project will have a plethora of buttons, most of which will be used on the Wildlife page, however, all of them will need to be styled in order for them to stand out and grab the user's attention. This project's buttons will incorporate the following:
###### Background colour - #ffffff
###### Font colour - #000000
###### Border - #000000
###### Border-radius - 25px
###### Height -20px
###### Width - 160px
![](imgs/normal_btn.png)


### Bad example of buttons
###### If the button has too much width or height or if it is not inline with the previous items then all consistency will be lost. All buttons, must also have links. If no href is connected or if the link misdirects the user then this will lead to a potential loss of traffic.   
![](imgs/poor_btn.png)



### Good example of button hover effects
###### Most sites utlize hover effects and this project will be no different. Whenever the user hovers over a button it will automatically turn from white to black, with white text. This will work for all buttons, including the red send button on the Contact Page. 
![](imgs/yes_hov.png)
![](imgs/send_contact.png)


### Bad example of button hover effects
###### If the background is changed to black, but I neglected to change the font colour to white for the hover effect then the user will be unable to view the font. The workability of all buttons will be tested before launching the product. 
![](imgs/not_hov.png)


### Good example of padding
###### To ensure the content is not too close together padding will be required. Below are the following methods which will be used in the project:
###### Padding-top - to increase space from above 
###### Padding-bottom - to increase space from below
###### Padding-left - to increase space from the left 
###### Padding-right - to increase space from the right


### Bad example of padding
###### If the spacing is too great some content may appear out of place. The same logic applies if the space is too small. Experimentation will be the key to finding the right balance. 


### Good example of media queries
###### Media queries are arguably the most important aspect of this project, because in order to make this site responsive media queries will need to be used to reconfigure the size for mobiles. No aspects of the content will be cut, however, instead of placing the content in rows, columns will be used so the user can scroll down to view all images and information. The size of the media query, which will be used for this project will have a max-width of 600px, which is the size intended for mobiles. Media queries always begin with what is depicted in the image below. The only thing that changes is the size.
```
@media screen and (max-width: 600px) {

}

```


### Bad example of media queries
###### If the right grid system is not used e.g. Flexbox columns, then the content will look cluttered and stretched across the screen, making the user unable to view all of it. Columns must always be used when creating a media query. Furthermore, I must ensure that the desktop code has a closing bracket first, otherwise that code will be carried over and unnecessary complications will arise. 




## JavaScript

### Javascript datatypes and what they mean
###### There are five dataypes in JavaScript and they are: 
```
//PRIMITIVE JS DATATYPES

//Numbers
4    //Integer
9.3  //Float
-10  //Negative

//Strings
"Hello World"
"43"

//Booleans
True     //Can only be true or false. Used with conditional statements
False

//Null and Undefined
null        //Does not exist
undefined  //Exists but has not been issued a value
```

### Good example of a comment
###### This is the correct syntax for a JavaScript comment.
```
//This is a comment

```

### Bad example of a comment
###### This form of comment is only used in HTML.
```
<!--This is NOT the right comment-->

```

### Good example of forms
###### This will be used on the Contact Us page to ensure the user enters the correct data e.g. name, email, and message. It will also be used to ensure the user cannot press the send button until the necessary information has been inserted into the input boxes. To ensure this happens an alert box will be triggered and read "Please enter at least 5 characters". This will only be triggered if the character count is less than five.
```
// Declaring a function called validateTextbox, which is used on the Contact Page. 
function validateTextbox() {
 
 // Here we are assigning 3 variables. 
 // The variables are equal to the IDs retrieved from the Contact Page e.g. name, email, and message.

 var box = document.getElementById("name");  
 var box2 = document.getElementById("email");
 var box3 = document.getElementById("message");
 
 // An IF statement will be used, to ensure the user types more than 5 characters
 // If the user types less than 5 characters an alert box will be triggered.

 if (box.value.length < 5 || box2.value.length < 5 || box3.value.length < 5) {
 alert("Please enter at least 5 characters!");

return false;

 // The above function will only return false if the user has typed more than 5 characters
 // If the objective has already been achieved the if statement won't be called. 
 
 }
 
 }

```

### Bad example of forms
###### If the code is too close together it may prove difficult to rectify if an error occurs. Another common mistake which occurs is forgetting to include semi-colons or opening/closing brackets. If a semi-colon is not included then the code is unlikely to execute. Likewise, with the brackets. If a bracket isn't closed then the previous piece of code will carry over and inevitably become a jumbled mess and difficult to rectify. Furthermore, if getElementByID is not applied to a variable and assigned a suitable name in the HTML file the code in the JS file will be unable to extract the data. All this results in code that won't function and the user may be confused about where to look to fix this issue. For this reason, I must make sure to thoroughly test this before deployment occurs. 
```
function validateTextbox() {

 var box=document.getElementById("name");  
 var box2=document.getElementById("email");
 var box3=document.getElementById("message");
 

 if(box.value.length< 5|| box2.value.length < 5||box3.value.length< 5) {
 alert("Please enter at least 5 characters!");

return false;

 }
 
 }

```

### Good example of a slider
###### A slider is something that will be used on all pages of this project to demonstrate an aesthetic appearance to the user, but also to keep with consistancy. The slider will require more code than other JS applied on this project, so it is advisable to comment the name or use of the each function so I can refer to them later if I'm confused.   
```
let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;


// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}


// Initiate slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}


// Display previous slide
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}


// Display next slide
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}


// Click left arrow 
arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});


// Click right arrow 
arrowRight.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

//Execute slider initiate function
startSlide();

```


### Bad example of a slider 
###### If nothing is commented on in the slider code a lot of confusion will occur at a later stage. This I am sure of, because the code is quite convolted. It is also advisable that the code has room to breathe and is not pushed together too much.


```
let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}
]
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});
arrowRight.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});
startSlide();

```


### Good example of variables and constants
###### The difference between variables and constants is that variables hold multiple values, which can change over time. However, constants cannot change their values and only store what is initially assigned to them. In this project constants will be used for the sliders and variables will be used for the contact form. See the image below for visual evidence of constants and variables in action. 

```
//VARIABLES

//Variables are containers that store values
//They follow this pattern:

var name = "Will";
var secretNumber = 29;
var isWorking = true;

//The stored value is called by calling name of the variable
var name = "Will";
"hello there " + name    //"hello there Will"

var num = 10;
num + 8 + 10    //28

//Variables can also be updated.
var name = "Jamie";
name = "Tyrion";
```

### Bad example of variables and constants
###### As previously mentioned, if there is insufficient space between the code it may cease to function. I should also be aware of what datatype is being used e.g. strings will require inverted commas and semi-colons will be required for the end of all bits of code in order for it to execute effectively. 

```
var name=Will  	     //String
var secretNumber=29  //Integer
var isWorking=true   //Boolean
```
```
const name=Will  	     //String
const secretNumber=29  //Integer
const isWorking=true   //Boolean
```


### Good example of functions
###### Functions will be used more than any other piece of JS throughout this project. The reason for this is because functions allow us to wrap bits of code up into reusable packages. Functions also help reduce the amount of code, if OOP (object orientated programming) is applied the same function can be written once and then called in multiple areas of the file. 
```
function callAction() {
    console.log("HELLO WORLD");
}

callAction();
```


### Bad example of functions
###### If the code is too close together and missing semi-colons, inverted commas for strings, or brackets the function will fail to execute. This will need to be tested before official deployment occurs. 
```
function callAction {
    console.log(HELLO WORLD)
}
callAction()
```


### Good example of arrays
###### I am unsure whether arrays will be used in this project yet, however, if they are then they will be needed to store multiple items or values. This will depend on what is being executed though.
###### Arrays are indexed starting at 0, after which every slot has a corresponding number.


```
//Arrays let us group data together in lists. See example below:
var friends = ["Cersei", "Tywin", "Jaimie", "Tyrion"];

//Arrays are indexed starting at 0. Every slot has a corresponding number

//These indices can be used to retrieve data
var friends = ["Cersei", "Tywin", "Jaimie", "Tyrion"];
console.log(friends[0])   //"Cersei"
friends[1] + " <3 " + friends[2]  //"Tywin <3 Jaimie

//They can also be updated
var friends = ["Cersei", "Tywin", "Jaimie", "Tyrion"];
friends[0] = "madQueen";
friends[2] = "kingSlayer";

//And add new data
var friends = ["Cersei", "Tywin", "Jaimie", "Tyrion"];
friends[4] = "Lancel";
```


### Bad example of arrays
###### If my array is missing inverted commas the item will not be recognised as a string, nor will it be identified as a number, because they are characters rather than numerical. I must make sure to test the function of the array before deploying the code, should one be used in the development phase. 


```
var friends=[Cersei, Tywin, Jaimie, Tyrion];

```


### Good example of a conditional statement
###### A conditional statement will almost certainly be used to determine the outcome of a user's choice e.g. a range of options for them to choose from. In JavasScript there are three ultimate outcomes, which are an:
###### • IF statement - If the first choice is true then this condition is executed
###### • ELSE IF statement - If the second, third, or any other listed choice is true then this condition is executed. Multiple ELSE IF statements can exist.
###### • ELSE - If the user enters anything else, which is not listed as a choice then this condition is executed.
###### I am unsure if this will be used in the project, but I'd like to try and find a way to include some level of user interactivity.

```
//If the guess is right the if statement will be true

if (guess === secretNumber) {
    alert("Well done! You guessed right.");
}



//If the guess was too high the else if statement will be triggered instead

else if (guess > secretNumber) {
    alert("Too high. Guess again!");
}



//If any other answer is given then the else statement will execute

else {
    alert("Too low. Guess again!");
}

```


### Bad example of a conditional statement
###### As previously mentioned, the syntax needs to be checked to ensure the code runs smoothly. The strings should have inverted commas, each piece of code should have a semi-colon at the end and opening/closing brackets. Furthermore, it is important not to give the user too many choices, because this will result in writing a lot of ELSE IF statements and an overwhelming experience for the user. 


```

if (guess === secretNumber) {
    alert(Well done! You guessed right.)


else if (guess > secretNumber) {
    alert(Too high. Guess again!)


else {
    alert(Too low. Guess again!)


```


### Good example of for loops
###### For loops are often used to count up or down. This piece of JS is probably not something which will be used on this project, however, I have added it to the style guide just in case. For loops are usually used if the user has to do something in a set amount of time. This usually relates to games. When used, like any other piece of JS it's important to check the syntax, otherwise it is unlikely to work. 


```
//This piece of code will print the numbers 0-5, but stop before it reaches 6.
for(var count = 0; count < 6; count++ )
console.log(count);

```



### Bad example of for loops
###### It is important to note that the count begins at 0, so if the code that is listed below is run it will not print the numbers 1-5. Instead, it will print 1-4 and this is because the closing number is always the next one up, so in order to arrive at 5 the closing number would need to be 6. See example below: 
```
//This piece of code will print the numbers 0-5, but stop before it reaches 6.
for(var count = 0; count < 5; count++ )
console.log(count);

```




### Good example of while loops
###### While loops are similar to for loops and will probably not be used in this project either, but again I thought it best to include them in the guide just in case. While loops are less stable than for loops, because if executed incorrectly they can run indefinitely and crash the code. The purpose of a while loop is to keep looping from one number to the next until it stops at the designated one e.g. 1-11. If this was the case the while loop would stop looping at 10. It is also worth noting that while loops can loop over string characters too. Below is an example of some while loops in action: 

```

//WHILE LOOPS
//The code continiously repeats whilst it is true or until it is false


//Printing numbers from 1-5

var count = 1;
while(count < 6) {
 console.log("count is: " + count);
 count++;
}
//count is: 1
//count is: 2
//count is: 3
//count is: 4
//count is: 5


//Printing each character in a string
//string we're looping over:
var str = "hello";
//first character is always set at 0
var count = 0;    
while(count < str.length) {
 console.log(str[count]);
 count++;
}
//"h"
//"e"
//"l"
//"l"
//"o"


```


### Bad example of while loops
###### If the while loop is not grammitcally correct e.g. if the starting value is 0 and loops down by 10 it will not work, because 0 is not higher than 10. Instead it will loop forever and cause the code and browser to crash. For this reason it is of vital importance to keep backups in case this accidently occurs. See below's example: 

```
//Infinite loops will occur when the terminating condition in a loop is never true
//The example below prints "0" over and over because count is never incremented

var count = 0;

while(count < 10) {
 console.log(count);
}

```




## Folders
###### Below is a short guide on how I will structure the content of this project, including where I will store selective files and what they will be called. If this process is neglected and not given the proper attention before the development stage begins the finished product will be an unorganised mess and some of the features may not work and this is because the content is not in a designated area. See example snapshots below: 

### Step one - Create a new folder called "Experience_Canada"
![](imgs/step0.png)


### Step two - Create three child folders inside the parent folder named the following:
###### CSS
###### JS
###### IMGS
![](imgs/step3.png)

### Step three - Inside the CSS folder create and save a file called style.css
![](imgs/step4.png)

### Step four - Inside the JS folder create and save a file called javascript.js
![](imgs/step5.png)

### Step five - Move all images that were used for the wireframes into the IMGS folder
![](imgs/step6.png)
