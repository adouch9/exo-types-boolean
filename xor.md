# La Table de vérité de l'opération (XOR)

*Outil de calcul permettant de représenter dans un tableau à deux dimensions les entrées et la sortie d'une expression booléenne.*

*L*es colonnes représentent les entrées et la sortie, les lignes stockent toutes les combinaisons de valeurs possibles pour chacune des entrées ainsi que la valeur de retour de l'expression booléenne.*

*Exemple de table de vérité pour l'opérateur booléen XOR (expression a XOR b) :*

|  X    | Y     | X XOR Y    |
|-------|-------|------------|
| false | false | false      |
| false | true  | true       |
| true  | false | true       |
| true  | true  | false      |

*Une table de vérité possède une colonne pour la sortie, de 1 à n colonnes pour les entrées, une ligne d'entête et autant de ligne que de combinaisons de valeurs d'entrées.*

<!-- 
console.log(true ^ true);  = False
console.log(true ^ false); = True
console.log(false ^ true); = True
console.log(false ^ false); = False -->