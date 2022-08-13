import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPermissions } from "../redux/selectors/auth.selector";
import { useVerifyPermission } from "./useVerifyPermission.hook"

export const UseVerifyModulePermission = (
    allowedPermissions: number[],
    redirect: string
) => {
    const { type: userType, isSuperUser } = useSelector(getPermissions);
    const navigate = useNavigate();
    useVerifyPermission(
        allowedPermissions,
        userType,
        isSuperUser,
        () => {
            navigate(redirect);
        }
    )

}
