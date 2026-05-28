document
.getElementById("analyzeButton")
.addEventListener("click", function () {

    let name =
        document.getElementById("name")
        .value;

    let skills =
        document.getElementById("skills")
        .value
        .toLowerCase()
        .split(",");

    let role =
        document.getElementById("role")
        .value;

    let roleSkills = {

        "Java Developer": [
            "java",
            "sql",
            "dsa",
            "git",
            "spring boot",
            "rest apis"
        ],

        "Frontend Developer": [
            "html",
            "css",
            "javascript",
            "react",
            "git"
        ],

        "Backend Developer": [
            "java",
            "sql",
            "spring boot",
            "rest apis",
            "dbms"
        ],

        "Software Engineer": [
            "java",
            "dsa",
            "dbms",
            "git",
            "sql"
        ],

        "Machine Learning Engineer": [
            "python",
            "machine learning",
            "numpy",
            "pandas"
        ]
    };

    let requiredSkills =
        roleSkills[role];

    let matchedSkills = 0;
    let missingSkills = [];

    for (let i = 0;
         i < requiredSkills.length;
         i++) {

        let skill =
            requiredSkills[i];

        if (skills.includes(skill)) {
            matchedSkills++;
        } else {
            missingSkills.push(skill);
        }
    }

    let score =
        Math.round(
            (matchedSkills /
             requiredSkills.length)
             * 100
        );
    let roadmap = "";

for (let i = 0;
     i < missingSkills.length;
     i++) {

    roadmap +=
        "Week " +
        (i + 1) +
        " → Learn " +
        missingSkills[i] +
        "<br>";
}
 let status = "";

if (score >= 80) {
    status = "Job Ready";
}
else if (score >= 50) {
    status = "Moderately Ready";
}
else {
    status = "Needs Improvement";
}   
document
.getElementById("result")
.innerHTML =

    "<h3>Hello " + name + "</h3>" +

    "<p><strong>Target Role:</strong> "
    + role + "</p>" +

    "<p><strong>Readiness Score:</strong> "
    + score + "%</p>" +

    "<p><strong>Status:</strong> "
    + status + "</p>" +

    "<p><strong>Missing Skills:</strong></p>" +

    "<ul>" +

    missingSkills
        .map(skill =>
            "<li>" + skill + "</li>")
        .join("") +

    "</ul>" +

    "<p><strong>Learning Roadmap:</strong></p>" +

    roadmap;
