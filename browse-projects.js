function genProjectCard(project) {
    console.log(project);
    return `<div class="card shadow-sm">
                <img src="${project.thumbnail}"
                    class="card-img-top" alt="${project.name}">
                <h2 class="card-title">${project.name}</h2>
                <div class="card-body">
                    <p>${project.blurb}</p>
                </div>
            </div>`;
}

fetch("./projects.json")
    .then(result => result.json())
    .then(result => {
        console.log(result);
        let cols = [document.getElementById("project-col-1"), document.getElementById("project-col-2"), document.getElementById("project-col-3")];
        let colIndex = 0;
        for(key in result) {
            console.log(result[key])
            cols[colIndex].innerHTML += genProjectCard(result[key]);
            colIndex++;
            if(colIndex >= cols.length) {
                colIndex = 0;
            }
        }
    });
