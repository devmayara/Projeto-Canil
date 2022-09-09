import { Request, Response } from "express";
import { creatMenuObject } from '../helpers/createMenuObject';

export const home = (req: Request, res: Response) => {
    // res.send('home no controller');
    res.render('pages/page', {
        menu: creatMenuObject('all'),
        banner: {
            title: 'Todos os animais ',
            background: 'allanimals.jpg'
        }
    });
}

export const dogs = (req: Request, res: Response) => {
    // res.send('dogs no controller');
    res.render('pages/page', {
        menu: creatMenuObject('dog'),
        banner: {
            title: 'Cachorros ',
            background: 'banner_dog.jpg'
        }
    });
}

export const cats = (req: Request, res: Response) => {
    // res.send('cats no controller');
    res.render('pages/page', {
        menu: creatMenuObject('cat'),
        banner: {
            title: 'Gatos ',
            background: 'banner_cat.jpg'
        }
    });
}

export const fishes = (req: Request, res: Response) => {
    // res.send('fishes no controller');
    res.render('pages/page', {
        menu: creatMenuObject('fish'),
        banner: {
            title: 'Peixes ',
            background: 'banner_fish.jpg'
        }
    });
}
