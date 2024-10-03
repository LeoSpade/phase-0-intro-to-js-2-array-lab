const cats = [
    "Milo", "Otis", "Garfield",
    ];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
};

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const newCatsArray = [...cats, "Broom"];
    return newCatsArray;
}

function prependCat(name) {
    const newCatsArray = ["Arnold", ...cats];
    return newCatsArray;
}

function removeLastCat() {
    const newCatsArray = cats.slice(0, -1);
    return newCatsArray;
}

function removeFirstCat() {
    const newCatsArray = cats.slice(1);
    return newCatsArray;
}