import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Footer from '../components/Footer';
import Navbar from "../components/Navbar/index2";
import Sidebar from "../components/Sidebar/index2";
import 'bootstrap/dist/css/bootstrap.css';
import BootstrapTable from 'react-bootstrap-table-next'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import {Wrapper, AdminContainer, variants} from "../components/AdminSection/AdminElements"
import { motion } from "framer-motion";

const Admin = () => {
  
  const columns = [
    {dataField: 'name' , text: 'Name', sort: true, filter: textFilter()},
    {dataField: 'course1Marks' , text: 'Gen. Safety', sort: true},
    {dataField: 'course2Marks' , text: 'Chem. Safety', sort: true},
    {dataField: 'course3Marks' , text: 'Cont. Subs', sort: true},
    {dataField: 'course4Marks' , text: 'Formal.', sort: true},
    {dataField: 'course5Marks' , text: 'Anesth. Gases', sort: true},    
  ]
  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 5,
    nextPageText: '>',
    prePageText: '<',
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log('page', page);
      console.log('sizePerPage', sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log('page', page);
      console.log('sizePerPage', sizePerPage);
    }
  });
  const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);
  const [allUsersData, setallUsersData] = useState({});
  const callHomePage = async () => {
      try {
          const res = await fetch("/api/admin" , {
              method: "GET",
              headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json"
              },
              credentials:"include"
          }); 
          
          const data = await res.json();
          if(res.status === 400 || !data){
            navigate("/home");
          }
          setallUsersData(data);
       
        
          if(!res.status === 200){
              const error = new Error(res.error);
              throw error;
          }
      } catch (error) {
          console.log(error);
          navigate("/signin");
      }
  }
  useEffect(() => {
      callHomePage();
  }, []);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  let dataArr = Array.from(allUsersData);
  console.log(dataArr);

	return (
		<>
		  <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <AdminContainer>
        <Wrapper>
          <motion.p
            z-index="1"
            variants={variants}
            initial="initial"
            animate="animate"
            transition={{ duration: 1 }}
          >
          Admin Section
          </motion.p>
        </Wrapper>
        <BootstrapTable
          size="sm"
          bordered hover
          bootstrap4
          keyField='name'
          data={dataArr}
          columns={columns}
          pagination={pagination}
          filter={filterFactory()}
        />
      </AdminContainer>
			<Footer/>
		</>
	);
};

export default Admin;