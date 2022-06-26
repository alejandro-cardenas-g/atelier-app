import { Typography } from "antd";
import { PORTAL_LOCALES } from "../../../../locales/portal/portal.locales";
import { HomeGrid } from "./homeGrid.component";

const Texts = PORTAL_LOCALES['home'];

export const Home = () => {
    return (
        <div className='portal-home'>

            <div className='portal-home__welcome'>
                <Typography.Title className='welcome-title' level={1}>{Texts['title']}</Typography.Title>
                <Typography.Text className='welcome-text'>{Texts['text']}</Typography.Text>
            </div>

            <HomeGrid/>

        </div>
    )
}

export default Home;