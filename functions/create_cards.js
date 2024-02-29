function CreateCards(all_skills, skill_img, rowContainer){
    
    for (var i = 0; i<all_skills.length; i++) { 
        skill_img = "public/img/skills/"; //image route
        // Trim '#'
        /*if (all_skills[i] == "C# (.NET)") 
            skill_img += "C sharp";*/
        if (all_skills[i].includes('#')){
            skill_img += all_skills[i].replace('#', ' sharp');
        }

        else { 
            skill_img += all_skills[i]; //skill_image = image route + image name
            console.log(all_skills[i]);
        }
        rowContainer.innerHTML += `
        <div class="card mx-2 mb-3" style="width: 15.8rem;">
                <div class="card-body">
                    <h5 class="card-title">${all_skills[i]}</h5>
                    <img src="${skill_img}.png" class="card-img-top img-fluid" alt="${all_skills[i]}">
                    <p class="card-text"></p>
                    <a href="https://www.google.com/search?q=${encodeURIComponent(all_skills[i])}" target="_blank" class="btn btn-primary">Learn More</a>
                </div>
            </div>
        `;
    }
}