function CreateSkillCards(sanitizedSkills, rowContainer, allSkills){
    let skill_img = "";
    for (var i = 0; i<sanitizedSkills.length; i++) { 
        // image route
        skill_img = "public/img/skills/"; 
        skill_img += sanitizedSkills[i];
        
        rowContainer.innerHTML += `
        <div class="card mx-2 mb-3" style="width: 14.2rem;">
                <div class="card-body">
                    <h5 class="card-title">${allSkills[i]}</h5>
                    <img src="${skill_img}.png" class="card-img-top img-fluid" alt="${skill_img[i]}">
                    <p class="card-text"></p>
                    <a href="https://www.google.com/search?q=${encodeURIComponent(allSkills[i])}" target="_blank" class="btn btn-primary">Learn More</a>
                </div>
            </div>
        `;
    }
}

function CreateIndexCards(fourSanitizedSkills, rowContainer, four_skills) {
    let skill_img = "";
    for (let i = 0; i < 4; i++) {
        skill_img = "public/img/skills/";
        skill_img += fourSanitizedSkills[i];
        rowContainer.innerHTML += `
            <div class="card mx-3 mb-3" style="width: 17rem;">
                <div class="card-body">
                    <h5 class="card-title">${four_skills[i]}</h5>
                    <img src="${skill_img}.png" class="card-img-top img-fluid" alt="${skill_img[i]}">
                    <p class="card-text"></p>
                    <a href="https://www.google.com/search?q=${encodeURIComponent(four_skills[i])}" target="_blank" class="btn btn-primary">Learn More</a>
                </div>
            </div>
        `;
    }
}