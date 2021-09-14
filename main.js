const actions = Array.from(document.querySelectorAll('[data-action]'));

let counter = localStorage.getItem("counter") || 0;

document.querySelector(".counter-value").innerText = counter;

actions.forEach(action => {
	action.addEventListener('click', () => {
		const action_name = action.dataset.action;

		action.classList.add("animate");

		setTimeout(() => {
			action.classList.remove("animate");
		}, 1000);

		switch (action_name) {
			case 'increase':
				counter++;
				break;
			case 'decrease':
				counter--;
				break;
			case 'reset':
				counter = 0;
				break;
			case 'save':
				localStorage.setItem("counter", counter);
				break;
			case 'clear-save':
				localStorage.removeItem("counter");
				break;
		}

		document.querySelector(".counter-value").innerText = counter;
	});
});