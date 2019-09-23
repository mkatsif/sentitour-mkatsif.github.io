"use strict";

/**
 * Checks if the user gave valid inputs to login.
 */
function LogIn()
{
	var username = document.getElementById('username_login');
	var password = document.getElementById('password_login');
	var remember_login = document.getElementById('remember_login').checked;


	if(!checkInputsIfEmpty('signin'))
	{

	}
}

/**
 * Checks if the user gave a valid email to reset the password.
 */
function passReset()
{
	if(!checkInputsIfEmpty('password_reset_div'))
	{

	}
}


/**
 * Checks if the user gave valid inputs.
 */
function createAccount()
{
	var email = document.getElementById('email_createAccount');
	var username = document.getElementById('username_createAccount');
	var picture; /* TODO picture here */
	var checkbox = document.getElementById('communication_checkbox').checked;
	var country = document.getElementById('country').value;


	if(!checkInputsIfEmpty('signupcontents'))
	{

	}
}


/**
 * Checks if the inputs are empty and returns true if empty, else false.
 */
function checkInputsIfEmpty(id) 
{ 
	var allInputs = document.getElementById(id).getElementsByTagName('input');

	for (var i = 0; i < allInputs.length; i++) 
	{
    	var input = allInputs[i];
        if (input.value.length == 0) 
        {
          	return true;
        }
      	else
      	{
   			return false;
  		}	
	}  
}
