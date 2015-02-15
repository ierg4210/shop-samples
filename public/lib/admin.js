(function() {
'use strict';

// Reference: https://ierg4210.github.io/web/lectures/04-lecture-HTTPAndClientSideFormHandling.html#31
function serializeFormData(form) {
	return [].map.call(form.elements, function(el) {
		if (el.name && !el.disabled 
				&& (!el.type || el.type.toLowerCase() !== 'checkbox' || el.checked)) {
			if (el.tagName === 'SELECT' && el.hasAttribute('multiple'))
				return [].map.call(el.selectedOptions, function(o) {
					return [el.name, o.value].map(encodeURIComponent).join('=');
				}).join('&');
			return [el.name, el.value].map(encodeURIComponent).join('=');
		}
	}).join('&');
};

function onSubmitHandler(e) {
	// Disable default form submission to prevent page load
	e.preventDefault();

	// Reference: http://visionmedia.github.io/superagent/#post-/%20put%20requests
	superagent
		.post(this.getAttribute('action'))
		.send(serializeFormData(this))
		.end(function (res) {
			if (res.error) {
				if (res.body.inputErrors) {
					res.body.inputErrors.forEach(function(input){
						alert(input.msg);
					});
				}
				return console.error(res.body.inputError || res.error);
			}

			alert('OK');
			// refresh the page with latest results
			location.reload();
		});
}

document.querySelector('#categoryNewPanel form').addEventListener('submit', onSubmitHandler);
document.querySelector('#categoryEditPanel form').addEventListener('submit', onSubmitHandler);


})();
