// Create function and default initialSkills values to zero
function createCharacter(charName, catName = null, initialSkills = [0, 0, 0]) {

    // Convert the initial skills values into numbers.
    let fishingSkill = Number(initialSkills[0]);
    let miningSkill = Number(initialSkills[1]);
    let farmingSkill = Number(initialSkills[2]);

    // Ensure each initial skill does not exceed a maximum of 10.
    fishingSkill = fishingSkill > 10 ? 10 : fishingSkill;
    miningSkill = miningSkill > 10 ? 10 : miningSkill;
    farmingSkill = farmingSkill > 10 ? 10 : farmingSkill;

    // Increase a skill by one, unless it is an invalid type or already 10.
    function levelUp(skill) {
        if (typeof this[skill] === "number" && this[skill] < 10) {
            this[skill]++;
        }
    }

    // Add all given items to the end of the inventory.
    function grabItems(...items) {
        this.inventory.push(...items);
    }

    // Remove the first matching item as is inputed, if it is in the list.
    function dropItem(item) {
        let index = this.inventory.indexOf(item);

        if (index !== -1) {
            this.inventory.splice(index, 1);
        }
    }

    // Create the character with its properties and methods.
    let character = {
        characterName: charName,
        fishingSkill,
        miningSkill,
        farmingSkill,
        inventory: [],
        levelUp,
        grabItems,
        dropItem
    };

    // Add the cat property only when the cat name is not null.
    if (catName !== null) {
        character.catName = catName;
    }

    return character;
}

function describeCharacter(character) {

    // Calculate the sum of the three skills.
    let total = character.fishingSkill
              + character.miningSkill
              + character.farmingSkill;

    // Start the description with the character's name.
    let description = character.characterName;

    if (total < 10) {
        description += " is just starting out";
    } else {
        description += " is a skilled adventurer";
    }

    // Include the cat description only if the property exists.
    if ("catName" in character) {
        description += ` and has a cat ${character.catName}`;
    }

    description += ".";

    console.log(description);

    return description;
}

// Test the character creationm and methods
//let player = createCharacter("New Player", "Mittens", [3,4,5]);

//player.levelUp("farmingSkill");
//console.log(player.farmingSkill); 

//player.grabItems("Apple", "Peach");
//player.dropItem("Peach");
//console.log(...player.inventory); 

//describeCharacter(player); 

