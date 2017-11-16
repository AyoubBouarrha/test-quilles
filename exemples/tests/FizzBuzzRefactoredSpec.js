chai.should();

describe('Décrit le jeu du FizzBuzzRefactored', () => {
  let résultat;

  beforeEach(() => {
    let regle15 = new RegleMultipleDe15();
    let regle5 = new RegleMultipleDe5();
    let regle3 = new RegleMultipleDe3();
    let regles = [regle15, regle3, regle5];

    let monFizzBuzz = new FizzBuzzRefactored();

    résultat = monFizzBuzz.calcul(regles);
  });

  it('Générer un FizzBuzz de 0 à 100', () => {
    résultat.length.should.equal(101);
  });

  it('doit avoir la valeur 2 à la postion 2', () => {
    résultat[2].should.equal(2);
  });

  it('doit afficher Fizz pour les multiples de 3 (valeur 3)', () => {
    résultat[3].should.equal('Fizz');
  });

  it('doit afficher Fizz pour les multiples de 3 (valeur 6)', () => {
    résultat[6].should.equal('Fizz');
  });

  it('doit afficher Buzz pour les multiples de 5', () => {
    résultat[5].should.equal('Buzz');
  });

  it('doit afficher Buzz pour les multiples de 3 et 5', () => {
    résultat[15].should.equal('FizzBuzz');
  });
});
