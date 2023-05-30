/*
* Amenitiz.io - LangAndMoney
* Hundreds of currencies to choose from, hundreds of languages.... That's just taunting the devil for errors...
*
* Run script if URL Matches (regex) Following input /^http[s]:\/\/.*\.amenitiz\.io\/.*\/admin\/planning\/calendar/gm Trigger Automatically On Page load
*
* Laurent Chervet
*
*/

// USER SETTINGS

let ALLOWED_CURRENCIES = [
	'Euro',
	'Swiss Franc'
]

let ALLOWED_LANGUAGES = [
	'allemand',
	'anglais',
	'français',
	'italien'
]

// DANGER ZONE BELOW, CHANGE AT YOUR OWN RISK
document.body.addEventListener('click', function() {
	try {
		for (const option of document.querySelectorAll('#client_account_currency > option')) {
			if (!ALLOWED_CURRENCIES.includes(option.text) && !option.disabled) {
				option.parentElement.removeChild(option)
			}
		}
		for (const option of document.querySelectorAll('#client_account_language > option')) {
			if (!ALLOWED_LANGUAGES.includes(option.text) && !option.disabled) {
				option.parentElement.removeChild(option)
			}
		}
	} catch (e) {}
})
