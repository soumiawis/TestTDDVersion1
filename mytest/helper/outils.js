const find  = (tableau, condition) => {
    let element = null;
    for(let i=0; i < tableau.length; i++){
        let value = tableau[i];
        if(condition(value)){
            element = value;
            break;
        }
    }
    return element;
}

const filter = (tableau, condition) => {
    let result = [];
    let j = 0;

    for(let i = 0; i<tableau.length;i++){
        let value = tableau[i];
        if( condition(value) ){
            result[j]= value
            j++;
        }
    }

    return result;
}
/*const filter = (array) =>{
    let tab = [];
    let j = 0;
    for(let i=0; i < array.length; i++){
        let value = array[i];
        if( value  > 0 ){
            tab[j] = value;
            j++;
        }
    }
    return tab;
}*/


const map = (tableau, converter) => {
    let tab = [];
    let j = 0;

    for(let i=0; i < tableau.length; i++){
        let value = tableau[i];
        tab[i] = converter(value);
    }

    return tab;
}
/*const map = (array) => {
    let tab = [];
    let j = 0;
    for(let i=0; i < array.length; i++){
        let value = array[i];
        tab[i] = value * value;
    }
    return tab;
}*/


export {map, filter}