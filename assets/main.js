var factPlaceholder = document.getElementById("cat-fact");
var showFact = document.getElementById("show-fact");

/* Facts from this API: https://fact.birb.pw/api/v1/cat */

var CatFacts = ["The ancient Egyptians were the first to tame the cat (in about 3000 BC), and used them to control pests.",
               "Cats share 95.6% of their DNA with tigers.",
               "Cats are asleep for 70% of their lives.",
               "Cats try to steal your soul while you sleep.",
               "Cat kidneys are super efficient, they can rehydrate by drinking seawater.",
               "Kittens who are taken along on short, trouble-free car trips to town tend to make good passengers when they get older. They get used to the sounds and motions of traveling and make less connection between the car and the visits to the vet."]

var factNumber;

function randomFact(){
  return CatFacts[factNumber];
}

showFact.addEventListener('click', function(){
  factNumber = Math.floor(Math.random()*5);
  factPlaceholder.textContent = randomFact();
});
