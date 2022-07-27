import { Button } from "antd"
import { ICommonProps } from "../../interfaces/common/common.interface";
import { Nullish } from "./Nullish.component";

export const SaveButton = (props: ICommonProps) => {
    const { text, visible, loading, ...newProps } = props;
    if(!visible) return <Nullish/>;
    return (
        
        <Button className={'custom-btn__save ani-cont'} {...newProps} loading={loading}>
            {text ? text : 'save'}
        </Button>
    )
}
