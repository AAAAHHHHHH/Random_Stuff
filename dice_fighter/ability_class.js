class Ability {
    constructor(name, damage_range, chance, aspect, description, type) {
        this.name = name
        this.damage_range = damage_range
        this.chance = chance
        this.aspect = aspect
        this.discription = description
        this.type = type
        this.missNumber = 0
    }
    useAbility() {
        if (this.type === 'Heal') {

        }
        if (this.type === 'Attack') {
            let miss = Math.random()
            if (miss <= this.chance) {
                let enemyDefense = POSSIBLE_ENEMIES[ENEMY_INDEX].defense
                let damageDone = (PLAYER_ATTACK * Math.floor(Math.random() * this.damage_range)) - enemyDefense
                POSSIBLE_ENEMIES[ENEMY_INDEX].health -= damageDone
            } else {
                missArea.innerHTML = 'Miss!'
                setTimeout(function() {
                    missArea.innerHTML = '';
                }, 1000);
                this.missNumber += 1
                setTimeout(function() {this.missNumber = 0}, 150000)
                if (this.missNumber > 5) {
                    muchMissArea.innerHTML = 'Man you suck at this.'
                } else if (this.missNumber > 10) {
                    muchMissArea.innerHTML = 'You should really play something else.'
                }
                console.log('Misses:' + this.missNumber)
            }
        }
        if (this.type === 'Defend') {

        }
    }
    showDescription() {
        descriptionArea.innerHTML = this.discription
    }
}