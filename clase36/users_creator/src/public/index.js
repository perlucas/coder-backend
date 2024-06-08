document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const formData = new FormData(event.target);
    const userData = {
        name: formData.get("name"),
        age: parseInt(formData.get("age")),
        username: formData.get("username"),
        password: formData.get("password")
    };

    // Send form data as JSON to the endpoint
    fetch('/api/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            // Handle successful registration
            console.log("User registered successfully:", data);
            alert("User registered successfully!");

            document.getElementById("registrationForm").reset();
        })
        .catch(error => {
            // Handle error
            console.error("Error registering user:", error.message);
            alert("Error registering user. Please try again later.");
        });
});
