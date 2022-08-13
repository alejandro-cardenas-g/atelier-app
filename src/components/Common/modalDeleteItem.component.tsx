import { Button } from "antd"

export const ModalDeleteItem = ({
  handleCancel,
  handleDelete,
  text
}: IProps) => {
  return (
    <div className='delete-item'>
        <p>{text}</p>
        <div className='delete-item__group'>
          <Button className='custom-btn__delete' onClick={() => handleDelete()}>Si, Eliminar</Button>
          <Button className='custom-btn__green' onClick={() => handleCancel()}>No</Button>
        </div>
    </div>
  )
}

interface IProps{
  text: string;
  handleDelete: Function;
  handleCancel: Function;
}
