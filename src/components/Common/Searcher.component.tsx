import { Input } from "antd"
import { useNavigate, useLocation } from "react-router-dom";

export const Searcher = ({
    redirect,
    text = 'Buscar' 
}: IProps) => {

    const navigate = useNavigate();
    const location = useLocation();
    const handleSearch = (search:string = '') => {
        if(!search) return;
        navigate(`${redirect}&search=${search}`);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | undefined) => {
        if(event?.target.value === '') {
            let timer;
            clearTimeout(timer);
            timer = setTimeout(() => navigate(`${redirect}`), 500);
        }
    }
    
    return (
        <>
            <Input.Search onChange={handleChange} placeholder={text} onSearch={handleSearch} className='portal-usuarios__search' color="#c1c1c1"/>
        </>
    )
}

interface IProps{
    redirect: string;
    text: string; 
}