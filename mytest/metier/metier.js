import {filter, map} from '../helper/outils'


const somme = (a,b) =>{
    return a+b;
}

const soustraction = (a, b)=>{
    return a-b;
}

const filterPositive = (tableau) =>{
    return tableau.filter(v => v > 0 );
}

const convertToCarre = function(array){
    return map(array,value => value * value);
}


export {somme, soustraction,filterPositive, convertToCarre}