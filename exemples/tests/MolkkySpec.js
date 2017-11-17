chai.should();

describe("Décrit le jeu du Mollky", () => {
    let molkkyPartie;
    let mapJoueurs;
    let mapQuilles;

    beforeEach(() => {
        molkkyPartie = new Molkky();
        mapQuilles = new Map();
        mapQuilles.set(1, new Quille(1));
        mapQuilles.set(2, new Quille(2));
        mapQuilles.set(3, new Quille(3));
        mapQuilles.set(4, new Quille(4));
        mapQuilles.set(5, new Quille(5));
        mapQuilles.set(6, new Quille(6));
        mapQuilles.set(7, new Quille(7));
        mapQuilles.set(8, new Quille(8));
        mapQuilles.set(9, new Quille(9));
        mapQuilles.set(10, new Quille(10));
        mapQuilles.set(11, new Quille(11));
        mapQuilles.set(12, new Quille(12));
        mapJoueurs = molkkyPartie.listDesJouerues();
    });

    it("1 quille tombée (score += n° de la quille)", () => {
        let joueurA = mapJoueurs.get("A");
        
        molkkyPartie.tomberQuilles(joueurA, [mapQuilles.get(5)]);
        molkkyPartie.tomberQuilles(joueurA, [mapQuilles.get(3)]);
        joueurA.score.should.equal(8);
    });

    it("n quille tombées (score += nb de la quille)", () => {
        let joueurA = mapJoueurs.get("A");

        molkkyPartie.tomberQuilles(joueurA, [mapQuilles.get(2), mapQuilles.get(5), mapQuilles.get(12)]);
        molkkyPartie.tomberQuilles(joueurA, [mapQuilles.get(1), mapQuilles.get(3)]);
        joueurA.score.should.equal(5);
    });

    it("50 points : Victoire", () => {
        let joueurA = mapJoueurs.get("A");

        molkkyPartie.tomberQuilles(joueurA, [mapQuilles.get(12)]);
        molkkyPartie.tomberQuilles(joueurA, [mapQuilles.get(10)]);
        molkkyPartie.tomberQuilles(joueurA, [mapQuilles.get(9)]);
        molkkyPartie.tomberQuilles(joueurA, [mapQuilles.get(8)]);
        molkkyPartie.tomberQuilles(joueurA, [mapQuilles.get(9)]);
        molkkyPartie.tomberQuilles(joueurA, [mapQuilles.get(2), mapQuilles.get(5)]);
        molkkyPartie.estGagné(joueurA).should.be.true;
    });

    it("score > 50 : retour à 25", () => {        
        let joueurA = mapJoueurs.get("A");

        molkkyPartie.tomberQuilles(joueurA, [mapQuilles.get(2), mapQuilles.get(5), mapQuilles.get(3)]);
        molkkyPartie.tomberQuilles(joueurA, [mapQuilles.get(12)]);
        molkkyPartie.tomberQuilles(joueurA, [mapQuilles.get(10)]);
        molkkyPartie.tomberQuilles(joueurA, [mapQuilles.get(10)]);
        molkkyPartie.tomberQuilles(joueurA, [mapQuilles.get(8)]);
        molkkyPartie.tomberQuilles(joueurA, [mapQuilles.get(2)]);
        molkkyPartie.tomberQuilles(joueurA, [mapQuilles.get(8)]);
        joueurA.score.should.equal(25);
    });

    it("Test Multi joueur", () => {        
        let joueurA = mapJoueurs.get("A");  
        let joueurB= mapJoueurs.get("B");


        molkkyPartie.tomberQuilles(joueurA, [mapQuilles.get(1), mapQuilles.get(5)]);
        molkkyPartie.tomberQuilles(joueurA, [mapQuilles.get(12)]);
        molkkyPartie.tomberQuilles(joueurA, [mapQuilles.get(10)]);
        molkkyPartie.tomberQuilles(joueurA, [mapQuilles.get(10)]);

        molkkyPartie.tomberQuilles(joueurB, [mapQuilles.get(10)]);
        molkkyPartie.tomberQuilles(joueurB, [mapQuilles.get(10)]);
        molkkyPartie.tomberQuilles(joueurB, [mapQuilles.get(10)]);
        molkkyPartie.tomberQuilles(joueurB, [mapQuilles.get(10)]);
        molkkyPartie.tomberQuilles(joueurB, [mapQuilles.get(10)]);

        joueurA.score.should.equal(34);

        molkkyPartie.estGagné(joueurB).should.be.true;
    });
});
