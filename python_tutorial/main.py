#This is my first Python program
print("Hello World")
print("My name is Sinmi")

# Variables = A container for a value (string, integer,float, boolean)
# Strings
first_name = "Sinmi"
food = "pizza"
email = "akintayosinmi1@gmail.com"
print(first_name)
# An f-string allows you to use your variable along with text, the f means format
print(f"Hello {first_name}")
print(f"You like {food}")
print(f"Your email is {email}")

# Integers
age = 25

# you dont need to write all the examples man...
print(f"You are {age} years old")

# Float - a number but contains a decimal portion
price = 10.99

print(f"The price is ${price}")

# Boolean
is_student = True

print(f"Are you a student? {is_student}")

# DONT GET CONFUSED {} is used to diplay variables here in python, but in js it's used for something different(template literals)

# Potential use case of booleans
if is_student:
    print("You are a student")
else: 
    print("You are NOT a student")

 #Typecasting = the process of converting a variable from one data type to another str(), int(), float(), bool()

name = "Sinmiloluwa"
age = 25
gpa = 3.9
is_student2 = True
# To check the type of a variable
print(type(name))

# To convert to int
gpa = int(gpa) #rounds down
print(gpa)
# To convert to float
age = float(age)
print(age)
# To convert to str
age = str(age)
print(age)
print(type(age))
# To convert to boolean
name = bool(name)
print(name)
# NOTE: this will always give true if there is a value in the variable.. if there is no value it will give false

# input() = A function that prompts the user to enter data. Returns the entered data as a string

# name_1 = input("What is your name?: ")
# age = int(input("How old are you?: ")) 
# age = age + 1

# print(f"Hello {name_1}!")
# print("HAPPY BIRTHDAY!")
# print(f"You are {age} years old")

# Exercise 1 Rectangle Area Calc
# length = float(input("Enter the length: "))
# width = float(input("Enter the width: "))
# area = length * width

# print(f"The area is {area}cm\u00b2")#\u00b2 to write 2 squared

# Exercise 2 Shopping Cart Program
# item = input("What item would you like to buy?: ")
# price = float(input("What is the price?: "))
# quantity = int(input("How many would you like?: "))
# total = price * quantity

# print(f"You have bought {quantity} x {item}/s")
# print(f"Your total is: ${total}")

# Madlibs game
# word game where you create a story by filling in the blanks with random words

# adjective1 = input("Enter an adjective (description): ")
# noun1 = input("Enter a noun (person, place, thing): ")
# adjective2 = input("Enter an adjective (description): ")
# verb1 = input("Enter a verb ending with 'ing': ")
# adjective3 = input("Enter an adjective (description): ")

# print (f"Today I went to a {adjective1} zoo.")
# print(f"In an exhibit, I saw a {noun1}")
# print(f"{noun1} was {adjective2} and {verb1}")
# print(f"I was {adjective3}!")

# ARITHMETIC OPERATORS
friends = 0 

friends += 5 #augmented assignment operator
friends -= 2
friends *= 3
friends /= 2

# exponents
friends **= 2 #squares the number
# modulus operator gives remainder of any division
friends %= 3
print(friends)

# Built-in math related functions
x = 3.14
y = 4
z = 5

result = round(x) # normal rounding off and it can be done to a specific decimal digit
result = abs(y) # absolute value
result = pow(y, 3) # first is the variable, 2nd is the power to which it will be raised
result = max(x, y, z) # finds the maximum val between the variables
result = min(x, y, z) # finds the minimum val between the variables
print(result)

import math # importing math module to access math class
print(math.pi)
print(math.e)

result = math.sqrt(y)
result = math.ceil(x) # always rounds floating number up so 3.14 --> 4
result = math.floor(x) # always rounds floating number down so 3.14 --> 3

print(result)

# Exercise 3 Calculate circumference of circle
# radius = float(input("Enter the radius of a circle: "))
# circumference = 2 * math.pi * radius
# print(f"The circumference is: {round(circumference, 2)}cm")

# Exercise 4 Calculate area of circle
# radius = float(input("Enter the radius of a circle: "))
# area = math.pi * pow(radius,2)
# print(f"The area of the circle is: {round(area, 2)}cm\u00b2")

#Stopped this session at 50:00

# Exercise 5 Calculate hypotenus of a right angled triangle
# a = float(input("Enter side A: "))
# b = float(input("Enter side B: "))

# c = math.sqrt(pow(a,2) + pow(b, 2))
# print(f"Side C: {c}cm")

# IF STATEMENTS
# age = int(input("Enter your age: "))

# if age >= 18:
#     print("You are now signed up!")
# elif age < 0:
#     print("You haven't been born yet")
# else: 
#     print("You must be 18+ to sign up")

# response = input("Would you like food? (Y/N): ")

# if response == "Y":
#     print("Have some food!")
# else: 
#     print("No food for you!")

# You can just use booleans directly with if statements


# PYTHON CALCULATOR
# operator = input("Enter an operator (+ - * /): ")
# num1 = float(input("Enter the 1st number: "))
# num2 = float(input("Enter the 2nd number: "))

# if operator == "+":
#     result = num1 + num2
#     print(round(result,3))
# elif operator == "-":
#     result = num1 - num2
#     print(round(result,3))
# elif operator == "*":
#     result = num1 * num2
#     print(round(result,3))
# elif operator == "/":
#     result = num1 / num2
#     print(round(result,3))
# else: 
#     print(f"{operator} is not a valid operator")

# PYTHON WEIGHT CONVERTER

# weight = float(input("Enter your weight: "))
# unit = input("Kilogram or Pounds? (K or L): ")

# if unit == "K":
#     weight = weight * 2.205
#     unit = 'Lbs.'
#     print(f"Your weight is: {round(weight, 1)}{unit} ")      
# elif unit == "L":
#     weight = weight / 2.205
#     unit = 'Kgs.'
#     print(f"Your weight is: {round(weight, 1)}{unit} ")
# else: print(f"{unit} was not valid")

#Stopped this session at 1:14:00

# Logical operators = evaluate multiple conditions(or, and, not)
                    # or = at least one condition must be true 
                    # and = both conditions must be true
                    # not = inverts the condition (not false, not true)
# OR
# temp = -4
# is_raining = False

# if temp > 35 or temp < 0 or is_raining:
#     print("The outdoor event is cancelled")
# else:
#     print("The outdoor event is still scheduled")

#AND              
temp = 22
is_sunny = False

if temp >= 28 and is_sunny:
    print("It is HOT outside ")
    print("It is SUNNY ")
elif 28 > temp > 0  and is_sunny:
    print("It is WARM outside ")
    print("It is SUNNY ")
elif 28 > temp > 0  and not is_sunny:
    print("It is WARM outside ")
    print("It is CLOUDY ")

# Conditional expression = A one-line shortcut for the if-else statement (ternary operator)
# Print or assign one of two values based on a condition
# X if condition else Y

num = -6
a = 6
b = 7
age = 18

print("Positive" if num > 0 else "Negative")
result = "EVEN" if num % 2 == 0 else "ODD"
print(result)

max_num = a if a > b else b
min_num = a if a < b else b

status = "Adult" if age >= 18 else "Child"
print(max_num)
print(min_num)
print(status)

# .functions in python
# name = input("Enter Your Name: ")
# phone_number = input("Enter Your Phone Number: ")
# word = input("Enter Your Word: ")

# finding the first instance of the index of a specific character
# result = name.find("z") # if you type more than one character it returns the first letter there
# finding the land instance of the index of a specific character
# result = name.rfind("i") 
#NOTE: if you type a character that is not there it will return the index of -1 
# print(result)

# Capitalizing the first letter
# name = name.capitalize()
# Lower all the letters
# name = name.lower()
# Makes everything uppercase
# name = name.upper()
# Returns a boolean if its only digits
# name = name.isdigit()
# Returns a boolean if its only alphabets
# name = name.isalpha()

# Counting the number of a specific character in a string
# phone_number = phone_number.count("22") # You can group characters and it will count the grouped characters


# APPLYING THIS ABOVE TO AN EXERCISE WE DID IN COS 103
# vowels = "aeiouAEIOU"
# total_count = 0
# for count in vowels:
#     total_count += word.count(count)

# Replacing a particular character with another character
# vowel_replace = word.replace("a", "HELLO")

# APPLYING THIS ABOVE TO AN EXERCISE WE DID IN COS 103
# for vowel in word:
    # if vowel in vowels:
        # word = word.replace(vowel, "*")



# print(name)
# print(phone_number)
# print(total_count)
# print(vowel_replace)
# print(word)

#NOTE: To Check String Functions
# print(help(str))

# VALIDATE USER INPUT EXERCISE
# username must not be not be more than 12 characters
# username must not contain any spaces
# username must not contain any digits

# username = input("Please Enter Your Name: ")
# if (len(username) < 12 and username.count( " ") == 0 and username.isdigit() == False):
#     print("Valid Username, You may proceed...")
# else: 
#     print("Invalid username. Please try again")

# Indexing = Accessing elements of a sequence using [] (indexing operator)
            #[start: end: step]
credit_card_number = "1234-5678-9012-3456"
print(credit_card_number[0:4])# NOTE: the ending index is usually excluded
last_4_digits = credit_card_number[-4:]
print(f"XXXX-XXXX-XXXX-{last_4_digits}")
#reversing a string
print(credit_card_number[::-1])

# format specifiers = {value: flags} format a value based on what
# flags are inserted

# .(number)f = round to that many decimal places (fixed point)
# :(number) = allocate that many spaces
# :03 = allocate and zero pad that many spaces
# :< = left justify
# :> = right justify
# :^ = center align
# :+ = use a plus sign to indicate positive value
# place sign to leftmost position
# = insert a space before positive numbers
# = comma separator

price1 = 3000.142
price2 = -9879302.8221
price3 = 443223.1901
print(f"Price 1 is ${price1:.2f}")
print(f"Price 2 is ${price2:.2f}")
print(f"Price 3 is ${price3:.2f}")

# Each variable will only take ten spaces in total if less than 10.. any variable greater than 10 will exceed the space
print(f"Price 1 is ${price1:10}")
print(f"Price 2 is ${price2:10}")
print(f"Price 3 is ${price3:10}")

# Takes 10 spaces and adds 0's to the back
print(f"Price 1 is ${price1:010}")
print(f"Price 2 is ${price2:010}")
print(f"Price 3 is ${price3:010}")

# Right aligns everything by 10 spaces
print(f"Price 1 is ${price1:>10}")
print(f"Price 2 is ${price2:>10}")
print(f"Price 3 is ${price3:>10}")

# Left aligns everything by 10 spaces
print(f"Price 1 is ${price1:<10}")
print(f"Price 2 is ${price2:<10}")
print(f"Price 3 is ${price3:<10}")

# Makes the character to take a max of ten spaces and centers it there, any variable greater than 10 will exceed the space
print(f"Price 1 is ${price1:^10}")
print(f"Price 2 is ${price2:^10}")
print(f"Price 3 is ${price3:^10}")

# If you have any positive values and you want it to be preceeded by a plus sign.. space instead of plus could also be used
print(f"Price 1 is ${price1:+}")
print(f"Price 2 is ${price2:+}")
print(f"Price 3 is ${price3:+}")

# Separates every thousand by a comma
print(f"Price 1 is ${price1:,}")
print(f"Price 2 is ${price2:,}")
print(f"Price 3 is ${price3:,}")

# Combination of the features
print(f"Price 1 is ${price1:+,.2f}")
print(f"Price 2 is ${price2:+,.2f}")
print(f"Price 3 is ${price3:+,.2f}")

# While loops
# Ended this session at 1:56:34

