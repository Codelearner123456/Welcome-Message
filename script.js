const fullName = document.getElementById('name');
const city = document.getElementById('city');
const hobby = document.getElementById('hobby');

function buttonEvent() {
    event.preventDefault();
    console.log(fullName + " " + city + " " + hobby);

    if (fullName !== "" || city !== "" || hobby !== "" || fullName, city, hobby === "") {
        alert("Please fill the following fields");
    } else {
        `Hi ${fullName.textContent}! Welcome to ${city.textContent}. Hope you enjoy ${hobby.textContent} while you're here!`;
    }
}


