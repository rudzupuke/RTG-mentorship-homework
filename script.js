"use strict";

// HELPER FUNCTIONS //

const createSearchInputField = () => {
  const searchInput = document.createElement("input");
  searchInput.setAttribute("type", "text");
  searchInput.setAttribute("placeholder", "Spell...");

  return searchInput;
};

const createSearchButton = () => {
  const searchButton = document.createElement("button");
  searchButton.innerText = "Search Spell";

  return searchButton;
};

const createAllSpellContainer = () => {
  const spellsElement = document.getElementById("spells");
  spellsElement.innerHTML = "";

  return spellsElement;
};

const createSpellContainer = (spellsName, spellsDesc) => {
  const spellContainer = document.createElement("div");
  spellContainer.className = "spell__container";
  spellContainer.append(spellsName);
  spellContainer.append(spellsDesc);

  return spellContainer;
};

const createSpellsName = (spell) => {
  const spellsName = document.createElement("div");
  spellsName.className = "spells__name wand";
  spellsName.innerHTML = spell;

  return spellsName;
};

const createSpellsDesc = (description) => {
  const spellsDesc = document.createElement("div");
  spellsDesc.className = "spells__description hidden";
  spellsDesc.innerHTML = description;

  return spellsDesc;
};

const toggleOneSpellsDesc = (spellsDesc, spellsName) => {
  spellsName.classList.toggle("wand");
  spellsName.classList.toggle("wand-bottom");
  spellsDesc.classList.toggle("hidden");
};

const closeSpell = (spellName, spellDesc) => {
  spellDesc.classList.add("hidden");
  spellName.classList.remove("wand-bottom");
  spellName.classList.add("wand");
};

const selectSpellNameAndDesc = (spellContainer) => {
  const spellName = spellContainer.querySelector(".spells__name");
  const spellDesc = spellContainer.querySelector(".spells__description");

  return { spellName, spellDesc };
};

const closeOtherSpellsDesc = (currentSpellDesc) => {
  const allSpells = document.querySelectorAll(".spell__container");

  allSpells.forEach((spellContainer) => {
    const { spellName, spellDesc } = selectSpellNameAndDesc(spellContainer);

    if (currentSpellDesc === spellDesc) {
      return;
    }

    closeSpell(spellName, spellDesc);
  });
};

const showAllSpells = () => {
  const allSpells = document.querySelectorAll("#spells .spell__container");

  allSpells.forEach((spellContainer) => {
    const { spellName, spellDesc } = selectSpellNameAndDesc(spellContainer);

    spellDesc.classList.remove("hidden");
    spellName.classList.add("wand-bottom");
    spellName.classList.add("wand");
  });
};
const closeAllSpells = () => {
  const allSpells = document.querySelectorAll("#spells .spell__container");

  allSpells.forEach((spellContainer) => {
    const { spellName, spellDesc } = selectSpellNameAndDesc(spellContainer);

    closeSpell(spellName, spellDesc);
  });
};

const spellList = () => {
  const spellData = [
    {
      spell: "Expecto Patronum (Patronus Charm)",
      description:
        "This ancient and mysterious charm conjures a magical guardian, a projection of all your most positive feelings.",
    },
    {
      spell: "Confundo (Confundus charm)",
      description:
        "The Confundus Charm (Confundo) is a charm which confuses and misdirects the target. It works on living and inanimate things, as long as the target has a mind to be confused.",
    },
    {
      spell: "Obliviate (Memory charm)",
      description:
        "The Memory Charm, also known as the Forgetfulness Charm, is a charm that can be used to erase specific memories from an individual's mind.",
    },
    {
      spell: "Reparo (Mending charm)",
      description:
        "The Mending Charm, also known as the Repairing Charm (Reparo), is a charm that can be used to seamlessly repair a broken object and works on most materials.",
    },
    {
      spell: "Riddikulus (Boggart-Banishing spell)",
      description:
        "The Boggart-Banishing Spell (Riddikulus) is a charm that is used to defeat a Boggart. It causes the creature to assume a form that is humorous to the caster, along with a whip-crack noise, thereby taking away the Boggart's ability to terrorise.",
    },
    {
      spell: "Accio (Summoning charm)",
      description:
        "The Summoning Charm (Accio) is a charm that summons an object toward the caster. It is able to summon objects in direct line of sight of the caster, as well as things out of view, by calling the object aloud after the incantation",
    },
    {
      spell: "Alohomora (Unlocking charm)",
      description:
        "The Unlocking Charm (Alohomora), also known as the Thief's Friend, is a charm that unlocks objects such as doors or windows.",
    },
    {
      spell: "Petrificus Totalus (Full body-bind curse)",
      description:
        "The Full Body-Bind Curse (Petrificus Totalus), also known as the Body Freezing Spell, is a curse that temporarily paralyses the opponent.",
    },
    {
      spell: "Wingardium Leviosa (Levitation charm)",
      description:
        "The Levitation Charm (Wingardium Leviosa) is a charm to make objects fly, or levitate.",
    },
    {
      spell: "Lumos (Wand-lighting charm)",
      description:
        "The Wand-Lighting Charm (Lumos) is a charm that illuminates the tip of the caster's wand, allowing the caster to see in the dark.",
    },
    {
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
    {
      spell: "Want to learn more spells?",
      description: `You can do by clicking here 👉
              <a class="button"
                href="https://harrypotter.fandom.com/wiki/List_of_spells"
                target="_blank"
                >Learn More</a
              >`,
    },
  ];

  const searchInput = createSearchInputField();
  document.getElementById("search-container").appendChild(searchInput);
  const searchButton = createSearchButton();
  document.getElementById("search-container").appendChild(searchButton);

  const allSpellsContainer = createAllSpellContainer();
  const handleClickOnSpell = (spellsName, spellsDesc) => {
    closeOtherSpellsDesc(spellsDesc);
    toggleOneSpellsDesc(spellsDesc, spellsName);
  };

  spellData.forEach((spellEntry) => {
    const { spell, description } = spellEntry;

    const spellsName = createSpellsName(spell);
    const spellsDesc = createSpellsDesc(description);

    spellsName.onclick = () => {
      handleClickOnSpell(spellsName, spellsDesc);
    };

    document.querySelector(".show-spells").onclick = () => {
      showAllSpells();
    };

    document.querySelector(".hide-spells").onclick = () => {
      closeAllSpells();
    };

    const spellContainer = createSpellContainer(spellsName, spellsDesc);

    allSpellsContainer.append(spellContainer);
  });

  searchInput.oninput = (e) => {
    const allSpells = document.querySelectorAll("#spells .spell__container");
    console.log(e.target.value);

    allSpells.forEach((spellContainer) => {
      const { spellName, spellDesc } = selectSpellNameAndDesc(spellContainer);
      spellName.classList.add("hidden");
      spellDesc.classList.add("hidden");
      if (
        spellName.innerText.toLowerCase().includes(e.target.value) ||
        spellName.innerText.includes(e.target.value)
      ) {
        spellDesc.classList.remove("hidden");
        spellName.classList.remove("hidden");
        spellName.classList.remove("wand");
        spellName.classList.add("wand-bottom");
      }
    });
  };
};

spellList();
