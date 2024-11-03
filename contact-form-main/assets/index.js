// Perform validation when the submit button is clicked
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Stop form submission

    let errors = 0;

    // Check the fields and show/hide error messages
    const formElements = [
        { id: "first-name", errorId: "first-name-err" },
        { id: "last-name", errorId: "last-name-err" },
        { id: "email", errorId: "email-err" },
        { id: "message", errorId: "message-err" }
    ];

    formElements.forEach(({ id, errorId }) => {
        const input = document.getElementById(id);
        const error = document.getElementById(errorId);
        if (!input.value.trim()) {
            input.classList.add("warning");
            error.style.display = "block";
            errors++;
        } else {
            input.classList.remove("warning");
            error.style.display = "none";
        }
    });

    // Check radio buttons
    const radioError = document.getElementById("radioerr");
    if (!document.querySelector("input[name='queryType']:checked")) {
        radioError.style.display = "block";
        errors++;
    } else {
        radioError.style.display = "none";
    }

    // Check checkbox
    const check = document.getElementById("check");
    const checkError = document.getElementById("checkerr");
    if (!check.checked) {
        checkError.style.display = "block";
        errors++;
    } else {
        checkError.style.display = "none";
    }

    // If there are no errors, show success message
    const successMsg = document.getElementById("success-msg");
    if (errors === 0) {
        successMsg.style.visibility = "visible";
        successMsg.style.display = "block";
    } else {
        successMsg.style.visibility = "hidden";
        successMsg.style.display = "none";
    }
});

// Change background color of radio button
const radios = document.querySelectorAll('input[type="radio"]');
radios.forEach(radio => {
    radio.onclick = () => {
        radios.forEach(radio => {
            radio.parentElement.style.backgroundColor = radio.checked ? 'var(--clr-Light-Green)' : 'var(--clr-White)';
        });
    }
});
