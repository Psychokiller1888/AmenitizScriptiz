/*
* Amenitiz.io - Dashboard
* Hides useless comments on bookings on the dashboard. We are 100% non smoking hotel,
* but the comments from Booking.com always say "Non-Smoking" per example.
*
* scripty_hideUselessComments_filter: A list of comments to be filtered out
*
* Run script if URL Matches (regex) Following input /^http[s]:\/\/.*\.amenitiz\.io\/.*\/(?:admin|admin\/reservations)$/gm Trigger Automatically On Page load
*
* Laurent Chervet
*
*/

// USER SETTINGS
const scripty_hideUselessComments_filter = [
	'Non-Smoking'
]

// DANGER ZONE BELOW, CHANGE AT YOUR OWN RISK
const scripty_hideUselessComments_clean = function() {
	document.querySelectorAll('.reservations__row--hotel-comment > p').forEach(element => {
		for (const censored of scripty_hideUselessComments_filter) {
			if (element.innerHTML.toLowerCase().trim() === censored.toLowerCase().trim()) {
				element.remove()
			}
		}
	})
}

const scripty_hideUselessComments_observer = new MutationObserver(mutations => {
	mutations.forEach(mutation => {
		if (mutation.addedNodes.length) {
			scripty_hideUselessComments_clean()
		}
	})
})

const scripty_hideUselessComments_container = document.querySelector('tbody')
if (scripty_hideUselessComments_container) {
	scripty_hideUselessComments_observer.observe(scripty_hideUselessComments_container, {childList: true, subtree: false})
}

scripty_hideUselessComments_clean()
