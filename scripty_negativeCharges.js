/*
* Amenitiz.io - Arrivals
* Dudes in Europe are not allowed negative charges, but we need them to deduct services our customers did no use...
*
* Run script if URL Matches (regex) Following input /^http[s]:\/\/.*\.amenitiz\.io\/.*\/admin\/booking-manager\/arrivals$/gm Trigger Automatically Before Page load
*
* Laurent Chervet
*
*/

// USER SETTINGS

// DANGER ZONE BELOW, CHANGE AT YOUR OWN RISK
const scripty_negativeCharges_observer = new MutationObserver(mutations => {
	mutations.forEach(mutation => {
		mutation.addedNodes.forEach(addedNode => {
			if (addedNode instanceof Element) {
				if (addedNode.classList.contains('row-input-new-charge')) {
					let scripty_negativeCharges_charge = addedNode.querySelector('#charge_price')
					if (scripty_negativeCharges_charge) {
						scripty_negativeCharges_charge.classList.add('j-skip-verification')
						scripty_negativeCharges_charge.removeAttribute('min')
					}
				}
			}
		})
	})
})

const scripty_negativeCharges_container = document.querySelector('.booking-manager__sidepanel')
if (scripty_negativeCharges_container) {
	scripty_negativeCharges_observer.observe(scripty_negativeCharges_container, {childList: true, subtree: true})
}
