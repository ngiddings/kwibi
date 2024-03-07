function genCreatorRow(creator) {
    console.log(creator);
    return `<li class="list-group-item creatorListItem">
                <div class="row p-3">
                    <div class="col-3 imgIcon">
                        <img src="images/${creator.photo}"
                            class="card-img-top" alt="${creator.name}">
                    </div>
                    <div class="col-8 m-1">
                        <h2>${creator.name}</h2>
                        <p>${creator.blurb}</p>
                    </div>
                </div>
            </li>`;
}

fetch("./creators.json")
    .then(result => result.json())
    .then(result => {
        console.log(result);
        for(key in result) {
            console.log(result[key])
            document.getElementById("creator-list").innerHTML += genCreatorRow(result[key]);
        }
    });
