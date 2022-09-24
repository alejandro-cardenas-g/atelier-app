import { ClearOutlined, FilterOutlined } from "@ant-design/icons";
import { Button, Drawer, Select, Spin, Typography } from "antd"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { dispatchClearDrawer, dispatchGetIps, dispatchGetLocations } from "../../../../../redux/dispatchers/portal/equipments.dispatch";
import { AuthUserSelector } from "../../../../../redux/selectors/auth.selector";
import { getInstitutions } from "../../../../../redux/selectors/common.selector";
import { getDrawerSelector } from "../../../../../redux/selectors/equipments.selector";

export const DrawerFilters = ({
  visible,
  closeFunction
}: IProps) => {

  const company = useSelector(AuthUserSelector);

  const initialValues = {
    institution: company || null,
    ips: null,
    location: null
  }
  const [values, setValues] = useState<IInitialValues>(initialValues);
  const [changes, setChanges] = useState(false);
  const institutions = useSelector(getInstitutions).map((inst) => ({
    label: inst.name,
    value: inst.id 
  }));

  const { filters, ips, loading, location } = useSelector(getDrawerSelector);

  const handleChange = (key: string, value: any) => {
    setValues(prev => ({
      ...prev,
      [key]: value.value
    }));
    setChanges(true);
  };

  const handleClear = () => {
    setValues(initialValues);
    setChanges(false);
    let clearIps = false;
    if(!company){
      clearIps = true;
    }
    dispatchClearDrawer({clearIps, clearLocation: true});

  }

  useEffect(() => {
    if(values.institution)
      dispatchGetIps(values.institution);
  }, [values.institution]);

  useEffect(() => {
    if(values.ips)
      dispatchGetLocations(values.ips);
  }, [values.ips]);

  return (
    <Drawer title="Filtros" placement="right" onClose={() => closeFunction()}  visible={visible}
      className="filter-drawer"
    >
      <div
        style={{
          display:'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {changes &&
          <Typography.Text style={{
            textAlign: 'start',
            width: '100%',
            color: '#d09b30d9'
          }}>Cambios sin aplicar</Typography.Text>
        }
        {
          !company &&
          <Select style={{width: '100%', marginBottom: '1rem'}}
            placeholder="Institución"
            options={institutions}
            value={company || values.institution}
            onChange={(label, value) => handleChange("institution", value)}
            disabled={loading}
          ></Select>
        }

        <Select style={{width: '100%', marginBottom: '1rem'}}
          placeholder="Ips"
          options={ips.map(ip =>({
            label: ip.name,
            value: ip.id
          }))}
          value={values.ips}
          onChange={(label, value) => handleChange("ips", value)}
          disabled={loading}
        ></Select>
        <Select style={{width: '100%', marginBottom: '3rem'}}
          placeholder="Ubicación"
          options={location.map(loc =>({
            label: loc.name,
            value: loc.id
          }))}
          value={values.location}
          onChange={(label, value) => handleChange("location", value)}
          disabled={loading}
        ></Select>
        <div style={{
          display: 'flex',
          gap: '1rem',
          marginBottom: '5rem'
        }}>
          <Button className="custom-btn__blue" icon={<FilterOutlined />}>
            Aplicar
          </Button>
          <Button className="custom-btn__save" icon={<ClearOutlined />}
            onClick={handleClear}
          >
          </Button>
        </div>
        <Spin spinning={loading} style={{marginBottom: '1rem'}}/>
      </div>
    </Drawer>
  )
}

interface IProps{
  visible: boolean;
  closeFunction: () => void;
}

interface IInitialValues{
  institution: number | null;
  ips: number | null;
  location: number | null;
}
