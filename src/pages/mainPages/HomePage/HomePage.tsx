import { FC } from "react";

import HomeBannerBlock from "../../../components/Main/HomeBlocks/HomeBannerBlock/HomeBannerBlock";
import HomeMiniBannerBlock from "../../../components/Main/HomeBlocks/HomeMiniBannerBlock/HomeMiniBannerBlock";
import HomeAboutUsBlock from "../../../components/Main/HomeBlocks/HomeAboutUsBlock/HomeAboutUsBlock";

const HomePage: FC = () => {
    return (
        <main>
            <HomeBannerBlock />
            <HomeMiniBannerBlock />
            <HomeAboutUsBlock />
        </main>
    );
};

export default HomePage;