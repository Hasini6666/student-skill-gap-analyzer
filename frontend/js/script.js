document
.getElementById("analyzeButton")
.addEventListener("click", function () {

    let name =
        document.getElementById("name").value;

    let skills =
        document.getElementById("skills").value;

    let role =
        document.getElementById("role").value;

    document.getElementById("result").innerHTML =
        "Hello " + name +
        "! You selected " + role +
        " and entered skills: " + skills;
});
