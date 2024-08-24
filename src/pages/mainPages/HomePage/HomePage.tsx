import { FC } from "react";

import HomeBannerBlock from "../../../components/Main/HomeBlocks/HomeBannerBlock/HomeBannerBlock";
import HomeMiniBannerBlock from "../../../components/Main/HomeBlocks/HomeMiniBannerBlock/HomeMiniBannerBlock";

const HomePage: FC = () => {
    return (
        <main>
            <HomeBannerBlock />
            <HomeMiniBannerBlock />
        </main>
    );
};

export default HomePage;