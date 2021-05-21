# 03 JavaScript: Password Generator

The javascript used for the password generator was made by Analia. The html and css files as well as the eventlistener, writePassword function and generateBtn in the javascript file were already provided by my bootcamp.

# Javascript File:
- Arrays for uppercase and lowercase letters, numbers and special characters were created. Two empty arrays were also created.
- Within the writePassword function, a variable for the initial alert was created
- Another variable was created to prompt the user for their desired password length
- An if statement was included that checks to see if the password length meets the criteria. If the password length doesn't meet the criteria, it will alert the user that their input was invalid and prompt them to input a correct value. If they input an ivalid response, they will be alerted that they need to press the Generate Password button again.
- A second if statement was included that checks to see if the password length input meets the criteria, and if it does, it will present the user with the criteria questions, which are held in variables.
- A third if statment was included to check if at least one password criteria was chosen. If one was not chosen, it alerts the user that they must select one character type.
- Four other if statements were included to check if the use agreed or disagreed to certain password criteria. If the user agreed, random characters will be pushed into a new array. After all the criteria is chosen and pushed to the new array, random characters are chosen that match the length of the password and are pushed to a new array.
- Then, the password id is selected through the use of a variable. The value of that variable is then equalled to the final array (which is being joined into one string). The password is then displayed in the password field.
-Unable to solve: how to clear the password field once the 'Generate Password' button is pressed for a second time.


# Screenshot:




# Deployed URL:
