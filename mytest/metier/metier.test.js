import {somme,soustraction,filterPositive, convertToCarre} from './metier'

describe('- test somme et soustraction', ()=>{
    test('test somme', ()=>{
        expect(somme(1,2)).toBe(3)
    })

    test('test soustraction',()=>{
        expect(soustraction(3,2)).toBe(1)
    })
})

describe('- test sur les tableaux' , ()=>{

    test('filter positive number in array', ()=>{
        const array = [-1,60,-300,-80,-6,-50,-6];
        const result = [60]
        expect( filterPositive(array) ).toEqual(result);
    })

    test('convertir chaque element de la table en carre', ()=>{
        const array  =  [1,2,3,4,5];
        const result = [1,4,9,16,25]
        expect( convertToCarre(array) ).toEqual(result);
    })

})

