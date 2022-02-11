/*
* Amenitiz.io - Calendar
* Changes or hides the dollar symbol
*
* scripty_symbol_hideDollarSymbolWhenUpaid: set to true to hide the dollar symbol for unpaid rooms
* scripty_symbol_newColorToApplyWhenUnpaid: apply another color to unpaid dollar symbol
*
* Run script if URL Matches (regex) Following input /^http[s]:\/\/.*\.amenitiz\.io\/.*\/admin\/planning\/calendar$/gm Trigger Automatically Before Page load
*
* Laurent Chervet
*
*/

// USER SETTINGS
const scripty_symbol_hideDollarSymbolWhenUpaid = true
const scripty_symbol_newColorToApplyWhenUnpaid = 'black'

// DANGER ZONE BELOW, CHANGE AT YOUR OWN RISK
const scripty_symbol_observer = new MutationObserver(mutation => {
	mutation.forEach(() => {
		let scripty_symbol_symbolElements = document.querySelectorAll('.booking_amount_due_status')
		scripty_symbol_symbolElements.forEach(element => {
			element.style.bottom = '7px'
			if (element.classList.contains('unpaid')) {
				if (scripty_symbol_hideDollarSymbolWhenUpaid) {
					element.style.display = 'none'
				} else {
					element.firstElementChild.firstElementChild.style.fill = scripty_symbol_newColorToApplyWhenUnpaid
				}
			}
		})
	})
})

const scripty_symbol_loader = document.getElementById('js-loading-container')
if (scripty_symbol_loader) {
	scripty_symbol_observer.observe(scripty_symbol_loader, {attributes: true, attributeFilter: ['style']})
}
