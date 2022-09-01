import { RollbackOutlined } from "@ant-design/icons"
import { Button } from "antd"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { PORTAL_LOCALS } from "../../../../locales/portal/portal.locals"
import { getIsSuperUser } from "../../../../redux/selectors/auth.selector"
import { PATHNAMES } from "../../../../routers/routes.enum"
import { Searcher } from "../../../Common/Searcher.component"

const OPTION_LOCALES = PORTAL_LOCALS['equipments']['info'];

export const ReadOptionInfo = () => {

    const navigate = useNavigate();
    const isSuperUser = useSelector(getIsSuperUser);

    const handleNavigate = () => {
        navigate(`${PATHNAMES.PORTAL_EQUIPOS_REGISTER}`);
    }

    return (

        <div className='portal-equipment__info-actions ani-cont'>
            {
                isSuperUser ?
                <Button className='custom-btn__green' onClick={handleNavigate}>{OPTION_LOCALES['buttonNew']}</Button>
                :
                <div/>
            }
            <Searcher
                redirect={`/equipos?page=${1}`}
                text='Buscar Equipo'
            />

        </div>

    )
}

export const WritOptionInfo = () => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(-1);
    }

    return (

        <div className='portal-equipment__info-actions ani-cont'>

            <Button className='custom-btn__black' onClick={handleNavigate}><RollbackOutlined /> {OPTION_LOCALES['back']}</Button>

        </div>

    )

}