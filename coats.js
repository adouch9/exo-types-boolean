let isRainy = false;
let isWindy = false;
let isSummerTemperature = 28;
let isWinterTemperature = 9;
let youAreInCyprusInAugust = !false;  // Généralement, le long des côtes de Chypre, il ne pleut jamais pendant une longue période, de juin 
                                       //   à septembre, et le soleil brille presque toujours.

if (isRainy && isWindy) {
  console.log('Mettez votre manteau')
}else if(isSummerTemperature >= 30 && isWindy){
    console.log('Mettez un short')
}
else if(isWinterTemperature >= 4 && isRainy){
    console.log('Mettez Votre manteau et prenez votre parapluie')
}
    else if(isSummerTemperature >= 25 && youAreInCyprusInAugust){
        console.log('Tu ne trouvera aucun parapluie en vente lol')
}
else {
   console.log('Consulter la meteo pour savoir comment shabiller')
}