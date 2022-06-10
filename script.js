let hungriness = 5
let energy = 5
let happiness = 5
let cleanliness = 4


function feed() {
    hungriness -= 5
    if(hungriness < 0) {
        hungriness = 0
    }
}

function walk() {
    happiness += 3
    energy -= 3
    if(happiness > 10) {
        happiness = 10
    }
    if(energy > 10) {
        energy = 10
    }
}

function clean() {
    cleanliness += 5
}

function pet() {
    happiness += 5
    if(happiness > 10) {
        happiness = 10
    }
}

function getMood() {
    if(energy == 0) {
        return "asleep"
    }else if(energy >= 2) {
        return "tired"
    } else if(hungriness >= 2) {
        return "hungry"
    } else if(cleanliness <=3) {
        return "dirty"
    } else if(happiness >= 7) {
        return "happy"
    } else if(happiness >= 4) {
        return "ok"
    } else {
        return "sad"
    }
}

function passTime() {
    hungriness--;
    cleanliness--;
    if(energy == 0) {
        energy = 10;
    } else {
        energy--
    }
    if(hungriness >= 7){
        happiness--;
    }
    if(cleanliness < 3) {
        hapiness --
    }
    if (hungriness > 10) {
        hungriness = 10
    }
    if(cleanliness < 0) {
        cleanliness = 0
    }
    if(happiness < 0) {
        hapiness = 0
    }

}

