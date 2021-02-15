let isRainy = true;
let isWindy = false;
let isSun = true;
let isTemperatureEte = 35;
let isTemperatureHiver = 29;

if (isRainy && isWindy) {
  console.log('Mettez votre manteau')
}else if(isTemperatureEte >= 30 && isWindy){
    console.log('Mettez un short')
}
else if(isTemperatureHiver <= 14 && isRainy){
    console.log('Mettez Votre manteau et prenez votre parapluie')
}
    else if(isTemperatureEte >= 25 && isRainy){
        console.log('Bienvenue a Paris lol')
}
else {
   console.log('Consulter la meteo pour savoir comment shabiller')
};