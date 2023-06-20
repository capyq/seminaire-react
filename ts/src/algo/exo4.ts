/*
    Faire une fonction qui cherche s'il existe un caractère en double.
    entrée => une chaine alpha-numérique
    sortie => boolean  true => il existe au moins un doublon
                        true => aucun doublon

    exemple => "RTYY" => false
*/

export function allDistinct(str: string): boolean {
    return false;
}

console.log(allDistinct("")) // true
console.log(allDistinct("AZERTYU")) // true
console.log(allDistinct("AZERTYUA")) // false

