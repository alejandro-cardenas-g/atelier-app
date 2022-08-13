import { useEffect } from "react";

export const useVerifyPermission = (
    allowedPermissions: number[],
    permissionToVerify: number,
    exception: boolean = false,
    action: Function
) => {

    useEffect(() => {
        if(!exception){
            if(!allowedPermissions.includes(permissionToVerify)){
                action();
            }
        }
    }, [])

}
