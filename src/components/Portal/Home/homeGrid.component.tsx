import { Row } from "antd"
import { HomeCol } from "./homeCol.component"
import { useSelector } from 'react-redux';
import { getUserType } from '../../../redux/selectors/auth.selector';
import { getHomeOptionsByUserType } from "../../../utils/portal/home/getHomeOptionsByUserType.util";
import { useMemo } from "react";

export const HomeGrid = () => {

    const userType = useSelector(getUserType);

    const options = useMemo(() => getHomeOptionsByUserType(userType), [userType]);

    return (
        <div className='home-grid'>
            <Row gutter={[20,20]} align='middle' justify="center">
                {
                    options.map(({buttonText,logo,text,title,baseColor}, index) => 
                        <HomeCol 
                            key={index}
                            Logo={logo}
                            text={text}
                            title={title}
                            buttonText={buttonText}
                            baseColor={baseColor}
                        />
                    )
                }
            </Row>
        </div>
    )
}
