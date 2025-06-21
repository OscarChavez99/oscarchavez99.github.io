function CreateSkillCards(sanitizedSkills, rowContainer, allSkills){
    let skillImg = "";
    for (var i = 0; i<sanitizedSkills.length; i++) { 
        // image route
        skillImg = "public/img/skills/"; 
        skillImg += sanitizedSkills[i];
        
        rowContainer.innerHTML += `
        <div class="card mx-2 mb-3" style="width: 14.2rem;">
                <div class="card-body">
                    <h5 class="card-title">${allSkills[i]}</h5>
                    <img src="${skillImg}.png" class="card-img-top img-fluid" alt="${allSkills[i]}">
                    <p class="card-text"></p>
                    <a href="https://www.google.com/search?q=${encodeURIComponent(allSkills[i])}" target="_blank" class="btn btn-primary">Learn More</a>
                </div>
            </div>
        `;
    }
}

function CreateIndexCards(fourSanitizedSkills, rowContainer, fourSkills) {
    let skillImg = "";
    for (let i = 0; i < 4; i++) {
        // image route
        skillImg = "public/img/skills/";
        skillImg += fourSanitizedSkills[i];
        
        rowContainer.innerHTML += `
            <div class="col-6 col-md-4 col-lg-3 d-flex justify-content-center mb-4">
                <div class="card" style="width: 17rem;">
                    <div class="card-body">
                        <h5 class="card-title">${fourSkills[i]}</h5>
                        <img src="${skillImg}.png" class="card-img-top img-fluid" alt="${fourSkills[i]}">
                        <p class="card-text"></p>
                        <a href="https://www.google.com/search?q=${encodeURIComponent(fourSkills[i])}" target="_blank" class="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
        `;
    }
}
