import React, { useContext, useEffect } from 'react';
import DataTable from 'react-data-table-component';

/*==== Import Icons ====*/
import { HiArrowUp } from 'react-icons/hi';

/*==== Import AppStoreContext HOC ====*/
import { AppStoreContext } from '../../../../contexts/AppContextProvider';


/*==== Import _Table_Comp SCSS ====*/
import "./_Table_Comp.scss";
import {TbArrowBarToLeft, TbArrowBarToRight, TbArrowNarrowLeft, TbArrowNarrowRight} from "react-icons/tb";

const TableComp = () => {

    // Global State
    const {
        financialTableData, financialFromPage, financialToPage, financialTotalData,
        getFinancialNextAndPrevPage
    } = useContext(AppStoreContext);

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
            selector: row => (row.firstName === null) ? 
            `${row.middleName} ${row.lastName}` :
            (row.middleName === null) ?
            `${row.firstName} ${row.lastName}` :
            `${row.firstName} ${row.middleName}`,
            minWidth: "220px",
            maxWidth: "300px",
            sortable: true,
        },
        {
            name: 'MDA',
            selector: row => row.mda,
            // minWidth: "300px",
        },
        {
            name: 'Banks',
            selector: row => row.bank,
            sortable: true,
        },
        {
            name: 'Service Provider',
            selector: row => row.serviceProvider,
        },
        {
            name: 'PFAs',
            selector: row => row.pfa,
        },
        {
            name: 'NET Salary',
            selector: row => row.netSalary,
        },
        {
            name: 'Deduction',
            selector: row => row.deduction,
        },
    ];

    const data = financialTableData;


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
                    // selectableRows
                    // defaultSortAsc={false}
                />

                <div className="table-pagination__wrapper">
                    <span>{ financialFromPage } - { financialToPage } of { financialTotalData }</span>

                    <TbArrowBarToLeft onClick={ () => getFinancialNextAndPrevPage("firstPage") } className="table-pagination__buttons" />
                    <TbArrowNarrowLeft onClick={ () => getFinancialNextAndPrevPage("prevPage") } className="table-pagination__buttons" />
                    <TbArrowNarrowRight onClick={ () => getFinancialNextAndPrevPage("nextPage") } className="table-pagination__buttons" />
                    <TbArrowBarToRight onClick={ () => getFinancialNextAndPrevPage("lastPage") } className="table-pagination__buttons" />
                </div>
            </div>
    
        </section>
    )
}

export default TableComp;