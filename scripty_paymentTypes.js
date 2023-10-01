/*
* Amenitiz.io - Payment types
* Payment types are too many if you are not connected to any POS
*
* Run script if URL Matches (regex) Following input /^http[s]:\/\/.*\.amenitiz\.io\/.*\/admin\/planning\/calendar/gm Trigger Automatically On Page load
*
* Laurent Chervet
*
*/

// USER SETTINGS

let scripty_paymentTypes_allowed_payment_types = [
	'credit_card',
	'cash',
	'gift_voucher',
	'debiteurs'
]


// DANGER ZONE BELOW, CHANGE AT YOUR OWN RISK
document.body.addEventListener('click', function() {
	try {
		for (const option of document.querySelectorAll('#other-payment-method > option')) {
			if (!scripty_paymentTypes_allowed_payment_types.includes(option.value) && !option.disabled) {
				option.parentElement.removeChild(option)
			}
		}
	} catch (e) {}
})
