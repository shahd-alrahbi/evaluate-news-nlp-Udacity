function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Shahd",
        "Khalifa",
        "saad",
        "Al-Rahbi",
        "Shahd Alrahbi"
    ]

    if(names.includes(inputText)) {
        alert("Welcome, Captain!")
    }
}

export { checkForName }
