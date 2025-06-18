function CreateCards(sanitizedSkills, rowContainer){
    var skill_img = "";
    for (var i = 0; i<sanitizedSkills.length; i++) { 
        // image route
        skill_img = "public/img/skills/"; 
        skill_img += sanitizedSkills[i];
        
        rowContainer.innerHTML += `
        <div class="card mx-2 mb-3" style="width: 15.8rem;">
                <div class="card-body">
                    <h5 class="card-title">${sanitizedSkills[i]}</h5>
                    <img src="${skill_img}.png" class="card-img-top img-fluid" alt="${sanitizedSkills[i]}">
                    <p class="card-text"></p>
                    <a href="https://www.google.com/search?q=${encodeURIComponent(sanitizedSkills[i])}" target="_blank" class="btn btn-primary">Learn More</a>
                </div>
            </div>
        `;
    }
}