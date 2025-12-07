console.log;




//definitions

function showDefinition() {
  const choice = document.getElementById("definitionSelect").value;
  let text = "";

  if (choice === "verb") {
    text = "A verb is a word that shows an action, movement, or state of being. It tells what someone or something does like run, jump, think, or feel, and brings a sentence to life.";
  }
  else if (choice === "noun") {
    text = "A noun is a word that names a person, place, thing, or idea. It helps us identify the people and objects in a story. Ex. teacher, city, backpack, or freedom.";
  }
  else if (choice === "adjective") {
    text = "An adjective is a word that describes or adds detail to a noun. It tells what something looks like, feels like, or sounds like. Ex. bright, messy, tiny, or excited.";
  }

  document.getElementById("definitionOutput").innerHTML = text;
}



document.getElementById("madlibForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // form
    const personName = document.getElementById("personName").value;
    const verbIng1 = document.getElementById("verbIng1").value;
    const feeling = document.getElementById("feeling").value;
    const seaAnimals1 = document.getElementById("seaAnimals1").value;
    const grossThing1 = document.getElementById("grossThing1").value;
    const verbAction = document.getElementById("verbAction").value;
    const bodyParts = document.getElementById("bodyParts").value;
    const seaAnimal2 = document.getElementById("seaAnimal2").value;
    const verbIng2 = document.getElementById("verbIng2").value;

    const colour = document.getElementById("colour").value;
    const object1 = document.getElementById("object1").value;
    const seaAnimals2 = document.getElementById("seaAnimals2").value;
    const liquid = document.getElementById("liquid").value;
    const grossThing2 = document.getElementById("grossThing2").value;
    const clothingItem = document.getElementById("clothingItem").value;
    const verb1 = document.getElementById("verb1").value;
    const adjective = document.getElementById("adjective").value;
    const verbIng3 = document.getElementById("verbIng3").value;
    const objectsPlural = document.getElementById("objectsPlural").value;
    const seaAnimals3 = document.getElementById("seaAnimals3").value;

    // if sentence
    let seaAnimalText = "";
    if (seaAnimals1.toLowerCase() === "sharks") {
        seaAnimalText = " Even though I was a bit nervous seeing so many sharks close up!";
    } else if (seaAnimals1.toLowerCase() === "dolphins") {
        seaAnimalText = " I love watching the dolphins swim together!";
    } else if (seaAnimals1.toLowerCase() === "whales") {
        seaAnimalText = " I really wanted to see one spew out water!";
    }

    // if image
    let seaAnimalImage = "images/coral.png";
    if (seaAnimals1.toLowerCase() === "sharks") {
        seaAnimalImage = "images/shark.png";
    } else if (seaAnimals1.toLowerCase() === "dolphins") {
        seaAnimalImage = "images/ifdolphin.png";
    } else if (seaAnimals1.toLowerCase() === "whales") {
        seaAnimalImage = "images/whale.png";
    }

    
    const story = `
       
        <div class="row mb-3 align-items-center">
            <div class="col-sm-8">
                <p>
                    When ${personName} said we would be ${verbIng1} to the aquarium, 
                    I screamed with ${feeling}. I was most excited to see the ${seaAnimals1}.${seaAnimalText} 
                    When we arrived, the ${grossThing1} smell almost made me ${verbAction}. 
                    After walking into the first area, I couldn’t believe my ${bodyParts} 
                    when the ${seaAnimal2} started ${verbIng2} right in front of us.
                </p>
            </div>
            <div class="col-md-4 text-center">
                <img src="${seaAnimalImage}" class="img-fluid" alt="${seaAnimals1}">
            </div>
        </div>

        
        <div class="row align-items-center">
            <div class="col-md-4 text-center">
                <img src="images/lookinginaquarium.png" class="img-fluid " alt="lady looking in aquarium">
            </div>
            <div class="col-md-8">
                <p>
                    We kept walking until we reached the underwater tunnel. 
                    The whole place was glowing a soft ${colour}, for a second it felt like 
                    we were inside a giant ${object1}. Some ${seaAnimals2} bumped the glass 
                    right where I was standing, splashing ${liquid} everywhere.
                </p>
                
            </div>
        </div>

         <div class="row mb-3 align-items-center">
            <div class="col-md-8">
                <p>
                  By the time we left the tunnel, I smelled like ${grossThing2}, 
                    my ${clothingItem} was soaked, and I just wanted to sit down and ${verb1}. 
                    After the series of ${adjective} events, it was time to leave. 
                    My legs were tired from all that ${verbIng3}, I almost tripped over 
                    someone's ${objectsPlural}, and decided that ${personName} should never plan a trip like this again,  
                    especially with ${seaAnimals3} involved.  
                </p>
            </div>
            <div class="col-md-4 text-center">
                <img src="images/aquariumtunnel.jpg" class="img-fluid rounded shadow " alt="Aquarium Tunnel">
            </div>
        </div>
    `;

    document.getElementById("storyOutput").innerHTML = story;
});



//back to top button
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}