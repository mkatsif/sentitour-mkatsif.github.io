"use strict";


function LogIn()
{
	var username = document.getElementById('username_login');
	var password = document.getElementById('password_login');
	var remember_login = document.getElementById('remember_login').checked;


	if(!checkInputsIfEmpty('signin'))
	{

	}
}

function passReset()
{
	if(!checkInputsIfEmpty('password_reset_div'))
	{

	}
}



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


function sendMessage()
{
	var name = document.getElementById('name_cform').value;
	var email = document.getElementById('email_cform').value;
	var subject = document.getElementById('subject_cform').value;
	var message = document.getElementById('message_cform').value;


	if(name.length!=0 && email.length!=0
		&& subject.length!=0 && message.length!=0)
	{
		alert("yes");
		var nameErr = true;
		
	}
	else
	{
		alert("empty");
	}



}



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
