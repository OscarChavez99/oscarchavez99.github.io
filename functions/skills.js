var skills = ["C# (.NET)", "C# (ASP.NET) Web Api", "C# (ASP.NET) Web App MVC", "Docker", 
"TypeScript (Angular)", "Azure DevOps", "Python", "JavaScript (Node.JS, Express)", "HTML 5", "CSS and Bootstrap", 
"PHP", "SQL", "phpMyAdmin", "GIT & GitHub", "C", "C++", "VPS", "JSON", "Microsoft Office"];

function getAllSkills() {
    return skills;
}

function getFourRandomSkills(){
    var num    = 0;
    var skills_copy = skills.slice();
    var four_skills = [];
    for (var i = 0; i < 4; i++) {
        num = Math.floor(Math.random() * skills_copy.length); //Random int number
        four_skills.push(skills_copy[num]); //Push element to the 3 size array
        skills_copy.splice(num, 1); //Delete element from the array
    }
    return four_skills;
}

function replaceSharpInArray(arr) {
    return arr.map(str => str.replace(/#/g, ' sharp'));
}