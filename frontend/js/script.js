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

    document
    .getElementById("result")
    .innerHTML =

        "Hello " + name +
        "<br><br>" +

        "Target Role: " +
        role +

        "<br><br>" +

        "Readiness Score: "
        + score + "%" +

        "<br><br>" +

        "Missing Skills: <br>"
        + missingSkills.join(", ");
});
