import { Modal, Typography } from "antd"
import { JSXComponent } from "../../../../interfaces/common/common.interface";
import { Nullish } from "../../../Common/Nullish.component";

export const RegistryModal = ({
  title,
  text
}: IProps) => {
  return (
    <div>
      <Typography.Title level={3}>{title}</Typography.Title>
      <Typography.Paragraph>{text}</Typography.Paragraph>
    </div>
  )
}

interface IProps{
  title: string;
  text: string;
}
