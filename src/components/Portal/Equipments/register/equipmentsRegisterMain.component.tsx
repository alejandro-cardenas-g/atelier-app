import { useEffect } from 'react';
import { dispatchGetDocTagsEquipment } from '../../../../redux/dispatchers/portal/equipments.dispatch';
import { EquipmentInfo } from '../utils/EquipmentInfo.component'
import { EquipmentRegister } from './equipmentRegister.component';

export const EquipmentsRegisterMain = () => {

  useEffect(() => {
    dispatchGetDocTagsEquipment()
  }, [dispatchGetDocTagsEquipment])

  return (
    <div className='portal-equipment portal-equipment__register portal-container ani-cont'>
      <EquipmentInfo type={1}/>
      <EquipmentRegister />
    </div>
  )
}

export default EquipmentsRegisterMain;
