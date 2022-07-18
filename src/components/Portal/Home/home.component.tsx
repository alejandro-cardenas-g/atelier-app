import { Typography } from "antd";
import { PORTAL_LOCALS } from "../../../locales/portal/portal.locals";
import { HomeGrid } from "./homeGrid.component";

const Texts = PORTAL_LOCALS['home'];

export const Home = () => {
    return (
        <div className='portal-home portal-container ani-cont'>

            <div className='portal-home__welcome'>
                <Typography.Title className='welcome-title portal-title-1' level={1}>{Texts['title']}</Typography.Title>
                <Typography.Text className='welcome-text'>{Texts['text']}</Typography.Text>
            </div>

            <HomeGrid/>

        </div>
    )
}

export default Home;