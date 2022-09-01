import { useSelector } from "react-redux";
import { IDoc } from "../../../../../interfaces/files/documentsObject.component"
import { getDocTagsSelector } from "../../../../../redux/selectors/equipments.selector";
import { DocumentItem } from "./documentItem.component"


export const DocumentList = ({
    docs,
    handleDelete,
    handleEdit
}: IProps) => {

    const tags = [...new Set(docs.map(doc => doc.tag))];
    const tagsLabel = useSelector(getDocTagsSelector);

    const getTagLabel = (tagId: number) => {
        return tagsLabel.find(tag => tag.id === tagId)?.value || 'Otros';
    }

    return (
        <>
            {
                (tags.length > 0) &&
                tags.map((value, i1) => {
                    const docsInTag = docs.filter(doc => doc.tag === value);
                    return <div key={i1} className="document-list-tags">
                        <h3 className="document-list-tags-title">{getTagLabel(value)}</h3>
                        {
                            (docsInTag.length > 0) && 
                                docsInTag.map((value, index) => 
                                    <DocumentItem 
                                        text={value.name}
                                        key={index}
                                        handleEdit={() => handleEdit(value)}
                                        handleDelete={() => handleDelete(value)}
                                    />
                            )
                        }
                    </div>

                })
            }

        </>
    )
}

interface IProps{
    docs: IDoc[],
    handleEdit: Function,
    handleDelete: Function
}
