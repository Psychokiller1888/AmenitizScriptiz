/*
* Amenitiz.io - Global
* Fixes textarea impossible to set width
*
* Run script if URL Matches (regex) Following input /^http[s]:\/\/.*\.amenitiz\.io\/.*\/admin\/.*$/gm Trigger Automatically Before Page load
*
* Laurent Chervet
*
*/

// USER SETTINGS

// DANGER ZONE BELOW, CHANGE AT YOUR OWN RISK
const scripty_fixTextarea_doFix = function() {
	document.querySelectorAll('textarea').forEach(element => {
		element.style.maxWidth = '100%'
	})
}

const scripty_fixTextarea_observer = new MutationObserver(mutations => {
	mutations.forEach(() => {
		scripty_fixTextarea_doFix()
	})
})

const scripty_fixTextarea_container = document.querySelector('body')
if (scripty_fixTextarea_container) {
	scripty_fixTextarea_observer.observe(scripty_fixTextarea_container, {childList: true, subtree: false})
}

scripty_fixTextarea_doFix()
