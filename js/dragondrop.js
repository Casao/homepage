(function(global) {
	document.addEventListener('DOMContentLoaded', function() {
		var dropTarget = document.querySelector('#dragdrop');
		var fileInput = document.querySelector('#Resume');
		var registrationForm = document.querySelector('#registrationForm');
		dropTarget.addEventListener("dragover", function(e) {
			  e.stopPropagation();
			  e.preventDefault();
			  e.dataTransfer.dropEffect = 'copy';
		}, false);
		dropTarget.addEventListener("dragleave", function() {
			console.log("Exiting");
		}, false);
		dropTarget.addEventListener("drop", function(e) {
			e.stopPropagation();
			e.preventDefault();
			fileInput.value = e.dataTransfer.files;
		});

		fileInput.addEventListener("change", function() {
			dropTarget.style.display = 'none';
			registrationForm.style.display = 'block';
		});

		document.querySelector('.cta-click').addEventListener('click', function(e) {
			e.preventDefault();
			fileInput.click();
		});
	});
}(window));