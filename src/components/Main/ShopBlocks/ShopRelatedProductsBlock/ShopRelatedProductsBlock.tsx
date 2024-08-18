import { FC, useEffect } from "react";

import styles from "./ShopRelatedProductsBlock.module.scss";

import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import { selectfoodProductsState } from "../../../../redux/foodProducts/selectors";
import { selectFiltersState } from "../../../../redux/filters/selectors";
import { fetchFoodRelatedProducts } from "../../../../redux/foodProducts/asyncThunk";

import { createUrlByCategory } from "../../../../axios/axios";

import FoodCard from "../../../UI/FoodCards/FoodCard/FoodCard";
import FoodCardSkeleton from "../../../UI/FoodCards/FoodCard/FoodCardSkeleton";

const ShopRelatedProductsBlock: FC = () => {
    const maxFoodCard = 4;

    const dispatch = useAppDispatch();

    const { statusFoodRelatedProducts: status, foodRelatedProducts } = useAppSelector(selectfoodProductsState);
    const { activeCategories } = useAppSelector(selectFiltersState);
    
    useEffect(() => {
        if (activeCategories !== 0) dispatch(fetchFoodRelatedProducts(createUrlByCategory(activeCategories))); 
    }, [activeCategories]);

    if ( activeCategories === 0 ) return <></>;
    
    return (
        <section className={styles.relatedProducts}>
            <h2>Related Products</h2>
            <div className={styles.wrapper}>
                { status === 'error' && <span>Error feach...</span>}

                { status === 'loading' ? (
                    [...new Array(4)].map((_, i) => <FoodCardSkeleton key={i}/>) 
                ) : foodRelatedProducts && 
                    foodRelatedProducts.map((food, i) => i < maxFoodCard && <FoodCard key={food.id} {...food}/>)
                }
            </div>
        </section>
    );
};


export default ShopRelatedProductsBlock;