import { useContext, useEffect } from 'react';
import DataTable from 'react-data-table-component';

/*==== Import Icons ====*/
import { HiArrowUp } from 'react-icons/hi';
import {TbArrowBarToLeft, TbArrowBarToRight, TbArrowNarrowLeft, TbArrowNarrowRight} from "react-icons/tb";

/*==== Import AppStoreContext HOC ====*/
import { AppStoreContext } from '../../../../contexts/AppContextProvider';


/*==== Import _Table_Comp SCSS ====*/
import "./_Table_Comp.scss";

const TableComp = () => {

    // Global State
    const {
        employeeTableData, employeeFromPage, employeeToPage, employeeTotalData,
        getEmployeeNextAndPrevPage
    } = useContext(AppStoreContext);
    // console.log("EMPLOYEE_DATA::: ", employeeTableData);

    const columns = [
        {
            name: 'S/N',
            selector: row => row.serialNumber,
            width: "80px",
            sortable: true,
        },
        {
            name: 'IPPIS',
            selector: row => row.ippis,
            minWidth: "100px",
            maxWidth: "150px",
            sortable: true,
        },
        {
            name: 'Full Name',
            selector: row => (row.firstName === "") ?
            `${row.middleName} ${row.lastName}` :
            (row.middleName === "") ?
            `${row.firstName} ${row.lastName}` :
            `${row.firstName} ${row.middleName}`,
            minWidth: "220px",
            maxWidth: "300px",
            sortable: true,
        },
        {
            name: 'MDA',
            selector: row => row.mda,
            minWidth: "360px",
            sortable: true
        },
        {
            name: 'Service Provider',
            selector: row => row.serviceProvider,
            minWidth: "150px",
            sortable: true
        },
        {
            name: 'PFA',
            selector: row => row.pfa,
            minWidth: "300px",
            sortable: true
        },
        {
            name: 'Grade Level',
            selector: row => row.gradeLevel,
            minWidth: "120px",
            maxWidth: "150px",
            sortable: true
        },
        {
            name: 'Enrollment Date',
            selector: row => row.enrollmentDate.split("T")[0].split("-").join("/"),
            minWidth: "150px",
            maxWidth: "200px",
        },
        {
            name: 'DOB',
            selector: row => row.dob.split("T")[0].split("-").join("/"),
            minWidth: "150px",
            maxWidth: "200px",
        },
        {
            name: 'Status',
            selector: row => row.status,
            minWidth: "120px",
            maxWidth: "150px",
            sortable: true
        },
    ];

    const data = employeeTableData;


  return (
    <section className="TableComp container-fluid p-0">
      
        <h3>Overview Table</h3>

        <div className="table__wrapper">
            <DataTable
                columns = { columns }
                data = { data }
                // pagination
                fixedHeader = { true }
                striped = { true }
                highlightOnHover = { true }
                sortIcon = { <HiArrowUp size="32" color="black" /> }
                defaultSortField = "createdAt"
                responsive
                dense
            />

            <div className="table-pagination__wrapper">
                <span>{ employeeFromPage } - { employeeToPage } of { employeeTotalData }</span>

                <TbArrowBarToLeft onClick={ () => getEmployeeNextAndPrevPage("firstPage") } className="table-pagination__buttons" />
                <TbArrowNarrowLeft onClick={ () => getEmployeeNextAndPrevPage("prevPage") } className="table-pagination__buttons" />
                <TbArrowNarrowRight onClick={ () => getEmployeeNextAndPrevPage("nextPage") } className="table-pagination__buttons" />
                <TbArrowBarToRight onClick={ () => getEmployeeNextAndPrevPage("lastPage") } className="table-pagination__buttons" />
            </div>
        </div>

    </section>
  )
}

export default TableComp;