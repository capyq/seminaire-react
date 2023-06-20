/*
    Etant donnée une liste de cocktail, ( fruit => lettre , quantité : int )
    Etant donnée une liste de fruits string
    quel est la quantité de cocktails pouvant être réalisés

    Exemple  List ( A : 2, B :1 )  ingredient => AABB
        reponse 3 => 2 fois le B et 1 fois le A
     */
interface Cocktail {
    fruit: string
    qte: number;

}
export function nbCocktailAvailable(grid: Cocktail[], ingredient: string): number {
    return 0;
}



