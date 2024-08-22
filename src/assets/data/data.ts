// import s from '../../components'

import { link } from "fs";

// used in /components/Header/HeaderNav
export const dataNav = [
    {name: 'Home', pathname: '/home'},
    {name: 'About', pathname: '/about'},
    {name: 'Shop', pathname: '/shop'},
    {name: 'Team', pathname: '/team'}
];

// used in /components/Footer
export const dataFooterNav = [
    {name: '404 Not Found', pathname: '/404'},
    {name: 'Licences', pathname: '/licences'},
    {name: 'Changelog', pathname: '/changelog'}
];

// used in /components/UI/FoodCards/FoodCategories
export const dataCategories = [
    {id: 0, category: "all"},
    {id: 1, category: "fruits"},
    {id: 2, category: "vegetables"},
    {id: 3, category: "berries"}
];

// used in /components/Main/ShopBlocks/ShopBlockMain
export const shopBlockMainSkeletonsCount = 8;

// used in /components/Main/ShopBlocks/ShopRelatedProductsBlock
export const shopRelatedProductsMaxFoodCard = 4;