main();
 function main()
 {
 var password = "C0d3Cr3w"
    userInput = prompt("Enter password: ");
     while (password!= userInput)
     {
     userInput = prompt("Try again")
     }

     // Missing the ```THAT’S CORRECT!!!``` success alert
     alert("THAT'S CORRECT!!!");
 }

 /*

	KEY: This looks good for the most part, but where are your comments?!

	Also, get in the habit of using '===' to test for equality and '!==' for inequality. 

*/