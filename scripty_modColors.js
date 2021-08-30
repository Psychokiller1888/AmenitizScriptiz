/*
* Amenitiz.io - Calendar
* Changes or hides the dollar symbol
*
* scriptyModColors_amenitiz: text/html code/rgb/rgba color
* scriptyModColors_booking: text/html code/rgb/rgba color
* scriptyModColors_expedia: text/html code/rgb/rgba color
* scriptyModColors_phone: text/html code/rgb/rgba color
*
* Run script if URL Matches (regex) Following input /^http[s]:\/\/.*\.amenitiz\.io\/.*\/admin$/gm Trigger Automatically Before Page load
*
* Laurent Chervet
*
*/

// USER SETTINGS
const scriptyModColors_amenitiz = 'white'
const scriptyModColors_booking = '#87CEFA'
const scriptyModColors_expedia = '#FFFFE0'
const scriptyModColors_phone = '#F0F0F0'

// DANGER ZONE BELOW, CHANGE AT YOUR OWN RISK
const scriptyModColors_observer = new MutationObserver(mutation => {
	mutation.forEach(() => {
		let scriptyModColors_elements = document.querySelectorAll('.booked_room_card')
		scriptyModColors_elements.forEach(element => {
			let scriptyModColors_subEls = element.getElementsByTagName('img')
			if (scriptyModColors_subEls) {
				for (const img of scriptyModColors_subEls) {
					if (img.src.includes('booking')) {
						element.style.backgroundColor = scriptyModColors_booking
					} else if (img.src.includes('amenitiz-icon-color')) {
						element.style.backgroundColor = scriptyModColors_amenitiz
					} else if (img.src.includes('icon-phone-incoming')) {
						element.style.backgroundColor = scriptyModColors_phone
					} else if (img.src.includes('expedia')) {
						element.style.backgroundColor = scriptyModColors_expedia
					}
				}
			}
		})
	})
})

const scriptyModColors_loader = document.getElementById('js-loading-container')
if (scriptyModColors_loader) {
	scriptyModColors_observer.observe(scriptyModColors_loader, {attributes: true, attributeFilter: ['style']})
}

const scriptyModColors_sidePanel = document.getElementById('booking-manager__sidepanel')
if (scriptyModColors_sidePanel) {
	scriptyModColors_observer.observe(scriptyModColors_sidePanel, {attributes: true, attributeFilter: ['style']})
}
