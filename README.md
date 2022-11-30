# Password Generator

## Description
This application will produce a randomomized password when you click 'Generate Password'. 
  
 ### Features
 You can choose the password length from between 8 and 120 characters.
 
 ![Windows prompt box requesting users choice of password length](https://user-images.githubusercontent.com/110208272/204707700-77a2724f-b4a0-42e6-85f2-9dff9894f230.png)

 You can choose to include/exclude the following character sets:
 
 - Lowercase letters (abcdefghijklmnopqrstuvwxyz)
 - Uppercase letters (ABCDEFGHIJKLMNOMPQRSTUVWXYZ)
 - Numbers (1234567890)
 - Special Characters (!#$%&'()*+,-./:;<=>?@[\]^_`{|}~)
 
 ![Windows confirm box asking whether or not to use lowercase letters.](https://user-images.githubusercontent.com/110208272/204711252-6296d513-4b8b-4719-b69f-a959d2a6042c.png)

  If the password length chosen is not within the expected parameters the following alert is displayed and you will be prompted to try again.
  
![Windows alert informing user that the length of password they have chosen is not valid.](https://user-images.githubusercontent.com/110208272/204710560-5cef44e4-eb3d-4d93-866a-05934b3f6268.png)

 If any letters are included in the password length input, an alert is displayed to inform you that the input must be a number between 8 and 120 and asked to try again.
  
![Windows alert asking the user to input a number between 8 and 120.](https://user-images.githubusercontent.com/110208272/204710915-40fc77a8-4cb3-479b-ac98-ae5c28d5d62a.png)

If all characters sets are rejected, the following alert is displayed and you will be offered the choices of character sets again.
 
![Windows alert asking the user to choose at least one option.](https://user-images.githubusercontent.com/110208272/204711700-d3af45fd-d014-44b2-98c7-42f3c57bf92c.png)

When the password length and character set choices have been validated a random string of the desired length is produced.

The applicaition will then validate the password to ensure that all chosen character sets have been included in the password. If one or more of the character sets is not represented in the password the application will automatically generate a new password string. The user will be unaware of this validation.

Once the password has been validated it will be displayed in the text box.

![Password generator application.](https://user-images.githubusercontent.com/110208272/204707080-954cfd11-e3ee-4b33-a25f-5fef724cd08c.png)

##Installation

N/A

## Usage

N/A

## Credits

N/A

## License

N/A





 
