import { FilterOutlined } from "@ant-design/icons";
import { Drawer, Pagination } from "antd";
import { parse } from "query-string";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { dispatchGetEquipments } from "../../../redux/dispatchers/portal/equipments.dispatch";
import { getEquipmentsPortal } from "../../../redux/selectors/equipments.selector";
import { SpinnerScreen } from "../../Common/Spinner.component";
import { CardGrid } from "./main/cardGrid.component";
import { EquipmentInfo } from "./utils/EquipmentInfo.component";
import { DrawerFilters } from "./utils/filterModule/DrawerFilters.component";

export const Equipments = () => {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();
  const { page, search='' } = parse(location.search);

  const {equipments, total, isLoading} = useSelector(getEquipmentsPortal);

  const [ currentPage, setCurrentPage ] = useState<number>((typeof(page) === 'string') ? Number.parseInt(page) : 1);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
      const searching = (search && typeof(search) === 'string') ? `&search=${search}` : '';
      if(total && equipments.length === 0 && currentPage !== 1 && searching === ''){
          setCurrentPage(1);
          navigate(`/equipos?page=${1}`)
      }
      if(searching){
          setCurrentPage(1);
          navigate(`/equipos?page=${1}&search=${search}`)
      }
  }, [equipments, currentPage, total])

  useEffect(() => {
    const searching = (search && typeof(search) === 'string') ? `&search=${search}` : '';
    navigate(`/equipos?page=${currentPage}${searching}`)
    dispatchGetEquipments(currentPage, searching);
  }, [currentPage, search]);

  const handlePageNumber = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  }

  return (
    <div className='portal-equipment portal-equipment__main portal-container ani-cont'>
      <DrawerFilters visible={visible} closeFunction={() => setVisible(false)}/>
      <EquipmentInfo type={0}/>
      <div className="">
        <div style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'end',
          marginBottom: '1rem'
        }} className="equipment-card-row">
          <FilterOutlined className="filter_button" onClick={() => setVisible(true)}/>
        </div>
        {
          isLoading ?
            <SpinnerScreen/>
          :
            <React.Fragment>

              <CardGrid equipments={equipments}/>
              <Pagination
                className='pagination'
                total={total || 0}
                onChange={(pageNumber) => handlePageNumber(pageNumber)}
                pageSize={15}
                showSizeChanger={false}
                current={currentPage}
                hideOnSinglePage
              />
            </React.Fragment>

        }
      </div>

    </div>
  )
}

export default Equipments;
