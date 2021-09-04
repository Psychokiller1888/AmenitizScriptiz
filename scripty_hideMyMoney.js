/*
* Amenitiz.io - Dashboard
* Hides revenue on dashboard
*
* scripty_HideMyMoney_containerHeight: The height of the container in hidden mode. If set to 0px, nothing will show! At 75px only the title is visible and expands when clicked
*
* Run script if URL Matches (regex) Following input /^http[s]:\/\/.*\.amenitiz\.io\/.*\/admin$/gm Trigger Automatically On Page load
*
* Laurent Chervet
*
*/

// USER SETTINGS
const scripty_HideMyMoney_containerHeight = '60px'

// DANGER ZONE BELOW, CHANGE AT YOUR OWN RISK
let scripty_hideMyMoney_element = document.querySelector('.row.a__box.has_header.is_dark')
if (scripty_hideMyMoney_element) {
	scripty_hideMyMoney_element.style.height = scripty_HideMyMoney_containerHeight
	scripty_hideMyMoney_element.style.overflow = 'hidden'
	scripty_hideMyMoney_element.style.cursor = 'pointer'
	scripty_hideMyMoney_element.querySelectorAll('div, a').forEach(element => {
		if (element.id === 'dashboard-advanced-stats') {
			element.style.pointerEvents = 'all'
		} else {
			element.style.pointerEvents = 'none'
		}
	})
	scripty_hideMyMoney_element.addEventListener('click', function(event) {
		if (event.target.style.height === scripty_HideMyMoney_containerHeight) {
			event.target.style.height = '200px'
		} else {
			event.target.style.height = scripty_HideMyMoney_containerHeight
		}
	})
}
