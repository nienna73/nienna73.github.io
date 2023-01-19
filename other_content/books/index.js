'use strict';

function loadRead() {
    let div = document.getElementById("read");
    let innerHTML = ``;
    let bookList = ["better_than_before.jpg","no_plot_no_problem.jpg",
                    "braiding_sweetgrass.jpg","ready_player_one.jpg",
                    "cinder.jpg",	"sleep_fix.jpg",
                    "divergent.jpg",	"small_angry_planet.jpg",
                    "heartstopper.jpg","song_of_achilles.jpg",
                    "hitchhikers_guide.jpg","supernatural_society.jpg",
                    "jonny_appleseed.jpg","will_grayson.jpg",
                    "nimona.jpg",];
    for (let book of bookList) {
        let newHTML = `<div class="card space" style="width: 18rem;">
                        <img class="card-img-top" src="../img/read/${book}" height="300px" widht="150px" alt="Card image cap">
                        </div>`
        innerHTML += newHTML;
    }
    div.innerHTML = innerHTML;
}


function loadReading() {
    let div = document.getElementById("reading");
    let innerHTML = ``;
    let bookList = ["evelyn_hugo.jpg", "night_of_the_living_rez.jpg",
                    "find_self_kitchen.jpg","selection.jpg",
                    "life_can_be_better.jpg",];
    for (let book of bookList) {
        let newHTML = `<div class="card space" style="width: 18rem;">
                        <img class="card-img-top" src="../img/reading/${book}" height="300px" widht="150px" alt="Card image cap">
                        </div>`
        innerHTML += newHTML;
    }
    div.innerHTML = innerHTML;
}