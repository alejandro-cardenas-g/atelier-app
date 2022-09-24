import { Collapse, Typography } from "antd";
import { useSelector } from "react-redux";
import { IDoc } from "../../../../../interfaces/files/documentsObject.component";
import { getDocTagsSelector, getSingleEquipment } from "../../../../../redux/selectors/equipments.selector";
import { DocumentItem } from "./documents/documentItem.component";


export const DocumentDetails = () => {

  const documents = useSelector(getSingleEquipment)?.documents || [];

  const tags = [...new Set(documents.map(doc => doc.tagId))];
  const tagsLabel = useSelector(getDocTagsSelector);

  const getTagLabel = (tagId: number) => {
      return tagsLabel.find(tag => tag.id === tagId)?.value || 'Otros';
  }
  return (
    <div className="equipments-details-documents">
      <Collapse defaultActiveKey={['1']} ghost>
      {
        tags.map((tag, index1) => {
          const tagLabel = getTagLabel(tag);
          const docsInTag = documents.filter(doc => doc.tagId === tag);
          return <Collapse.Panel header={tagLabel} key={index1}>
                {
                  docsInTag.map((doc, index2) => {
                    return <DocumentItem key={index2} doc={doc}/>
                  })
                }
              </Collapse.Panel>
        })
      }
      </Collapse>
    </div>
  )
}
