import { Button } from "antd"

export const ModalDeleteItem = ({
  handleCancel,
  handleDelete,
  text
}: IProps) => {
  return (
    <div>
        <p>{text}</p>
        <Button className='custom-btn__delete' onClick={() => handleDelete()}>Si, Eliminar</Button>
        <Button className='custom-btn__green' onClick={() => handleCancel()}>No</Button>
    </div>
  )
}

interface IProps{
  text: string;
  handleDelete: Function;
  handleCancel: Function;
}
