# Password Generator

## Description

This application will generate a password to your specification within given parameters. You are given the flexibilty to generate a password of between 8 and 120 characters, that will include or exclude, according you your preference, characters from the following sets:

- Lowercase letters (abcdefghijklmnopqrstuvwxyz)
- Uppercase letters (ABCDEFGHIJKLMNOMPQRSTUVWXYZ)
- Numbers (1234567890)
- Special Characters (!#$%&'()*+,-./:;<=>?@[\]^_`{|}~)

There is input validation built in for the chosen password length and to ensure at least one character set is chosen. It will also ensure that each of the character sets is represented in the generated password.

 
## Installation

The application works in your browser and does not require installation.

//To do, insert URL
 
## Usage
 
Click on the red 'Generate Password' button to begin the process.

![Password Generator application landing page](https://user-images.githubusercontent.com/110208272/204976567-dfb3820c-673a-4dbc-9cfb-4c8827ee11d9.png)

You are asked to enter the desired length of the password from between 8 to 120 characters.

![Windows prompt box requesting users choice of password length](https://user-images.githubusercontent.com/110208272/204707700-77a2724f-b4a0-42e6-85f2-9dff9894f230.png)

If the password length chosen is not within the expected parameters the following alert is displayed and you will be prompted to try again.


You can choose to include/exclude the following character sets:
 
![Windows alert informing user that the length of password they have chosen is not valid.](https://user-images.githubusercontent.com/110208272/204710560-5cef44e4-eb3d-4d93-866a-05934b3f6268.png)

 If any letters are included in the password length input, an alert is displayed to inform you that the input must be a number between 8 and 120 and asked to try again
 
 ![Windows alert asking the user to input a number between 8 and 120.](https://user-images.githubusercontent.com/110208272/204710915-40fc77a8-4cb3-479b-ac98-ae5c28d5d62a.png)
 
 A windows confirm box is displayed asking where on not to include each of the character sets.
 
 ![Windows confirm box asking whether or not to use lowercase letters.](https://user-images.githubusercontent.com/110208272/204711252-6296d513-4b8b-4719-b69f-a959d2a6042c.png)
 
If all characters sets are rejected, the following alert is displayed and you will be offered the choices of character sets again.
 
![Windows alert asking the user to choose at least one option.](https://user-images.githubusercontent.com/110208272/204711700-d3af45fd-d014-44b2-98c7-42f3c57bf92c.png)

When the password length and character set choices have been validated a random string of the desired length is produced. 

Once the password has been generated, it will be displayed in the text box.

![Generated password displayed in the application](https://user-images.githubusercontent.com/110208272/204977583-6d54e897-0ee8-4914-befa-9467acb1b84e.png)


## Installation

N/A

## Credits

N/A

## License

N/A


