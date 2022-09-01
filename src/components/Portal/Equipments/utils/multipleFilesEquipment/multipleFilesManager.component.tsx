import { Button, Modal } from "antd";
import { useState } from "react";
import { IDoc } from "../../../../../interfaces/files/documentsObject.component";
import { DocumentForm } from "./documentForm.component";
import { DocumentItem } from "./documentItem.component";
import { DocumentList } from "./documentList.component";

export const MultipleFilesManager = ({
    className='',
    docs,
    setDocs
}: IProps) => {

    const [active, setActive] = useState(false);
    const [activeDoc, setActiveDoc] = useState<null | IDoc>(null);

    const handleAdd = (docRef: IDoc) => {
        setDocs(prev => [...prev.filter(doc => doc.id !== docRef.id), docRef]);
        setActive(false);
        setActiveDoc(null);
    }

    const handleEdit = (value: IDoc) => {
        setActiveDoc(value);
        setActive(true);
    }

    const handleDelete = (value: IDoc) => {
        setActiveDoc(null);
        setActive(false);
        setDocs(prev => prev.filter(doc => doc.id !== value.id));
    }
    
    return (
        <div className={className}>
            <Modal
                visible={active}
                closable={true}
                destroyOnClose
                maskClosable={true}
                onCancel={()=> {setActive(false);setActiveDoc(null)}}
                className='modal-documents'
                footer={null}
                children={
                    <DocumentForm
                        {...activeDoc}
                        addDoc={handleAdd}
                    />
                }
            />
            <div>
                <DocumentList
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    docs={docs}
                />
                {/* {
                    (docs.length > 0) && 
                    docs.map((value, index) => 
                        <DocumentItem 
                            text={value.name}
                            key={index}
                            handleEdit={() => handleEdit(value)}
                            handleDelete={() => handleDelete(value)}
                        />
                    )
                } */}
            </div>
            <div>
                <Button onClick={() => setActive(true)} className='custom-btn__white'>Añadir documento</Button>
            </div>
        </div>
    )
}

interface IProps
{
    className: string;
    docs: IDoc[];
    setDocs: React.Dispatch<React.SetStateAction<IDoc[]>>;
}
