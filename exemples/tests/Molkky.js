class Molkky {

    listDesJouerues(){
        let joueures = new Map();
        joueures.set("A",new JoueurMokky("AAA"));
        joueures.set("B",new JoueurMokky("BBB"));
        joueures.set("C",new JoueurMokky("CCC"));

        return joueures;
    }


    tomberQuilles(joueur, quilles) {

        if (quilles.length === 1)
            joueur.score += quilles[0].tomber();
        else if (quilles.length > 1)
            joueur.score += quilles.length;

        this.verfierScore(joueur);
    }


    verfierScore(joueur) {
        if (joueur.score > 50)
            joueur.score = 25;
    }

    estGagné(joueur) {
        if (joueur.score === 50)
            return true;
        else
            return false;
    }

}