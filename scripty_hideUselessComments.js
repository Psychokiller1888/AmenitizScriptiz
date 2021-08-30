/*
* Amenitiz.io - Dashboard
* Hides useless comments on bookings on the dashboard. We are 100% non smoking hotel,
* but the comments from Booking.com always say "Non-Smoking" per example.
*
* scripty_hideUselessComments_filter: A list of comments to be filtered out
*
* Run script if URL Matches (regex) Following input /^http[s]:\/\/.*\.amenitiz\.io\/.*\/admin$/gm Trigger Automatically On Page load
*
* Laurent Chervet
*
*/

// USER SETTINGS
const scripty_hideUselessComments_filter = [
	'Non-Smoking'
]

// DANGER ZONE BELOW, CHANGE AT YOUR OWN RISK
document.querySelectorAll('.reservations__row--hotel-comment > p').forEach(element => {
	for (const sensored of scripty_hideUselessComments_filter) {
		if (element.innerHTML.toLowerCase().trim() === sensored.toLowerCase().trim()) {
			element.remove()
		}
	}
})
