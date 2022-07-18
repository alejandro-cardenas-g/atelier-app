import { RollbackOutlined } from "@ant-design/icons"
import { Button } from "antd"
import { useNavigate } from "react-router-dom"
import { PORTAL_LOCALS } from "../../../locales/portal/portal.locals"
import { EUsersContent, PATH_USERS_TYPE } from "../../../locales/portal/portalUsers.locals"
import { Searcher } from "../../Common/Searcher.component"

const OPTION_LOCALES = PORTAL_LOCALS['users']['info'];

export const ReadOptionInfo = () => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(PATH_USERS_TYPE[EUsersContent.WRITE]);
    }

    return (

        <div className='portal-usuarios__info-actions ani-cont'>

            <Button className='custom-btn__green' onClick={handleNavigate}>{OPTION_LOCALES['buttonNew']}</Button>

            <Searcher/>

        </div>

    )
}

export const WritOptionInfo = () => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(PATH_USERS_TYPE[EUsersContent.READ]);
    }

    return (

        <div className='portal-usuarios__info-actions ani-cont'>

            <Button className='custom-btn__black' onClick={handleNavigate}><RollbackOutlined /> {OPTION_LOCALES['back']}</Button>

        </div>

    )

}