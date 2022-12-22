# Password-Generator

## Goals
The goals of this project was to create a password generator using JavaScript that would generate passwords of a certain length and character type based on user input. In order for the project to be successful the generator must:

1. Create passwords that are betweeen 8 and 128 characthers in length. 
2. Users can select characters to include. Options are numbers, lower case letters, upper case letters, and specail characters. 
3. Once the password is generated it will be displayed in the given html element. 

## The Build

I began by creating a space for user input using `window.prompt` that would request the desired length of password from the user. This input will then be checked to ensure that it is numerical only and that it is not less than 8 nor more than 128 as directed. I also added a modulo comparision to ensure the number entered was whole. 

Next I created a series of prompts using the `window.confirm` method to collect the remaining password criteria. I then ran a check to ensure at least one response had a value of true otherwise no passwor would generate. Using the `push` method, I added these boolean type responses to an array. 

## Installation
NA

## Usage
NA

## Credits
The HTML,CSS, and first 14 lines of the JS file were provided as part of course. 
