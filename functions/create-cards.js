function CreateSkillCards(sanitizedSkills, skillsHtmlContainer, originalSkills) {
    let skillImg = "";
    for (let i = 0; i < sanitizedSkills.length; i++) { 
        skillImg = "public/img/skills/";
        skillImg += sanitizedSkills[i];

        skillsHtmlContainer.innerHTML += `
            <div class="col-6 col-md-4 col-lg-3 d-flex justify-content-center mb-4">
                <div class="card" style="width: 14.2rem;">
                    <div class="card-body">
                        <h5 class="card-title">${originalSkills[i]}</h5>
                        <img src="${skillImg}.png" class="card-img-top img-fluid" alt="${originalSkills[i]}">
                        <p class="card-text"></p>
                        <a href="https://www.google.com/search?q=${encodeURIComponent(originalSkills[i])}" target="_blank" class="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
        `;
    }
}

function CreateIndexCards(fourSanitizedSkills, fourSkillsHtmlContainer, originalFourSkills) {
    let skillImg = "";
    for (let i = 0; i < 4; i++) {
        // image route
        skillImg = "public/img/skills/";
        skillImg += fourSanitizedSkills[i];
        
        fourSkillsHtmlContainer.innerHTML += `
            <div class="col-6 col-md-4 col-lg-3 d-flex justify-content-center mb-4">
                <div class="card" style="width: 17rem;">
                    <div class="card-body">
                        <h5 class="card-title">${originalFourSkills[i]}</h5>
                        <img src="${skillImg}.png" class="card-img-top img-fluid" alt="${originalFourSkills[i]}">
                        <p class="card-text"></p>
                        <a href="https://www.google.com/search?q=${encodeURIComponent(originalFourSkills[i])}" target="_blank" class="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
        `;
    }
}
