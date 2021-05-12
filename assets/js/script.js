 fetch("assets/json/movies.json")
     .then(response => response.json())
     .then(function (data) {
         console.table(data.results);

         const myArray = data.results;


         //Récupération des notes dans la console
         myArray.forEach(element => { 
            let ratings = Math.round(element.vote_average / 2) + "/5"
            movies.innerHTML +=

            `<div class="col-3">
                <div class="card" style="width:18rem;">
                    <img src="${element.poster_path}" class="card-img-top"
                        alt="">
                    <div class="card-body">
                        <h5 class="card-title">${element.original_title}</h5>
                        <div class="stars">${ratings}</div>
                        <p class="card-text">${element.overview}</p>
                    </div>
                </div>
            </div>`


         });

         //création d'une étoile
         let star = document.createElement("img");
         star.setAttribute("src", "/assets/img/star.png")
         star.setAttribute("alt", "étoiles");
         console.log(star);
     });
