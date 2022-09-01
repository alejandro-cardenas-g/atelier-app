import { Form, message, Spin } from "antd";
import { RcFile } from "antd/lib/upload";
import { useEffect } from "react";
import { PORTAL_ENDPOINTS } from "../../../../api/endpoint";
import { usePostAxios } from "../../../../hooks/usePostAxios.hook";
import { IRegisterEquipment, IRegisterForm } from "../../../../interfaces/portal/equipments/contentEquipments.interface";
import { converToBase64, convertToObjetBae64 } from "../../../../utils/files/convertToBase64.util";
import { EquipmentRegisterForm } from "./equipmentRegisterForm.component";

export const EquipmentRegister = () => {
  window.scrollTo(0,0);

  // UseVerifyModulePermission(
  //   [],
  //   '/'
  // );

  const {execute, loading, result, reset} = usePostAxios<any>({
    messageOnError: true
  });

  const [form] = Form.useForm();

  const initialValues:IRegisterForm = {
    description: '',
    activeFixedNumber: '',
    name: '',
    serial: '',
    institution: null,
    ips: null,
    location: null
  }

  const handleSubmit = async(values: IRegisterEquipment) => {

    const {
      photo,
      docs,
      activeFixedNumber,
      ...mandatoryFields
    } = values;

    const data: {[key:string]: any} = {
      ...mandatoryFields,
      fixedActiveNumber: activeFixedNumber
    };

    if(photo){
      const base64photo = await converToBase64(photo?.originFileObj as RcFile);
      data.photo = {
        buffer: base64photo.split(';base64,')[1],
        size: photo.size,
        type: photo.type,
        name: photo.name
      };
    }
    if(docs.length > 0){
      const base64docs = await Promise.all(docs.map(doc => convertToObjetBae64(doc?.file.originFileObj as RcFile, {refName: doc.name, tag: doc.tag})));
      if(base64docs.length === docs.length){
        data.docs = base64docs;
      }else{
        return;
      }
    }

    execute(
      {
        url: PORTAL_ENDPOINTS.baseEquipments,
        data
      },
      {
          'Content-Type': 'application/json'
      }
    )

  }

  useEffect(() => {
    if(result) {
      message.success('Se ha creado el equipo correctamente');
      form.setFieldsValue(initialValues);
      reset();
    }
  }, [result])

  return (
    <>
      <Spin spinning={loading}/>
      <EquipmentRegisterForm 
        form={form}
        handleSubmit={handleSubmit}
        initialValues={initialValues}
        reset={!!result}
      />
    </>
  )
}
