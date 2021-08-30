/*
* Amenitiz.io - Global
* Fixes textarea impossible to set width
*
* Run script if URL Matches (regex) Following input /^http[s]:\/\/.*\.amenitiz\.io\/.*\/admin\/booking-manager\/calendar$/gm Trigger Automatically Before Page load
*
* Laurent Chervet
*
*/

// USER SETTINGS

// DANGER ZONE BELOW, CHANGE AT YOUR OWN RISK
document.querySelectorAll('textarea').forEach(element => {
	element.style.maxWidth = '100%';
})
