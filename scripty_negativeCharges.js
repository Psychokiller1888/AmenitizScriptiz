/*
* Amenitiz.io - Arrivals
* Dudes in Europe are not allowed negative charges, but we need them to deduct services our customers did no use...
*
* Run script if URL Matches (regex) Following input /^http[s]:\/\/.*\.amenitiz\.io\/.*\/admin\/.*$/gm Trigger Automatically Before Page load
*
* Laurent Chervet
*
*/

// USER SETTINGS

// DANGER ZONE BELOW, CHANGE AT YOUR OWN RISK

function scripty_negativeCharges_applyPatch(element) {
	element.classList.add('j-skip-verification')
	element.removeAttribute('min')
}

const scripty_negativeCharges_observer = new MutationObserver(mutations => {
	mutations.forEach(mutation => {
		mutation.addedNodes.forEach(addedNode => {
			if (addedNode instanceof Element) {
				if (addedNode.classList.contains('row-input-new-charge') || addedNode.classList.contains('td-form-container')) {
					let scripty_negativeCharges_charge = addedNode.querySelector('#charge_price')
					if (scripty_negativeCharges_charge) {
						scripty_negativeCharges_applyPatch(scripty_negativeCharges_charge)
					}
				}
			}
		})
	})
})

let scripty_negativeCharges_container = document.querySelector('.booking-manager__sidepanel')
if (scripty_negativeCharges_container) {
	scripty_negativeCharges_observer.observe(scripty_negativeCharges_container, {childList: true, subtree: true})
}

scripty_negativeCharges_container = document.querySelector('#extra_price_per_product')
if (scripty_negativeCharges_container) {
	scripty_negativeCharges_applyPatch(scripty_negativeCharges_container)
}

scripty_negativeCharges_container = document.querySelector('#extra_price_per_adult')
if (scripty_negativeCharges_container) {
	scripty_negativeCharges_applyPatch(scripty_negativeCharges_container)
}

scripty_negativeCharges_container = document.querySelector('#extra_price_per_children')
if (scripty_negativeCharges_container) {
	scripty_negativeCharges_applyPatch(scripty_negativeCharges_container)
}

scripty_negativeCharges_container = document.querySelector('#extra_percentage_to_apply')
if (scripty_negativeCharges_container) {
	scripty_negativeCharges_applyPatch(scripty_negativeCharges_container)
}
