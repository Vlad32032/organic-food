import { FC } from "react";

import BannerBlock from "../../../components/Main/BannerBlock/BannerBlock";
import AboutUsBlock from "../../../components/Main/AboutUsBlocks/AboutUsBlock/AboutUsBlock";

const AboutUsPage: FC = () => {
    return (
        <main>
            <BannerBlock title='About Us'/>
            <AboutUsBlock />
        </main>
    );
};

export default AboutUsPage;