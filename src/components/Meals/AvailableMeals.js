import React, { useState, useEffect } from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Tradicinis kijevas su Džiūgo sūrio padažu',
        description:
            'Gruzdintos bulvytės, šviežių daržovių salotos su cukinija ir Provanso žolelių padažu.',
        price: 4.8,
    },
    {
        id: 'm2',
        name: 'Jautienos šonkauliai',
        description:
            'Gruzdintos bulvytės, šviežių daržovių salotos su cukinija ir Provanso žolelių padažu.',
        price: 5.4,
    },
    {
        id: 'm3',
        name: 'Menkė Tempura tešloje su Čili-Ajoli padažu',
        description: 'Laukiniai ryžiai, karštos garintos daržovės',
        price: 4.8,
    },
    {
        id: 'm4',
        name: 'Grill vištienos kepsnys, įdarytas su Pesto, Mozarella su Džiūgo sūrio padažu',
        description: 'Gruzdintos bulvytės, karštos garintos daržovės',
        price: 4.8,
    },
    {
        id: 'm5',
        name: 'Tostada su vištiena, sūriu ir jelapenais, su aitriu pomidorų-jelapenų padažu',
        description: 'Laukiniai ryžiai, marinuoti agurkai',
        price: 3.5,
    },
    {
        id: 'm6',
        name: 'Varškės apkepas, su trintomis braškėmis ir grietine',
        description: '',
        price: 4.5,
    },
];

const AvailableMeals = () => {
    const [mealsMenu, setMealsMenu] = useState([]);

    // useEffect(() => {
    //     const url = 'https://6214c0d789fad53b1f1dc14a.mockapi.io/foodMenu';
    //     fetch(url)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setMealsMenu(data);
    //         });
    // }, []);

    const mealsList = DUMMY_MEALS.map((meal) => (
        <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;
