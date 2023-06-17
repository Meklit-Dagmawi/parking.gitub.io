// Get booking form and table
const bookingForm = document.querySelector("#booking-form");
const bookingTable = document.querySelector("#booking-table tbody");

// Listen for form submit
bookingForm.addEventListener("submit", (event) => {
	event.preventDefault();
	// Get form data
	const name = event.target.querySelector("#name").value;
	const email = event.target.querySelector("#email").value;
	const phone = event.target.querySelector("#phone").value;
	const car = event.target.querySelector("#car").value;
	const date = event.target.querySelector("#date").value;
	// Insert data into table
	const row = bookingTable.insertRow(-1);
	row.innerHTML = `
		<td>${name}</td>
		<td>${email}</td>
		<td>${phone}</td>
		<td>${car}</td>
		<td>${date}</td>
		<td>$0.00</td>
		<td>
			<button class="pay-btn">Pay</button>
			<button class="remove-btn">Remove</button>
		</td>
	`;
	// Clear form
	event.target.reset();
});

// Listen for pay button click
bookingTable.addEventListener("click", (event) => {
	if (event.target.classList.contains("pay-btn")) {
		const row = event.target.closest("tr");
		row.cells[5].textContent = "$10.00";
	}
});

// Listen for remove button click
bookingTable.addEventListener("click", (event) => {
	if (event.target.classList.contains("remove-btn")) {
		const row = event.target.closest("tr");
		row.remove();
	}
});