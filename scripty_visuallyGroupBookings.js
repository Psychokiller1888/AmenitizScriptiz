/*
* Amenitiz.io - Calendar
* Makes the calendar tiles more lively and allows better visualisation of rooms in a same group
*
* Run script if URL Matches (regex) Following input /^http[s]:\/\/.*\.amenitiz\.io\/.*\/admin/booking-manager/calendar$/gm Trigger Automatically Before Page load
*
* Laurent Chervet
*
*/

// USER SETTINGS

// DANGER ZONE BELOW, CHANGE AT YOUR OWN RISK
function scripty_visuallyGroupBookings_applyStyle(element) {
	element.style.boxShadow = 'rgba(0, 0, 0, 0.22) 0px 19px 43px'
	element.style.transform = 'translate3d(-2px, -3px, 0px)'
}

function scripty_visuallyGroupBookings_removeStyle(element) {
	element.style.boxShadow = ''
	element.style.transform = ''
}

const scripty_visuallyGroupBookings_observer = new MutationObserver(mutation => {
	mutation.forEach(() => {
		let scripty_visuallyGroupBookings_elements = document.querySelectorAll('.booked_room_card')
		scripty_visuallyGroupBookings_elements.forEach(element => {
			element.addEventListener('mouseover', function () {
				let scripty_visuallyGroupBookings_bookingId = element.getAttribute('data-booking')
				scripty_visuallyGroupBookings_applyStyle(element)
				let scripty_visuallyGroupBookings_subEls = document.querySelectorAll(`[data-booking="${scripty_visuallyGroupBookings_bookingId}"]`)
				scripty_visuallyGroupBookings_subEls.forEach(subEl => {
					if (subEl.classList.contains('booked_room_card')) {
						scripty_visuallyGroupBookings_applyStyle(subEl)
					}
				})
			})
			element.addEventListener('mouseout', function () {
				let scripty_visuallyGroupBookings_bookingId = element.getAttribute('data-booking')
				scripty_visuallyGroupBookings_removeStyle(element)
				let scripty_visuallyGroupBookings_subEls = document.querySelectorAll(`[data-booking="${scripty_visuallyGroupBookings_bookingId}"]`)
				scripty_visuallyGroupBookings_subEls.forEach(subEl => {
					if (subEl.classList.contains('booked_room_card')) {
						scripty_visuallyGroupBookings_removeStyle(subEl)
					}
				})
			})
		})
	})
})

const scripty_visuallyGroupBookings_loader = document.getElementById('js-loading-container')
if (scripty_visuallyGroupBookings_loader) {
	scripty_visuallyGroupBookings_observer.observe(scripty_visuallyGroupBookings_loader, {
		attributes: true,
		attributeFilter: ['style']
	})
}

const scripty_visuallyGroupBookings_sidePanel = document.getElementById('booking-manager__sidepanel')
if (scripty_visuallyGroupBookings_sidePanel) {
	scripty_visuallyGroupBookings_observer.observe(scripty_visuallyGroupBookings_sidePanel, {
		attributes: true,
		attributeFilter: ['style']
	})
}
