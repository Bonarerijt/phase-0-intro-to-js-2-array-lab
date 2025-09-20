const cats = ["Milo", "Otis", "Garfield"];
beforeEach(function () {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
});

function destructivelyAppendCat (name) {
    cats.push(name);
}
console.log(cats);
console.log(destructivelyAppendCat('Ralph'));

function destructivelyPrependCat (prependCat) {
    cats.unshift(prependCat);
}
console.log(destructivelyPrependCat('Bob'));

function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(catName){
    return[...cats,catName];
}
console.log(appendCat('Broom'))

function prependCat(newCat){
    return[newCat,...cats];
}
console.log(prependCat('Arnold'));

function removeLastCat (){
    return cats.slice(0,2);
}

function removeFirstCat(){
    return cats.slice(1);
}