// Helpful articles
// https://developer.mozilla.org/en-US/docs/Web/API/Event/target
// https://www.sitepoint.com/accessible-drag-drop/
// https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API

"use strict";

const items = document.querySelectorAll('.item');
const listContainers = document.querySelectorAll('.list-container');
var listItem = null;
// item.addEventListener('dragstart', dragStart);
// item.addEventListener('dragend', dragEnd);

// loop through list items and assign event listeners
for(let item of items) {
	item.addEventListener('dragstart', dragStart);
	item.addEventListener('dragend', dragEnd);
}

// loop through list containers and assign event listeners
for(let container of listContainers) {
	container.addEventListener('dragover', dragOver);
	container.addEventListener('dragenter', dragEnter);
	container.addEventListener('dragleave', dragLeave);
	container.addEventListener('drop', dragDrop, false);
}

// drag functions for list items
function dragStart(event) {
	// append class name to element being clicked on
	this.className += ' hold';
	setTimeout(() => (this.className = 'invisible'), 0);
	
	listItem = event.target;
	event.dataTransfer.setData('text', '');
	console.log(listItem);
}
function dragEnd() {
	this.className = 'item';
}

// drag functions for containers
function dragOver(event) {
	event.preventDefault();
}
function dragEnter(event) {
	event.preventDefault();
	this.className += ' hovered';
}
function dragLeave() {
	this.className = 'list-container';
}
function dragDrop() {
	this.className = 'list-container';
	this.append(listItem);
}

