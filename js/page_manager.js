"use strict";

var mainBody = document.getElementById("mainBody");

/**
 * 
 */
function showHomePage()
{
	location.reload();
	window.scrollTo(0,0);
}

/**
 * Closes the login pop-up modal.
 */
function close_login_modal()
{
	document.getElementById("login_modal").setAttribute("aria-expanded", "false");	
	document.getElementById("login_modal_state1").setAttribute("class", "nav-item dropdown");
	document.getElementById("login_modal_state2").setAttribute("class", "dropdown-menu px-3");
}

/**
 * Closes the menu.
 */
function closeMenu()
{
	document.getElementById("menu_button").setAttribute("class","navbar-toggler navbar-toggler-right collapsed");
	document.getElementById("menu_button").setAttribute("aria-expanded", "false");
	document.getElementById("menu_button_inner_div").setAttribute("class","navbar-collapse collapse");
}

/**
 * Changes the description section images on resize of the window.
 */
function changeDescriptionImages()
{
	var mq = window.matchMedia( "(max-width: 991px)" );

	var ideaImg = document.getElementById("idea_img");
	var ideaImgBot = document.getElementById("idea_img_bot");

	// var kinitraImg = document.getElementById("kinitra_img")
	// var kinitraImgBot = document.getElementById("kinitra_img_bot")

	var ergoImg = document.getElementById("ergo_img")
	var ergoImgBot = document.getElementById("ergo_img_bot")

	var pilotikiImg = document.getElementById("pilotiki_img")
	var pilotikiImgBot = document.getElementById("pilotiki_img_bot")

	var goalImg = document.getElementById("goal_img");
	var goalImgBot = document.getElementById("goal_img_bot");


	if(mq.matches)// tablet, smartphone.
	{
		ideaImg.hidden = true;
		ideaImgBot.hidden = false;	

		// kinitraImg.hidden = true;
		// kinitraImgBot.hidden = false;

		ergoImg.hidden = true;
		ergoImgBot.hidden = false;

		pilotikiImg.hidden = true;
		pilotikiImgBot.hidden = false;

		goalImg.hidden = true;
		goalImgBot.hidden = false;
	}
	else
	{
		ideaImg.hidden = false;
		ideaImgBot.hidden = true;	

		// kinitraImg.hidden = false;
		// kinitraImgBot.hidden = true;

		ergoImg.hidden = false;
		ergoImgBot.hidden = true;

		pilotikiImg.hidden = false;
		pilotikiImgBot.hidden = true;

		goalImg.hidden = false;
		goalImgBot.hidden = true;
	}
}


/**
 * Injects the code to show the password reset page.
 */
function injectPasswordReset()
{
		close_login_modal();
		closeMenu();
	
		var html = '<div id="changed">'
			html += '<div id="passwordResetDiv"'
			html += ' <!-- Password Reset -->'
			html += '<section class="page-section">'
			html += '<div id="password_reset" align="center" style="margin-top: %">'
			html += '<div id="password_reset_div">'
		if(document.documentElement.lang == "el")
	{
			html += '<h5 class="section-heading" id="titlereset">Ανάκτηση Κωδικού</h5>'
			html += ' <div id="emailresetinfo" class="card">'
			html += ' <div class="card-body">'
			html += '  Πληκτρολογήστε το όνομα χρήστη ή το email σας και θα σας στείλουμε ένα σύνδεσμο για να αποκτήσετε ξανά πρόσβαση στο λογαριασμό σας.'
			html += '</div>'
			html += '</div>'
			html += '<div >'
			html += '	   <input id="emailreset" type="email" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" title="name@example.com" placeholder="Email/Username"><br>'
			html += ' 	<button type="button" class="btn btn-primary" onClick="passReset()">Υποβολή</button>'
			html += '</div>'
			html += '</div>'
			html += '</div>'
			html += '</section>'


			html += '<!-- blank -->'
			html += '<section class="page-section" id="blank">'
			html += ' <div class="container">'
			html += '   <div class="row" >'
			html += '     <div class="col-lg-12 text-center">'

			html += '      </div>'
			html += '     </div>'
			html += '   </div>'
			html += '</section>'
			html += '</div>';
	}
	else
	{
			html += '<h5 class="section-heading" id="titlereset">Password Reset</h5>'
			html += ' <div id="emailresetinfo" class="card">'
			html += ' <div class="card-body">'
			html += '  Type your username or email and we will send you a link to obtain access to your account.'
			html += '</div>'
			html += '</div>'
			html += '<div >'
			html += '	   <input id="emailreset" type="email" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" title="name@example.com" placeholder="Email/Username"><br>'
			html += ' 	<button type="button" class="btn btn-primary" onClick="passReset()">Submit</button>'
			html += '</div>'
			html += '</div>'
			html += '</div>'
			html += '</section>'


			html += '<!-- blank -->'
			html += '<section class="page-section" id="blank">'
			html += ' <div class="container">'
			html += '   <div class="row" >'
			html += '     <div class="col-lg-12 text-center">'

			html += '      </div>'
			html += '     </div>'
			html += '   </div>'
			html += '</section>'
			html += '</div>'
			html += '</div>';
	}
		


    while (mainBody.firstChild) 
    {
    	mainBody.removeChild(mainBody.firstChild);
	}
	mainBody.innerHTML = html;
	window.scrollTo(0,0);
}


/**
 * Injects the code to show the create user page.
 */
function injectCreateUser()
{
		close_login_modal();
		closeMenu();

		var html = '<div id="changed">'
			html+= '<div id="createUserDiv">'
			html+= '<section class="page-section">'
		if(document.documentElement.lang == "el")
		{
			html+= '<div id="signupcontents" align="center">'
			html+= ' <h2 class="section-heading" id="signuptitle" aling="center">Δημιουργία Λογαριασμού</h2>'
			html+= '<br>'
			html+= '<form id="signup_form" name="signup_form-form" action="" method="POST">'
			html+= '<input id="email_createAccount" type="email" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" title="name@example.com" placeholder="Διεύθυνση Εmail" required>'
			html+= '<div id="emailinfo" class="card">'
			html+= '<div class="card-body">'
			html+= 'Μία έγκυρη διεύθυνση email.Όλα τα emails του συστήματος θα αποστέλλονται σε αυτή τη διεύθυνση. <br>Η διεύθυνση email δε δημοσιοποιείται και θα χρησιμοποιηθεί μόνο αν επιθυμείτε να λάβετε νέο κωδικό πρόσβασης ή επιθυμείτε να λάβετε μέσω email συγκεκριμένα νέα ή ειδοποιήσεις.'
			html+= '</div>'
			html+= '</div>'
			html+= '<input id="username_createAccount" type="text" pattern="^(?=.{6,12})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$" title="6-12 χαρακτήρες, απαραίτητα τουλάχιστον 1 κεφαλαίος, 1 μικρός χαρακτήρας και 1 αριθμός." placeholder="Username" required style="margin-top:2%;"><br><br>'
			html+= '<div class="card">'
			html+= '<div class="card-header">Εικόνα</div>'
			html+= '<div class="card-body">'
			html+= '<h5 class="card-title">'
			html+= '<label class="form-check-label" for="materialChecked2">'
			html+= '<span class="choose_img_span btn btn-primary">'
      		html+= '<span class="upl" id="upload">Επιλογή Εικόνας</span>'
      		html+= '<input type="file" class="upload up" accept="image/png, image/jpeg, image/gif" id="choose_img_btn"> '
			html+= '</label>'
			html+= '</h5>'
			html+= '<div class="card-text">Φωτογραφία προσώπου ή μια εικόνα.<br></div>'
			html+= '<div class="upload_requirements"> <a style="color: blue;">Απαιτήσεις εικόνας</a>'
			html+= '<span class="upload_requirements_info"> '
			html+= '<div id="upload-instructions--2" class="hidden help-block form-group" aria-hidden="true">Μόνο ένα αρχείο.<br>Όριο 2 MB.<br>Επιτρεπόμενοι τύποι αρχείων: <code>png, gif, jpg, jpeg</code></div></span></div>'
			html+= '</div>'
			html+= '</div>'
			html+= '<br><br>'
			html+= '<div class="card">'
			html+= '<div class="card-header">Προτιμήσεις Επικοινωνίας</div>'
			html+= '<div class="card-body">'
			html+= '<h5 class="card-title"><input id="checkbox" type="checkbox" class="form-check-input" id="materialChecked2" checked>'
			html+= '<label id="checkboxtext" class="form-check-label" for="materialChecked2">Φόρμα προσωπικής επικοινωνίας</label>'
			html+= '</h5>'
			html+= '<p class="card-text">Να επιτρέπεται σε άλλους χρήστες να επικοινωνήσουν μαζί σας μέσω φόρμας προσωπικής επικοινωνίας η οποία διατηρεί κρυφό το email σας.'
			html+= 'Λάβετε υπ\' όψιν πως ορισμένοι χρήστες με παραπάνω δικαιώματα όπως οι διαχειρίστριες του ιστοτόπου θα μπορούν να επικοινωνήσουν μαζί σας ακόμα'
			html+= 'και αν επιλέξετε να απενεργοποιήσετε αυτή την λειτουργία.'
			html+= '</p>'
			html+= '</div>'
			html+= '</div>'
			html+= '<br><br>'
			html+= '<div class="card">'
			html+= '<div class="card-header">Τοπικές ρυθμίσεις</div>'
			html+= '<div class="card-body">'
			html+= '<h5 class="card-title">Ζώνη ώρας</h5>'
			html+= '<label for="country">Χώρα&nbsp</label><span style="color: red !important; display: inline; float: none;"></span>'
		}
		else
		{
			html+= ' <h2 class="section-heading" id="signuptitle" aling="center">Create Account</h2>'
			html+= '<br>'
			html+= '<form id="signup_form" name="signup_form-form" action="" method="POST">'
			html+= '<div id="signupcontents" align="center" style="display: grid;">'
			html+= '<input id="email_createAccount" type="email" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" title="name@example.com" placeholder="Εmail Address" required>'
			html+= '<div id="emailinfo" class="card">'
			html+= '<div class="card-body">'
			html+= 'A valid email address. All emails will be send to this email address.<br> The email address will not be disclosed and will only be used if you wish to receive a new password or wish to receive specific news or notifications by email.'
			html+= '</div>'
			html+= '</div>'
			html+= '<input id="username_createAccount" type="text" pattern="^(?=.{6,12})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$" title="6-12 characters, at least 1 capital and 1 uppercase letter and 1 number." placeholder="Username" required style="margin-top:2%;"><br><br>'
			html+= '<div class="card">'
			html+= '<div class="card-header">Picture</div>'
			html+= '<div class="card-body">'
			html+= '<h5 class="card-title">'
			html+= '<label class="form-check-label" for="materialChecked2">'
			html+= '<span class="choose_img_span btn btn-primary">'
      		html+= '<span class="upl" id="upload">Choose Image</span>'
      		html+= '<input type="file" class="upload up" accept="image/png, image/jpeg, image/gif" id="choose_img_btn"> '
			html+= '</label>'
			html+= '</h5>'
			html+= '<div class="card-text">Your virtual face or picture.<br></div>'
			html+= '<div class="upload_requirements"> <a style="color: blue;">Upload requirements</a>'
			html+= '<span class="upload_requirements_info"> '
			html+= '<div id="upload-instructions--2" class="hidden help-block form-group" aria-hidden="true">A single file.<br>Max 2 MB.<br>Allowed file types: <code>png, gif, jpg, jpeg</code></div></span></div>'
			html+= '</div>'
			html+= '</div>'
			html+= '<br><br>'
			html+= '<div class="card">'
			html+= '<div class="card-header">Contact settings</div>'
			html+= '<div class="card-body">'
			html+= '<h5 class="card-title"><input id="checkbox" type="checkbox" class="form-check-input" id="materialChecked2" checked>'
			html+= '<label id="checkboxtext" class="form-check-label" for="materialChecked2">Personal Contact Form</label>'
			html+= '</h5>'
			html+= '<p class="card-text">Allow other users to contact you through a personal contact form that keeps your email hidden.'
			html+= 'Keep in mind that some users with more rights, such as website administrators, can still contact you'
			html+= 'even if you choose to disable this feature.'
			html+= '</p>'
			html+= '</div>'
			html+= '</div>'
			html+= '<br><br>'
			html+= '<div class="card">'
			html+= '<div class="card-header">Local Settings</div>'
			html+= '<div class="card-body">'
			html+= '<h5 class="card-title">Time Zone</h5>'
			html+= '<label for="country">Country&nbsp</label><span style="color: red !important; display: inline; float: none;"></span>'
		}
			html+= '<select id="country" name="country" class="form-control" style="display:inline;">'
			html+= '<option value="Afghanistan">Afghanistan</option>'
			html+= '<option value="Åland Islands">Åland Islands</option>'
			html+= '<option value="Albania">Albania</option>'
			html+= '<option value="Algeria">Algeria</option>'
			html+= '<option value="American Samoa">American Samoa</option>'
			html+= '<option value="Andorra">Andorra</option>'
			html+= '<option value="Angola">Angola</option>'
			html+= '<option value="Anguilla">Anguilla</option>'
			html+= '<option value="Antarctica">Antarctica</option>'
			html+= '<option value="Antigua and Barbuda">Antigua and Barbuda</option>'
			html+= '<option value="Argentina">Argentina</option>'
			html+= '<option value="Armenia">Armenia</option>'
			html+= '<option value="Aruba">Aruba</option>'
			html+= '<option value="Australia">Australia</option>'
			html+= '<option value="Austria">Austria</option>'
			html+= '<option value="Azerbaijan">Azerbaijan</option>'
			html+= '<option value="Bahamas">Bahamas</option>'
			html+= '<option value="Bahrain">Bahrain</option>'
			html+= '<option value="Bangladesh">Bangladesh</option>'
			html+= '<option value="Barbados">Barbados</option>'
			html+= '<option value="Belarus">Belarus</option>'
			html+= '<option value="Belgium">Belgium</option>'
			html+= '<option value="Belize">Belize</option>'
			html+= '<option value="Benin">Benin</option>'
			html+= '<option value="Bermuda">Bermuda</option>'
			html+= '<option value="Bhutan">Bhutan</option>'
			html+= '<option value="Bolivia">Bolivia</option>'
			html+= '<option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>'
			html+= '<option value="Botswana">Botswana</option>'
			html+= '<option value="Bouvet Island">Bouvet Island</option>'
			html+= '<option value="Brazil">Brazil</option>'
			html+= '<option value="British Indian Ocean Territory">British Indian Ocean Territory</option>'
			html+= '<option value="Brunei Darussalam">Brunei Darussalam</option>'
			html+= '<option value="Bulgaria">Bulgaria</option>'
			html+= '<option value="Burkina Faso">Burkina Faso</option>'
			html+= '<option value="Burundi">Burundi</option>'
			html+= '<option value="Cambodia">Cambodia</option>'
			html+= '<option value="Cameroon">Cameroon</option>'
			html+= '<option value="Canada">Canada</option>'
			html+= '<option value="Cape Verde">Cape Verde</option>'
			html+= '<option value="Cayman Islands">Cayman Islands</option>'
			html+= '<option value="Central African Republic">Central African Republic</option>'
			html+= '<option value="Chad">Chad</option>'
			html+= '<option value="Chile">Chile</option>'
			html+= '<option value="China">China</option>'
			html+= '<option value="Christmas Island">Christmas Island</option>'
			html+= '<option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>'
			html+= '<option value="Colombia">Colombia</option>'
			html+= '<option value="Comoros">Comoros</option>'
			html+= '<option value="Congo">Congo</option>'
			html+= '<option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>'
			html+= '<option value="Cook Islands">Cook Islands</option>'
			html+= '<option value="Costa Rica">Costa Rica</option>'
			html+= '<option value="Cote D\'ivoire">Cote D\'ivoire</option>'
			html+= '<option value="Croatia">Croatia</option>'
			html+= '<option value="Cuba">Cuba</option>'
			html+= '<option value="Cyprus">Cyprus</option>'
			html+= '<option value="Czech Republic">Czech Republic</option>'
			html+= '<option value="Denmark">Denmark</option>'
			html+= '<option value="Djibouti">Djibouti</option>'
			html+= '<option value="Dominica">Dominica</option>'
			html+= '<option value="Dominican Republic">Dominican Republic</option>'
			html+= '<option value="Ecuador">Ecuador</option>'
			html+= '<option value="Egypt">Egypt</option>'
			html+= '<option value="El Salvador">El Salvador</option>'
			html+= '<option value="Equatorial Guinea">Equatorial Guinea</option>'
			html+= '<option value="Eritrea">Eritrea</option>'
			html+= '<option value="Estonia">Estonia</option>'
			html+= '<option value="Ethiopia">Ethiopia</option>'
			html+= '<option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>'
			html+= '<option value="Faroe Islands">Faroe Islands</option>'
			html+= '<option value="Fiji">Fiji</option>'
			html+= '<option value="Finland">Finland</option>'
			html+= '<option value="France">France</option>'
			html+= '<option value="French Guiana">French Guiana</option>'
			html+= '<option value="French Polynesia">French Polynesia</option>'
			html+= '<option value="French Southern Territories">French Southern Territories</option>'
			html+= '<option value="Gabon">Gabon</option>'
			html+= '<option value="Gambia">Gambia</option>'
			html+= '<option value="Georgia">Georgia</option>'
			html+= '<option value="Germany">Germany</option>'
			html+= '<option value="Ghana">Ghana</option>'
			html+= '<option value="Gibraltar">Gibraltar</option>'
			html+= '<option value="Greece" selected>Greece</option>'
			html+= '<option value="Greenland">Greenland</option>'
			html+= '<option value="Grenada">Grenada</option>'
			html+= '<option value="Guadeloupe">Guadeloupe</option>'
			html+= '<option value="Guam">Guam</option>'
			html+= '<option value="Guatemala">Guatemala</option>'
			html+= '<option value="Guernsey">Guernsey</option>'
			html+= '<option value="Guinea">Guinea</option>'
			html+= '<option value="Guinea-bissau">Guinea-bissau</option>'
			html+= '<option value="Guyana">Guyana</option>'
			html+= '<option value="Haiti">Haiti</option>'
			html+= '<option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>'
			html+= '<option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>'
			html+= '<option value="Honduras">Honduras</option>'
			html+= '<option value="Hong Kong">Hong Kong</option>'
			html+= '<option value="Hungary">Hungary</option>'
			html+= '<option value="Iceland">Iceland</option>'
			html+= '<option value="India">India</option>'
			html+= '<option value="Indonesia">Indonesia</option>'
			html+= '<option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>'
			html+= '<option value="Iraq">Iraq</option>'
			html+= '<option value="Ireland">Ireland</option>'
			html+= '<option value="Isle of Man">Isle of Man</option>'
			html+= '<option value="Israel">Israel</option>'
			html+= '<option value="Italy">Italy</option>'
			html+= '<option value="Jamaica">Jamaica</option>'
			html+= '<option value="Japan">Japan</option>'
			html+= '<option value="Jersey">Jersey</option>'
			html+= '<option value="Jordan">Jordan</option>'
			html+= '<option value="Kazakhstan">Kazakhstan</option>'
			html+= '<option value="Kenya">Kenya</option>'
			html+= '<option value="Kiribati">Kiribati</option>'
			html+= '<option value="Korea, Democratic People\'s Republic of">Korea, Democratic People\'s Republic of</option>'
			html+= '<option value="Korea, Republic of">Korea, Republic of</option>'
			html+= '<option value="Kuwait">Kuwait</option>'
			html+= '<option value="Kyrgyzstan">Kyrgyzstan</option>'
			html+= '<option value="Lao People\'s Democratic Republic">Lao People\'s Democratic Republic</option>'
			html+= '<option value="Latvia">Latvia</option>'
			html+= '<option value="Lebanon">Lebanon</option>'
			html+= '<option value="Lesotho">Lesotho</option>'
			html+= '<option value="Liberia">Liberia</option>'
			html+= '<option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>'
			html+= '<option value="Liechtenstein">Liechtenstein</option>'
			html+= '<option value="Lithuania">Lithuania</option>'
			html+= '<option value="Luxembourg">Luxembourg</option>'
			html+= '<option value="Macao">Macao</option>'
			html+= '<option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>'
			html+= '<option value="Madagascar">Madagascar</option>'
			html+= '<option value="Malawi">Malawi</option>'
			html+= '<option value="Malaysia">Malaysia</option>'
			html+= '<option value="Maldives">Maldives</option>'
			html+= '<option value="Mali">Mali</option>'
			html+= '<option value="Malta">Malta</option>'
			html+= '<option value="Marshall Islands">Marshall Islands</option>'
			html+= '<option value="Martinique">Martinique</option>'
			html+= '<option value="Mauritania">Mauritania</option>'
			html+= '<option value="Mauritius">Mauritius</option>'
			html+= '<option value="Mayotte">Mayotte</option>'
			html+= '<option value="Mexico">Mexico</option>'
			html+= '<option value="Micronesia, Federated States of">Micronesia, Federated States of</option>'
			html+= '<option value="Moldova, Republic of">Moldova, Republic of</option>'
			html+= '<option value="Monaco">Monaco</option>'
			html+= '<option value="Mongolia">Mongolia</option>'
			html+= '<option value="Montenegro">Montenegro</option>'
			html+= '<option value="Montserrat">Montserrat</option>'
			html+= '<option value="Morocco">Morocco</option>'
			html+= '<option value="Mozambique">Mozambique</option>'
			html+= '<option value="Myanmar">Myanmar</option>'
			html+= '<option value="Namibia">Namibia</option>'
			html+= '<option value="Nauru">Nauru</option>'
			html+= '<option value="Nepal">Nepal</option>'
			html+= '<option value="Netherlands">Netherlands</option>'
			html+= '<option value="Netherlands Antilles">Netherlands Antilles</option>'
			html+= '<option value="New Caledonia">New Caledonia</option>'
			html+= '<option value="New Zealand">New Zealand</option>'
			html+= '<option value="Nicaragua">Nicaragua</option>'
			html+= '<option value="Niger">Niger</option>'
			html+= '<option value="Nigeria">Nigeria</option>'
			html+= '<option value="Niue">Niue</option>'
			html+= '                  <option value="Norfolk Island">Norfolk Island</option>'
			html+= '                  <option value="Northern Mariana Islands">Northern Mariana Islands</option>'
			html+= '                  <option value="Norway">Norway</option>'
			html+= '                  <option value="Oman">Oman</option>'
			html+= '                  <option value="Pakistan">Pakistan</option>'
			html+= '                  <option value="Palau">Palau</option>'
			html+= '                  <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>'
			html+= '                  <option value="Panama">Panama</option>'
			html+= '                  <option value="Papua New Guinea">Papua New Guinea</option>'
			html+= '                  <option value="Paraguay">Paraguay</option>'
			html+= '                  <option value="Peru">Peru</option>'
			html+= '                  <option value="Philippines">Philippines</option>'
			html+= '                  <option value="Pitcairn">Pitcairn</option>'
			html+= '                  <option value="Poland">Poland</option>'
			html+= '                  <option value="Portugal">Portugal</option>'
			html+= '                  <option value="Puerto Rico">Puerto Rico</option>'
			html+= '                  <option value="Qatar">Qatar</option>'
			html+= '                  <option value="Reunion">Reunion</option>'
			html+= '                  <option value="Romania">Romania</option>'
			html+= '                  <option value="Russian Federation">Russian Federation</option>'
			html+= '                  <option value="Rwanda">Rwanda</option>'
			html+= '                  <option value="Saint Helena">Saint Helena</option>'
			html+= '                  <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>'
			html+= '                  <option value="Saint Lucia">Saint Lucia</option>'
			html+= '                  <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>'
			html+= '                  <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>'
			html+= '                  <option value="Samoa">Samoa</option>'
			html+= '                  <option value="San Marino">San Marino</option>'
			html+= '                  <option value="Sao Tome and Principe">Sao Tome and Principe</option>'
			html+= '                  <option value="Saudi Arabia">Saudi Arabia</option>'
			html+= '                  <option value="Senegal">Senegal</option>'
			html+= '                  <option value="Serbia">Serbia</option>'
			html+= '                  <option value="Seychelles">Seychelles</option>'
			html+= '                  <option value="Sierra Leone">Sierra Leone</option>'
			html+= '                  <option value="Singapore">Singapore</option>'
			html+= '                  <option value="Slovakia">Slovakia</option>'
			html+= '                  <option value="Slovenia">Slovenia</option>'
			html+= '                  <option value="Solomon Islands">Solomon Islands</option>'
			html+= '                  <option value="Somalia">Somalia</option>'
			html+= '                  <option value="South Africa">South Africa</option>'
			html+= '                  <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>'
			html+= '                  <option value="Spain">Spain</option>'
			html+= '                  <option value="Sri Lanka">Sri Lanka</option>'
			html+= '                  <option value="Sudan">Sudan</option>'
			html+= '                  <option value="Suriname">Suriname</option>'
			html+= '                  <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>'
			html+= '                  <option value="Swaziland">Swaziland</option>'
			html+= '                  <option value="Sweden">Sweden</option>'
			html+= '                  <option value="Switzerland">Switzerland</option>'
			html+= '                  <option value="Syrian Arab Republic">Syrian Arab Republic</option>'
			html+= '                  <option value="Taiwan, Province of China">Taiwan, Province of China</option>'
			html+= '                  <option value="Tajikistan">Tajikistan</option>'
			html+= '                  <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>'
			html+= '                  <option value="Thailand">Thailand</option>'
			html+= '                  <option value="Timor-leste">Timor-leste</option>'
			html+= '                  <option value="Togo">Togo</option>'
			html+= '                  <option value="Tokelau">Tokelau</option>'
			html+= '                  <option value="Tonga">Tonga</option>'
			html+= '                  <option value="Trinidad and Tobago">Trinidad and Tobago</option>'
			html+= '                  <option value="Tunisia">Tunisia</option>'
			html+= '                  <option value="Turkey">Turkey</option>'
			html+= '                  <option value="Turkmenistan">Turkmenistan</option>'
			html+= '                  <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>'
			html+= '                  <option value="Tuvalu">Tuvalu</option>'
			html+= '                  <option value="Uganda">Uganda</option>'
			html+= '                  <option value="Ukraine">Ukraine</option>'
			html+= '                  <option value="United Arab Emirates">United Arab Emirates</option>'
			html+= '                  <option value="United Kingdom">United Kingdom</option>'
			html+= '                  <option value="United States">United States</option>'
			html+= '                  <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>'
			html+= '                  <option value="Uruguay">Uruguay</option>'
			html+= '                  <option value="Uzbekistan">Uzbekistan</option>'
			html+= '                  <option value="Vanuatu">Vanuatu</option>'
			html+= '                  <option value="Venezuela">Venezuela</option>'
			html+= '                  <option value="Viet Nam">Viet Nam</option>'
			html+= '                  <option value="Virgin Islands, British">Virgin Islands, British</option>'
			html+= '                  <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>'
			html+= '                  <option value="Wallis and Futuna">Wallis and Futuna</option>'
			html+= '                  <option value="Western Sahara">Western Sahara</option>'
			html+= '                  <option value="Yemen">Yemen</option>'
			html+= '                  <option value="Zambia">Zambia</option>'
			html+= '                  <option value="Zimbabwe">Zimbabwe</option>'
			html+= '               </select>'
			html+= '               <br>'
			html+= '               <p class="card-text">'
			if(document.documentElement.lang == "el")
		{
			html+= '                  Επιλέξτε την επιθυμητή τοπική ώρα και ζώνη ώρας. Οι ημερομηνίες και η ώρα παντού σε αυτό τον ιστοτόπο θα εμφανίζονται με αυτή τη ζώνη ώρας.'
		}
		else
		{
			html+= '                  Select the desired local time and time zone. The dates and time everywhere on this site will appear with this time zone.'
		}
			html+= '               </p>'
			html+= '            </div>'
			html+= '         </div>'
			html+= '         <br><br>'
			if(document.documentElement.lang == "el")
		{
			html+= '         <input id="accountbutton" class="btn btn-primary" type="submit" value="Δημιουργία λογαριασμού" onClick="createAccount()">'
		}
		else
		{
			html+= '         <input id="accountbutton" class="btn btn-primary" type="submit" value="Create Account" onClick="createAccount()">'	
		}
			html+= '         <br><br>'
			html+= '		</from>'
			html+= '      </div>'
			html+= '    </section>'
			html += '</div>'
			html += '</div>';



    while (mainBody.firstChild) 
    {
    	mainBody.removeChild(mainBody.firstChild);
	}
	mainBody.innerHTML = html;
	window.scrollTo(0,0);
}


/**
 * Jumps to a section according to the user's selection.
 */
function showAndJumpToSection(sectionID)
{
	
	if(document.body.contains(document.getElementById("changed")))
	{
		location.reload();	
		window.scrollTo(0,0);
	}

	document.querySelector(sectionID).scrollIntoView({behavior: 'smooth'});	/*not jumping to the section*/
}

/**
 * Changes the language according to the user's selection.
 */
function changeLanguage(language)
{
	var createUser = false;
	var resetPass= false;

	if(document.body.contains(document.getElementById("createUserDiv"))) createUser = true;
	if(document.body.contains(document.getElementById("passwordResetDiv"))) resetPass = true;

	/* Load the home page with the correct language */
	if(language == "en")
	{
		window.location.href = 'index_en.html';
	}
	else
	{
		window.location.href = 'index.html';
	}

	// DOES NOT WORK

	/* Inject in the page the code for the section the user was before of the language change. */
	if(createUser == true)
	{
		injectCreateUser();
	}
	else if(resetPass == true)
	{
		injectPasswordReset();
	}
}
