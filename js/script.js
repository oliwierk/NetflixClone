const faqBtns = document.querySelectorAll(".faq-btn");
const faqBoxes = document.querySelectorAll(".faq-box");

faqBtns.forEach((button, index) => {
	button.addEventListener("click", () => {
		const isExpanded = button.getAttribute("aria-expanded") === "true";
		button.setAttribute("aria-expanded", !isExpanded);

		if (!isExpanded) {
			faqBoxes[index].style.display = "block";
		} else {
			faqBoxes[index].style.display = "none";
		}
	});
});
