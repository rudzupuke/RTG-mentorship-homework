"use strict";

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

  const spellsElement = document.getElementById("spells");
  spellsElement.innerHTML = "";

  const openSpellsDesc = (spellsDesc, spellsName) => {
    const isHidden = spellsDesc.className.includes("hidden");

    if (!isHidden) {
      spellsDesc.className = "spells__description hidden";
      spellsName.className = "spells__name wand";
    } else {
      spellsDesc.className = "spells__description";
      spellsName.className = "spells__name wand-bottom";
    }
  };

  spellData.forEach((spellEntry) => {
    const { spell, description } = spellEntry;

    const spellContainer = document.createElement("div");
    spellContainer.className = "spell__container";

    const spellsName = document.createElement("div");
    spellsName.className = "spells__name wand";
    spellsName.innerHTML = spell;

    const spellsDesc = document.createElement("div");
    spellsDesc.className = "spells__description hidden";
    spellsDesc.innerHTML = description;

    spellsName.onclick = () => {
      openSpellsDesc(spellsDesc, spellsName);
    };

    spellContainer.append(spellsName);
    spellContainer.append(spellsDesc);
    spellsElement.append(spellContainer);
  });
};

spellList();
