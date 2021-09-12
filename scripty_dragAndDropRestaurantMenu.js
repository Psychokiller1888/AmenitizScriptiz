/*
* Amenitiz.io - Builder - Drag and drop restaurant menu
* Allows reordering items on the restaurant menu page
*
* Run script if URL Matches (regex) Following input /^http[s]:\/\/.*\.amenitiz\.io\/.*\/admin\/builder\/.*$/gm Trigger Automatically On Page load
*
* Laurent Chervet
*
*/

// USER SETTINGS

// DANGER ZONE BELOW, CHANGE AT YOUR OWN RISK
let dragSource = null

function handleDragStart(event) {
	dragSource = event.target
	event.dataTransfer.effectAllowed = 'move'
	event.dataTransfer.setData('text/html', event.target.outerHTML)
	event.target.style.opacity = '0.8'
}

function handleDragEnd(event) {
	document.querySelectorAll('.modal_menu_restaurant_line').forEach(element => {
		element.style.borderTop = 'none'
		event.target.opacity = '1'
	})
}

function handleDragEnter(event) {
	if (event.target.classList.contains('modal_menu_restaurant_line')) {
		event.target.style.borderTop = '4px solid #000'
	}
}

function handleDragLeave(event) {
	event.target.style.opacity = '1'
	event.target.style.borderTop = 'none'
}

function handleDragOver(event) {
	if (event.preventDefault) {
		event.preventDefault()
	}
	return false
}

function changeId(element, oldId, newId) {
	element.setAttribute('id', `line_modal_menu_restaurant_${newId}`)
	let link = element.querySelector('a.destroy_builder_element')
	if (link) {
		let href = link.getAttribute('href')
		link.setAttribute('href', href.replace(oldId, newId))
	}
	let form = element.querySelector('form')
	if (form) {
		form.setAttribute('id', `edit_builder_sub_block_${newId}`)
		form.querySelectorAll('input').forEach(input => {
			if (input.getAttribute('value') && parseInt(input.getAttribute('value')) === oldId) {
				input.setAttribute('value', newId)
			}

			if (input.getAttribute('id') && input.getAttribute('id').includes(oldId.toString())) {
				input.setAttribute('id', input.getAttribute('id').replace(oldId, newId))
			}

			if (input.getAttribute('onChange') && input.getAttribute('onChange').includes(oldId.toString())) {
				input.setAttribute('onChange', input.getAttribute('onChange').replace(oldId, newId))
			}
		})
	}
}

function handleDrop(event) {
	if (event.stopPropagation) {
		event.stopPropagation()
	}

	if (event.target.classList.contains('modal_menu_restaurant_line')) {
		if (dragSource != event.target) {
			let draggedId = parseInt(dragSource.getAttribute('id').split('_').pop())
			dragSource.remove()

			let dropElement = event.dataTransfer.getData('text/html')
			event.target.insertAdjacentHTML('beforebegin', dropElement)
			addDragAndDrop(event.target.previousSibling)

			let targetId = parseInt(event.target.getAttribute('id').split('_').pop())

			let draggedElement = document.getElementById(`line_modal_menu_restaurant_${draggedId}`)
			changeId(draggedElement, draggedId, targetId)

			let i = 0
			let first = false
			for (const child of document.getElementsByClassName('modal_menu_restaurant_line')) {
				let id = parseInt(child.getAttribute('id').split('_').pop())
				if (id >= targetId) {
					if (id === targetId && !first) {
						first = true
						continue
					}
					i++
					changeId(child, id, targetId + i)
				}
			}

			const changeEvent = new Event('change')
			let langDiv = document.querySelectorAll('.modal_menu_restaurant_line > form > .u-flex > .language-switch:not(.hide-element) > .form-group > input')
			langDiv.forEach(element => {
				element.dispatchEvent(changeEvent)
			})
		}
		return false
	}
}

function addDragAndDrop(element) {
	element.draggable = 'true'
	element.addEventListener('dragstart', handleDragStart, false)
	element.addEventListener('dragend', handleDragEnd, false)
	element.addEventListener('dragenter', handleDragEnter, false)
	element.addEventListener('dragleave', handleDragLeave, false)
	element.addEventListener('dragover', handleDragOver, false)
	element.addEventListener('drop', handleDrop, false)
}

const scripty_dragAndDropRestaurantMenu_observer = new MutationObserver(mutation => {
	mutation.forEach(() => {
		let scripty_dragAndDropRestaurantMenu_elements = document.querySelectorAll('.modal_menu_restaurant_line')
		scripty_dragAndDropRestaurantMenu_elements.forEach(element => {
			if (!element.getAttribute('draggable')) {
				addDragAndDrop(element)
			}
		})
	})
})

const scripty_dragAndDropRestaurantMenu_body = document.querySelector('body')
if (scripty_dragAndDropRestaurantMenu_body) {
	scripty_dragAndDropRestaurantMenu_observer.observe(scripty_dragAndDropRestaurantMenu_body, {childList: true, subtree: false})
}
