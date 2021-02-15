let isRainy = true;
let isWindy = false;
let isSun = true;
let isSummerTemperature = 35;
let isWinterTemperature = 29;

if (isRainy && isWindy) {
  console.log('Mettez votre manteau')
}else if(isSummerTemperature >= 30 && isWindy){
    console.log('Mettez un short')
}
else if(isWinterTemperature <= 14 && isRainy){
    console.log('Mettez Votre manteau et prenez votre parapluie')
}
    else if(isSummerTemperature >= 25 && isRainy){
        console.log('Bienvenue a Paris lol')
}
else {
   console.log('Consulter la meteo pour savoir comment shabiller')
}