document.addEventListener("DOMContentLoaded", function () {
	document
		.querySelector("form")
		.addEventListener("submit", function (e) {
			e.preventDefault();
			window.location = "../index.html";
		});
});
