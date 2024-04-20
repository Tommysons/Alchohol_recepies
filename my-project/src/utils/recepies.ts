

type Ingreient = {
    title: string,
    amount?: number,
    unit?: string
}

export type Recipe = {
    name: string;
    glass: string;
    ingredients: Ingreient[]; // Change the type of ingredients
    method: string;
    garnish?: string;
    link: string
  };

const recepies: Recipe[] = [
    {
        name: "Whistle Punk",
        glass: "Rocks glass",
        ingredients: [{

            
            title: "Vodka",
            amount: 2,
            unit: "oz"
        },
        {   title: "Lime juice",
            amount: 0.75,
            unit: "oz"
         },
         {
            title: "Ginger cordial",
            amount: 0.75,
            unit: "oz"
         },
         {
            title: "Basil"
         }   
        ],
        method: "Shake",
        garnish: "Chilli pepper, ground black pepper, basil leaf",
        link: "/pictures/whistle_punk.jpeg"
    },
    {
        name: "Espresso Martini",
        glass: "Martini glass",
        ingredients: [{
            title: "Vodka",
            amount: 1,
            unit: "oz"
        },
        {
            title: "Espresso",
            amount: 1,
            unit: "oz"
        },
        {
            title: "Coffee liquor",
            amount: 1,
            unit: "oz"
        }
    ],
        method: "Shake",
        garnish: "Coffee beans",
        link: "/pictures/Espresso_Martini.jpeg"
    },
    {
        name: "Texas Sun",
        glass: "Martini glass",
        ingredients:[{
            title: "Bourbon Whiskey",
            amount: 0.75,
            unit: 'oz'
        },
        {
            title: "Lemon juice",
            amount: 0.75,
            unit: "oz"
        },
        {
            title: "Elderflower cordial",
            amount: 0.75,
            unit: "oz"
        },
        {
            title: "Aperol",
            amount: 0.75,
            unit: "oz"
        }
    ],    

        method: "Shake",
        garnish: "Orange coin",
        link: "/pictures/Texas_Sun.jpeg"
    },
    {
        name: "Whiskey Apple",
        glass: "Highball glass",
        ingredients: [{
            title: "Whiskey",
            amount: 2,
            unit: "oz"
           
        },
        {
            title: "Apple juice",
            amount: 4,
            unit: "oz"
        }
    ],
        method: "Stir inside the glass",
        garnish: "Dried apple slice",
        link: "/pictures/Whiskey_Apple.jpeg"
    },
    {
        name: "The Basford",
        glass: "Martini glass",
        ingredients: [{
            title:"London Dry Gin",
            amount: 1.5,
            unit: "oz"
        },
        {
            title: "Lemon juice",
            amount: 0.75,
            unit: "oz"
        },
        {
            title: "Grayfruit/Rosemary cordial",
            amount: 0.75,
            unit: "oz"
        }
    ],
        method: "Shake",
        garnish: "Dried Lemon slice",
        link: "/pictures/The_Basford.jpeg"
    },
    {
        name: "Rose color spectacles",
        glass: "Martini glass",
        ingredients: [{
            title: "Lemon juice",
            amount: 0.75,
            unit: "oz"
        },
        {
            title: "Cardamon cordial",
            amount: 0.75,
            unit: "oz"
        },
        {
            title: "Egg white",
            amount: 0.75,
            unit: "oz"
        },
        {
            title: "Cranberry bitter",
            amount: 2,
            unit: "drops"
        }
    ],
        method: "Shake and dry shake",
        garnish: "Drops of cranberry bitter, ground pistachio",
        link: "/pictures/Rose_color_spectacles.jpeg"
    },
    {
        name: "The Vesper",
        glass: "Martini glass",
        ingredients: [{
            title: "Vodka",
            amount: 1,
            unit: "oz"
        },
        {
            title: "London Dry Gin",
            amount: 1,
            unit: "oz"
        },
        {
            title: "Lillet Blank",
            amount: 0.5,
            unit: "oz"
        }
    ],
        method: "Shake",
        garnish: "Lemon oils, lemen peel",
        link: "/pictures/The_Vesper.jpeg"
    },
    {
        name: "Martini",
        glass: "Martini glass",
        ingredients: [{
            title: "Vodka/London Dry Gin",
            amount: 2,
            unit: "oz"
        }],
        method: "Stir inside the mixing glass",
        garnish: "Olives/Lemon twist",
        link: "/pictures/Martini.jpeg"
    },
    {
        name: "Dirty Martini",
        glass: "Martini glass",
        ingredients: [{
            title: "Vodka/London Dry gin",
            amount: 2,
            unit: "oz"

        },
        {
            title: "Olive brine",
            amount: 0.5,
            unit: "oz"
        }
    ],
        method: "Stir inside the mixing glass",
        garnish: "Olives/Lemon twist",
        link: "/pictures/Dirty_Martini.jpeg"
    },
    {
        name: "Wet Martini",
        glass: "Martini glass",
        ingredients: [{
            title: "Vodka/London Dry Gin",
            amount: 2,
            unit: "oz"
        },
        {
            title: "Dry Vermouth",
            amount: 1,
            unit: "oz"
        }
    ],
        method: "Stir inside mixing glass",
        garnish: "Olives/Lemon twist",
        link: "/pictures/Wet_Martini.jpeg"
    },
    {
        name: "Kasama Old fashioned",
        glass: "Rocks glass",
        ingredients: [{
            title: "Whiskey",
            amount: 2,
            unit: "oz"
        },
        {
            title: "Angustura bitters",
            amount: 3,
            unit: "drops"
        },
        {
            title: "Chocolate bitters",
            amount: 3,
            unit: "drops"
        },
        {
            title: "Salted Carammel cordial",
            amount: 0.25,
            unit: "oz"
        }
    ],
        method: "Stir inside the mixing glass",
        garnish: "Maraschino cherry, Lemon peel",
        link: "/pictures/Kasama_Old_fashioned.jpeg"
    },
    {
        name: "Orleans sazerac",
        glass: "Rocks glass",
        ingredients: [{
            title: "1 oz: Bourbon Whiskey",
            amount: 1,
            unit: "oz"
        },
        {
            title: "Rye Whiskey",
            amount: 1,
            unit: "oz"
        },
        {
            title: "Brown sugar",
            amount: 1
        },
        {
            title: "Angustura bitters",
            amount: 3,
            unit: "drops"
        },
        {
            title: "Orleans bitters",
            amount: 3,
            unit: "drops"
        }
    ],
        method: `In the mixing glass muddle the sugar with Angustura, Orleans bitter,
        then add whiskeys stir`,
        garnish: "Lemon oils and Lemon peel",
        link: "/pictures/Orleans_sazerac.jpeg"
    },
    {
        name: "Old Bridge",
        glass: "Rocks glass",
        ingredients: [{
            title: "Unaged whiskey",
            amount: 2,
            unit: "oz"
        },
        {
            title: "Orange gum",
            amount: 1,
            unit: "bar spoon"
        },
        {
            title: "Orange bitters",
            amount: 3,
            unit: "drops"
        }
    ],
        method: "Stir inside mixing glass",
        garnish: "Anise star, Orange peel",
        link: "/pictures/Old_Bridge.jpeg"
    },
    {
        name: "Moscow mule",
        glass: "Copper Mug",
        ingredients: [{
            title: "Vodka/London Dry Gin",
            amount: 2,
            unit: "oz"
        },
        {
            title: "Lime juice",
            amount: 0.75,
            unit: "oz"
        },
        {
            title: "Ginger beer tonic"
        }
    ],
        method: "Add all ingredients into copper mug",
        garnish: "Lime slice",
        link: "/pictures/Moscow_mule.jpeg"
    }
];

export default recepies;
