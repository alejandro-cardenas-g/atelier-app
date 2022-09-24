import { BulbTwoTone } from '@ant-design/icons'
import { Statistic } from 'antd'
import { useSelector } from 'react-redux'
import { getSingleEquipment } from '../../../../../redux/selectors/equipments.selector'
import './styles.components.scss';


export const LocationDetails = () => {

  const equipment = useSelector(getSingleEquipment);

  const location = [
    {
      key: 1,
      label: 'Institución',
      name: equipment?.ips.institution.name || 'Sin especificar',
      color: '#f87474d9'
    },
    {
      key: 2,
      label: 'Ips',
      name: equipment?.ips.name || 'Sin especificar',
      color: '#92d5e6ab'
    },
    {
      key: 3,
      label: 'Ubicación',
      name: equipment?.location.name || 'Sin especificar',
      color: '#80d9b58a'
    }
  ]

  return (
    <div className="location-details">
      {
        location.map(loc => {
          return <div className="item-location" key={loc.key}>
            {/* <Typography.Text className="location-label">{loc.label}</Typography.Text>
            <Typography.Text className="location-name">{loc.name}</Typography.Text> */}
            <Statistic className="location-details-item" title={loc.label} value={loc.name} prefix={<BulbTwoTone twoToneColor={loc.color}/>} />
          </div>
        })
      }
    </div>
  )
}
