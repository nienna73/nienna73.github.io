'use strict';

function loadBacklog() {
    let div = document.getElementById("backlog");
    let innerHTML = ``;
    let imgList = ["a_little_to_the_left.jpg", "monkey_island.jpg",
                    "a_short_hike.jpg","night_in_the_woods.jpg",
                    "aka.jpg",		"old_mans_journey.jpg",
                    "aspire.jpg",	"olive_town.jpg",
                    "astronomical.jpg","ooblets.jpg",
                    "campfire.jpg",	"oxenfree.jpg",
                    "cat_cafe_manager.jpg","pode.jpg",
                    "coffee_talk.jpg",	"portia.jpg",
                    "curious_expedition.jpg","potion_permit.jpg",
                    "dorfromantik.jpg","roki.jpg",
                    "first_tree.jpg",	"strange_horticulture.jpg",
                    "garden_story.jpg","tangle_tower.jpg",
                    "greak.jpg",	"time_on_frog_island.jpg",
                    "grow.jpg",	"tunic.jpg",
                    "haven_park.jpg",	"turnip_boy.jpg",
                    "kamiko.jpg",	"unpacking.jpg",
                    "lilas_sky_ark.jpg","wylde_flowers.jpg",
                    "little_misfortune.jpg","wytchwood.jpg",
                    "lost_in_play.jpg","yonder.jpg",];
    for (let img of imgList) {
        let newHTML = `<div class="card space" style="width: 18rem;">
                        <img class="card-img-top" src="../img/backlog/${img}" height="300px" widht="150px" alt="Card image cap">
                        </div>`
        innerHTML += newHTML;
    }
    div.innerHTML = innerHTML;
}

function loadPlaying() {
    let div = document.getElementById("playing");
    let innerHTML = ``;
    let imgList = ["beacon_pines.jpg", "disney.jpg",
        "cozy_grove.jpg", "star_wars.jpg"];
    for (let img of imgList) {
        let newHTML = `<div class="card space" style="width: 18rem;">
                        <img class="card-img-top" src="../img/playing/${img}" height="300px" widht="150px" alt="Card image cap">
                        </div>`
        innerHTML += newHTML;
    }
    div.innerHTML = innerHTML;
}

function loadPlayed() {
    let div = document.getElementById("played");
    let innerHTML = ``;
    let imgList = ["acnh.jpg", "florence.jpg", "ori.jpg", "wtpwa.jpg"];
    for (let img of imgList) {
        let newHTML = `<div class="card space" style="width: 18rem;">
                        <img class="card-img-top" src="../img/played/${img}" height="300px" widht="150px" alt="Card image cap">
                        </div>`
        innerHTML += newHTML;
    }
    div.innerHTML = innerHTML;
}

