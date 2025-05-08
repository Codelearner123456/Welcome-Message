const fullName = document.getElementById('name');
const city = document.getElementById('city');
const hobby = document.getElementById('hobby');
const result = document.getElementById("result");

function buttonEvent(event) {
    event.preventDefault();

    const nameVal = fullName.value.trim();
    const cityVal = city.value.trim();
    const hobbyVal = hobby.value.trim();

    if (!nameVal || !cityVal || !hobbyVal) {
        alert("Please fill in all fields");
        return;
    }

    result.textContent = `Hi ${nameVal}! Welcome to ${cityVal}. Hope you enjoy ${hobbyVal} while you're here!`;

    // 🔥 Make the form expand visually
    document.querySelector(".application").classList.add("active");
}
