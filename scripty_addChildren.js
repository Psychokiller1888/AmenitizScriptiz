/*
* Amenitiz.io - Arrivals
* Adds missing children info on booking tiles
*
* Run script if URL Matches (regex) Following input /^http[s]:\/\/.*\.amenitiz\.io\/.*\/admin\/booking-manager\/arrivals$/gm Trigger Automatically On Page load
*
* Laurent Chervet
*
*/

// USER SETTINGS
const crsfToken = ''

// DANGER ZONE BELOW, CHANGE AT YOUR OWN RISK
const alreadyFetched = []
let scripty_addChildren_buttons = document.querySelectorAll('.check-in-out-btn > .js-booked-room-details')
scripty_addChildren_buttons.forEach(button => {
	const bookingId = button.dataset.booking

	if (!alreadyFetched.includes(bookingId)) {
		alreadyFetched.push(bookingId)
		const url = window.location.href.replace('arrivals', 'booking-details')

		let headers = new Headers()
		headers.append('pragma', 'no-cache')
		headers.append('cache-control', 'no-cache')
		headers.append('X-CSRF-Token', crsfToken)
		headers.append('X-Requested-With', 'XMLHttpRequest')

		let init = {
			method: 'GET',
			headers: headers,
			mode: 'cors'
		}

		let request = new Request(`${url}?booking_id=${bookingId}&rendered_view=pms_arrivals_stay_overs_departures`)

		fetch(request, init).then(response => {
			return response.text()
		}).then(data => {
			const matches = data.matchAll(/, Enfants: ([0-9]+)/gm)
			for (const match of matches) {
				if (match[1] <= 0) continue
				let container = button.parentElement.parentElement.querySelector('.card-info.u-flex.pb2')
				if (container) {
					let newEl = document.createElement('div')
					newEl.innerHTML = `<span style="margin-left: 8px;"><p class="size0 u-grey-dark">${match[1]} x enfant(s)</p></span>`
					container.append(newEl)
				}
			}
		})
	}
})

let scripty_addChildren_icons = document.querySelectorAll('#svg_client')
scripty_addChildren_icons.forEach(icon => {
	icon.style.position = 'relative'
	icon.style.top = '-2px'
})
