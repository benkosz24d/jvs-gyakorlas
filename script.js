console.log("Szia");



console.log(500);


console.log(true);
console.log(false);

//logikai ÉS
// (boolean,boolean) ->boolean
 
//negálás
//....

//undifined
console.log(undefined); 

//null
 
console.log(null);



/*
* Array (tömb)
*/

//Array<_>
//Array of ?

//Array of(string)

console.log(["elso","masodik", "harmadik"])
//Array of numbers
console.log([2, 12, 3])

//szűrés
//sorba rendezés
//hozzá adhatunk új elemet
//aggregálás

console.log([2, 12, 3][1])

// nem javasolt
console.log([true, 2, "string..."]);

//több dimenziós tömb

// Array<array<number>>

console.log([[2,3], [32,10], [6,4]][1][1] );

/*
* Object (Objektum)
*/

// kuld-értékpárok sorozata


console.log(
    {
        firstName: 'József',
        lastName: 'Kovács',
        age:30,

    }.lastName
);

//lookup, kulcs alapú kikérés

console.log(
    {
        firstName: 'József',
        lastName: 'Kovács',
        age:30,

    }['lastName']
);

console.log(
    {
        firstName: 'József',
        lastName: 'Kovács',
        age:30,
        phonenumbers: ['067023456', '067023457'],
        adress: {
            street: 'Király u.',
            city: 'Budapest',
        }

    }.phonenumbers[0]
);

// Az első telefon neve
console.log(
    
    [
        {
            brand: 'Apple',
            name: 'Iphone X',
            Price: 250000,
            provider: {
                    country:  'HU',
                    name:'Vodafon'

            }

        },  


        {
            brand: 'Huawei',
            name: '10',
            Price: 180000,
            provider: {
                    country:  'DE',
                    name:'T-Mobile'

            }

        },


        {
            brand: 'ZTE',
            name: 'Blade',
            Price: 110000,
            provider: {
                    country:  'DE',
                    name:'Vodafon'

            }

        },
    
    ][0].name
)



// A második telefon ára
console.log(
    
    [
        {
            brand: 'Apple',
            name: 'Iphone X',
            Price: 250000,
            provider: {
                    country:  'HU',
                    name:'Vodafon'

            }

        },  


        {
            brand: 'Huawei',
            name: '10',
            Price: 180000,
            provider: {
                    country:  'DE',
                    name:'T-Mobile'

            }

        },


        {
            brand: 'ZTE',
            name: 'Blade',
            Price: 110000,
            provider: {
                    country:  'DE',
                    name:'Vodafon'

            }

        },
    
    ][1].Price
)


// harmadik szolgáltató országa
console.log(
    
    [
        {
            brand: 'Apple',
            name: 'Iphone X',
            Price: 250000,
            provider: {
                    country:  'HU',
                    name:'Vodafon'

            }

        },  


        {
            brand: 'Huawei',
            name: '10',
            Price: 180000,
            provider: {
                    country:  'DE',
                    name:'T-Mobile'

            }

        },


        {
            brand: 'ZTE',
            name: 'Blade',
            Price: 110000,
            provider: {
                    country:  'DE',
                    name:'Vodafon'

            }

        },
    
    ][2].provider.country
)