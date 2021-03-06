"use strict";

// HELPER FUNCTIONS //

///// CREATING SEARCH INPUT FIELD AND BUTTON /////
const createSearchInputField = () => {
    const searchInput = document.createElement("input");
    searchInput.classList.add("search-input");
    searchInput.setAttribute("type", "text");
    searchInput.setAttribute("id", "search-input");
    searchInput.setAttribute("placeholder", "Search spell..");

    return searchInput;
};

const createSearchClearButton = () => {
    const clearButton = document.createElement("button");
    clearButton.classList.add("button");
    clearButton.innerText = "Clear";

    return clearButton;
};

///// CREATING SPELL CONTAINERS /////

const getAllSpellContainer = () => {
    const spellsElement = document.getElementById("spells-container");
    spellsElement.innerHTML = "";

    return spellsElement;
};

const createOneSpellContainer = (spellsName, spellsDesc) => {
    const spellContainer = document.createElement("li");
    spellContainer.className = "spell__container";
    spellContainer.append(spellsName);
    spellContainer.append(spellsDesc);

    return spellContainer;
};

const createSpellsName = (spell, index) => {
    const spellsName = document.createElement("button");
    spellsName.className = "spells__name wand";
    spellsName.innerHTML = spell;
    spellsName.setAttribute("id", `spell-${index}`);
    spellsName.setAttribute("arica-controls", `description-${index}`);

    return spellsName;
};

const createSpellsDesc = (description, index) => {
    const spellsDesc = document.createElement("div");
    spellsDesc.className = "spells__description hidden";
    spellsDesc.innerHTML = description;
    spellsDesc.setAttribute("id", `description-${index}`);
    spellsDesc.setAttribute("aria-expanded", "false");
    spellsDesc.setAttribute("aria-role", "region");
    spellsDesc.setAttribute("aria-labelledby", `spell-${index}`);

    return spellsDesc;
};

/////

const toggleSpell = (spellsDesc, spellsName) => {
    spellsName.classList.toggle("wand-bottom");
    spellsName.classList.toggle("wand");
    spellsDesc.classList.toggle("hidden");
    if (spellsDesc.getAttribute("aria-expanded") === "false") {
        spellsDesc.setAttribute("aria-expanded", "true");
    } else {
        spellsDesc.setAttribute("aria-expanded", "false");
    }
};

const closeSpell = (spellName, spellDesc) => {
    spellDesc.classList.add("hidden");
    spellDesc.setAttribute("aria-expanded", "false");
    spellName.classList.remove("wand-bottom");
    spellName.classList.add("wand");
};

const showSpell = (spellName, spellDesc) => {
    spellDesc.classList.remove("hidden");
    spellDesc.setAttribute("aria-expanded", "true");
    spellName.classList.add("wand-bottom");
    spellName.classList.remove("wand");
};

const selectSpellNameAndDesc = (spellContainer) => {
    const spellName = spellContainer.querySelector(".spells__name");
    const spellDesc = spellContainer.querySelector(".spells__description");

    return { spellName, spellDesc };
};

const getAllSpells = () => {
    return document.querySelectorAll(".spell__container");
};

const closeOtherSpellsDesc = (currentSpellDesc) => {
    const allSpells = getAllSpells();

    allSpells.forEach((spellContainer) => {
        const { spellName, spellDesc } = selectSpellNameAndDesc(spellContainer);

        if (currentSpellDesc === spellDesc) {
            return;
        }

        closeSpell(spellName, spellDesc);
    });
};

let allSpellsOpen = false;

const showAllSpells = () => {
    const allSpells = document.querySelectorAll(
        "#spells-container .spell__container"
    );

    allSpells.forEach((spellContainer) => {
        const { spellName, spellDesc } = selectSpellNameAndDesc(spellContainer);

        showSpell(spellName, spellDesc);
    });
    allSpellsOpen = true;
};
const closeAllSpells = () => {
    const allSpells = document.querySelectorAll(
        "#spells-container .spell__container"
    );

    allSpells.forEach((spellContainer) => {
        const { spellName, spellDesc } = selectSpellNameAndDesc(spellContainer);

        closeSpell(spellName, spellDesc);
    });
    allSpellsOpen = false;
};

///// SEARCH INPUT ////

const searchInput = createSearchInputField();
document.getElementById("search-container").appendChild(searchInput);
const clearButton = createSearchClearButton();
document.getElementById("search-container").appendChild(clearButton);

const showSearchedSpells = (e) => {
    const allSpells = document.querySelectorAll(
        "#spells-container .spell__container"
    );

    allSpells.forEach((spellContainer) => {
        const { spellName, spellDesc } = selectSpellNameAndDesc(spellContainer);

        if (
            e.target.value.length > 0 &&
            spellName.innerText
                .toLowerCase()
                .includes(e.target.value.toLowerCase())
        ) {
            showSpell(spellName, spellDesc);
            spellContainer.classList.remove("hidden");
        } else if (e.target.value.length === 0) {
            spellContainer.classList.remove("hidden");
            closeSpell(spellName, spellDesc);
        } else {
            closeSpell(spellName, spellDesc);
            spellContainer.classList.add("hidden");
        }
    });
};

const handleClickOnClear = () => {
    const allSpells = document.querySelectorAll(
        "#spells-container .spell__container"
    );
    searchInput.value = "";

    allSpells.forEach((spellContainer) => {
        spellContainer.classList.remove("hidden");
    });
    closeAllSpells();
};

const checkIfOtherSpellsStillOpen = () => {
    const allSpellNames = document.querySelectorAll(
        "#spells-container .spells__name"
    );
    let openedSpells = 0;
    let closedSpells = 0;
    allSpellNames.forEach((spellName) => {
        if (spellName.classList.contains("wand-bottom")) {
            openedSpells += 1;
        } else {
            closedSpells += 1;
        }
    });

    if (openedSpells > 1) {
        return true;
    } else if (openedSpells <= 1) {
        return false;
    }
};

const spellList = () => {
    const spellData = [
        {
            en: {
                spell: "Expecto Patronum (Patronus Charm)",
                description:
                    "This ancient and mysterious charm conjures a magical guardian, a projection of all your most positive feelings.",
            },
        },
        {
            en: {
                spell: "Confundo (Confundus charm)",
                description:
                    "The Confundus Charm (Confundo) is a charm which confuses and misdirects the target. It works on living and inanimate things, as long as the target has a mind to be confused.",
            },
        },
        {
            en: {
                spell: "Obliviate (Memory charm)",
                description:
                    "The Memory Charm, also known as the Forgetfulness Charm, is a charm that can be used to erase specific memories from an individual's mind.",
            },
        },
        {
            en: {
                spell: "Reparo (Mending charm)",
                description:
                    "The Mending Charm, also known as the Repairing Charm (Reparo), is a charm that can be used to seamlessly repair a broken object and works on most materials.",
            },
        },
        {
            en: {
                spell: "Riddikulus (Boggart-Banishing spell)",
                description:
                    "The Boggart-Banishing Spell (Riddikulus) is a charm that is used to defeat a Boggart. It causes the creature to assume a form that is humorous to the caster, along with a whip-crack noise, thereby taking away the Boggart's ability to terrorise.",
            },
        },
        {
            en: {
                spell: "Accio (Summoning charm)",
                description:
                    "The Summoning Charm (Accio) is a charm that summons an object toward the caster. It is able to summon objects in direct line of sight of the caster, as well as things out of view, by calling the object aloud after the incantation",
            },
        },
        {
            en: {
                spell: "Alohomora (Unlocking charm)",
                description:
                    "The Unlocking Charm (Alohomora), also known as the Thief's Friend, is a charm that unlocks objects such as doors or windows.",
            },
        },
        {
            en: {
                spell: "Petrificus Totalus (Full body-bind curse)",
                description:
                    "The Full Body-Bind Curse (Petrificus Totalus), also known as the Body Freezing Spell, is a curse that temporarily paralyses the opponent.",
            },
        },
        {
            en: {
                spell: "Wingardium Leviosa (Levitation charm)",
                description:
                    "The Levitation Charm (Wingardium Leviosa) is a charm to make objects fly, or levitate.",
            },
        },
        {
            en: {
                spell: "Lumos (Wand-lighting charm)",
                description:
                    "The Wand-Lighting Charm (Lumos) is a charm that illuminates the tip of the caster's wand, allowing the caster to see in the dark.",
            },
        },
        {
            en: {
                spell: "Unforgivable curses",
                description: ` The Unforgivable Curses are three of the most powerful and sinister
              spells known to the wizarding world:
              <ul>
                <li>
                  <span class="bold">Avada Kedavra (Killing curse)</span>
                  <ul>
                    <li>
                      When cast successfully on a living person or creature, the curse
                      causea instantaneous and painless death, without causing any
                      injury to the body, and without any trace of violence.
                    </li>
                  </ul>
                </li>
                <li>
                  <span class="bold">Crucio (Cruciatus curse)</span>
                  <ul>
                    <li>
                      When cast successfully on a fellow human being or living
                      creature, the curse inflicted intense, excruciating physical
                      pain on the victim, and would result in insanity if the victim
                      was subjected to it for a prolonged time.
                    </li>
                  </ul>
                </li>
                <li>
                  <span class="bold">Imperio (Imperius curse)</span>
                  <ul>
                    <li>
                      When cast successfully, the curse placed the victim completely
                      under the caster's control, though a person with exceptional
                      strength of will could resist it.
                    </li>
                  </ul>
                </li>
              </ul>`,
            },
        },
        {
            en: {
                spell: "Want to learn more spells?",
                description: `You can do by clicking here ????
              <a class="button"
                href="https://harrypotter.fandom.com/wiki/List_of_spells"
                target="_blank"
                >Learn More</a
              >`,
            },
        },
    ];

    const allSpellsContainer = getAllSpellContainer();

    const handleClickOnSpell = (spellsName, spellsDesc) => {
        if (allSpellsOpen) {
            toggleSpell(spellsDesc, spellsName);

            if (!checkIfOtherSpellsStillOpen()) {
                allSpellsOpen = false;
            }
        } else {
            closeOtherSpellsDesc(spellsDesc);
            toggleSpell(spellsDesc, spellsName);
        }
    };

    spellData.forEach((spellEntry, index) => {
        const { spell, description } = spellEntry.en;

        const spellsName = createSpellsName(spell, index);
        const spellsDesc = createSpellsDesc(description, index);

        spellsName.onclick = () => {
            handleClickOnSpell(spellsName, spellsDesc);
        };

        document.querySelector(".show-spells").onclick = () => {
            showAllSpells();
        };

        document.querySelector(".hide-spells").onclick = () => {
            closeAllSpells();
        };

        const spellContainer = createOneSpellContainer(spellsName, spellsDesc);

        allSpellsContainer.append(spellContainer);
    });

    searchInput.oninput = (e) => showSearchedSpells(e);

    clearButton.onclick = () => handleClickOnClear();
};

spellList();

//// MOBILE NAVIGATION ////

const navButton = document.querySelector(".nav__mobile-toggle");
const navList = document.querySelector(".nav__items");

const showNavList = () => {
    if (navList.getAttribute("data-visible") === "false") {
        navList.setAttribute("data-visible", "true");
        navButton.setAttribute("aria-expanded", "true");
    } else {
        navList.setAttribute("data-visible", "false");
        navButton.setAttribute("aria-expanded", "false");
    }
};

navButton.onclick = () => showNavList();
