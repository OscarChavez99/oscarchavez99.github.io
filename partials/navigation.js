document.write(`
<!--Bootstrap and JavaScript (responsive)-->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>

<div id="navbar-container">
<nav class="navbar navbar-expand-lg bg-dark navbar-dark" id="navbar">
    <div class="container">
        <a class="navbar-brand" href="/">Oscar Chavez</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link active" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="skills.html">Skills</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="contact.html">Contact</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
</div>
`);

document.addEventListener("DOMContentLoaded", function () {
    var currentPath = window.location.pathname;
    console.log("c: "+currentPath);
    // Remove '/' if exists
    currentPath = currentPath.replace(/^\/|\/$/g, '');
    // Get all 'nav-link' clases 
    var navLinks = document.querySelectorAll(".nav-link");
    // For each navLinks...
    navLinks.forEach(function (link) {
        //Get link but without '/'
        var linkPath = link.getAttribute("href").replace(/^\/|\/$/g, '');
        if (currentPath.includes(linkPath)) {
            //Remove 'active' to class if it's the current page to look opaque
            link.classList.remove("active");
        }
    });
});



