import { Input } from "antd"

export const Searcher = () => {
    return (
        <Input.Search placeholder="Buscar Usuario" onSearch={() => console.log("a")} className='portal-usuarios__search' color="#c1c1c1"/>
    )
}
