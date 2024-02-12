var skills = ["Python", "C# (.NET)", "APIs (ASP.NET) MVC", "TypeScript (Angular)", 
"JavaScript (Node.JS, Express)", "HTML 5", "CSS and Bootstrap", "PHP", "SQL", "phpMyAdmin", 
"GIT & GitHub", "C", "C++", "VPS", "JSON", "Microsoft Office"];

function LoadSkills(){
    var num    = 0;
    var skills_copy = skills.slice();
    var four_skills = [];
    for (var i = 0; i < 4; i++) {
        num = Math.floor(Math.random() * skills_copy.length); //Random int number
        four_skills.push(skills_copy[num]); //Push element to the 3 size array
        skills_copy.splice(num, 1); //Delete element from the array
    }
    return [skills, four_skills]; //Return two or more vars
}