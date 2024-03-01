function genProjectCard(project) {
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
        let colHeights = [0, 0, 0]
        let colIndex = 0;
        for(key in result) {
            console.log(`${colIndex}: ${cols[colIndex].lastChild.offsetHeight}`);
            cols[colIndex].innerHTML += genProjectCard(result[key]);
            colHeights[colIndex] += cols[colIndex].lastChild.offsetHeight;
            console.log(colHeights);
            for(i = 0; i < colHeights.length; i++) {
                if(colHeights[i] < colHeights[colIndex]) {
                    colIndex = i;
                }
            }
        }
    });
