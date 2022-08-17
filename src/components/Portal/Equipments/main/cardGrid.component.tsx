import { IEquipments } from "../../../../interfaces/redux/equipments/reduxEquipments.interface"
import { CardEquipment } from "./cardEquipment.component"

export const CardGrid = ({
    equipments
}: IProps) => {
    return (
        <div className='equipment-card-row'>
            {
                equipments.map((equipment) => {
                    return <CardEquipment key={equipment.id} equipment={equipment}/>
                })
            }

        </div>
    )
}

interface IProps{
    equipments: IEquipments[]
}
