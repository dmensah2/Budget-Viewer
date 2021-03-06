<html>
<body>
<script type="text/javascript">

//Program name: budgetViewer.html
//Purpose: To calculate the percentages of different categories for a personal budget.
//Author: Deidre Mensah
//Date last modified: 13-Feb-2017


//Declares variables
var rentPayment;		//amount of rent paid in dollars
var food;			//amount paid towards food
var utilities;			//amount paid towards utilities
var internet;			//amount paid towards internet
var cellPhone;			//amount paid towards cell phone plan
var allOther;			//amount paid towards all other items not accounted for in other categories
	
//Declares consants
var BR = "<br />";		//HTML line break
var PA = "<p />";		//HTML paragraph break
var ES = "";			//empty string	
var PERCENT = 100;		//percentage

//Program heading
document.write("Welcome to your monthly Budget Viewer!" + PA);

//Get inputs from user
rentPayment = prompt("Enter the person's monthly rent payment in dollars:",ES);
rentPayment = parseFloat(rentPayment);
food = prompt("Enter the person's monthly budget for food in dollars:",ES);
food = parseFloat(food);
utilities = prompt("Enter the person's total monthly utility bill in dollars:",ES);
utilities = parseFloat(utilities);
internet = prompt("Enter the person's total monthly internet bill in dollars:",ES);
internet = parseFloat(internet);
cellPhone = prompt("Enter the person's total monthly cell phone bill in dollars:",ES);
cellPhone = parseFloat(cellPhone);
allOther = prompt("Enter the person's total for all other remaining monthly bills:",ES);
allOther = parseFloat(allOther);

//Calculates the total of the monthly bill
totalBill = rentPayment + food + utilities + internet + cellPhone + allOther;
totalBill = parseFloat(totalBill);
	
//Calculates the percentage of each category
rentPortion = rentPayment/totalBill;
rentPercentage = rentPortion * PERCENT;
foodPortion = food/totalBill;
foodPercentage = foodPortion * PERCENT;
utilityPortion = utilities/totalBill;
utilityPercentage = utilityPortion * PERCENT;
internetPortion = internet/totalBill;
internetPercentage = internetPortion * PERCENT;	
cellPhonePortion = cellPhone/totalBill;
cellPhonePercentage = cellPhonePortion * PERCENT;
allOtherPortion = allOther/totalBill;
allOtherPercentage = allOtherPortion * PERCENT;

//Displays Results
document.write("Your total monthly bill is: " + totalBill.toFixed(2) + BR);
document.write("The percentage of rent you pay per month is: " + rentPercentage.toFixed(1) + BR);
document.write("The percentage of food you pay per month is: " + foodPercentage.toFixed(1) + BR);
document.write("The percentage of utilties you pay per month is: " + utilityPercentage.toFixed(1) + BR);
document.write("The percentage of internet you pay per month is: " + internetPercentage.toFixed(1) + BR);
document.write("The percentage of cell phone you pay per month is: " + cellPhonePercentage.toFixed(1) + BR);
document.write("The percentage of all other bills you pay per month is: " + allOtherPercentage.toFixed(1) + PA);

//Closes Program
document.write("Thank you for using this program!" + BR);

</script>
</body>
</html>