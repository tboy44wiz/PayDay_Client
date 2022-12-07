import { useContext, useEffect } from 'react';
import DataTable from 'react-data-table-component';

/*==== Import Icons ====*/
import { HiArrowUp } from 'react-icons/hi';
import { TbArrowBarToLeft, TbArrowBarToRight, TbArrowNarrowLeft, TbArrowNarrowRight } from 'react-icons/tb';

/*==== Import AppStoreContext HOC ====*/
import { AppStoreContext } from '../../../../contexts/AppContextProvider';


/*==== Import _Table_Comp SCSS ====*/
import "./_Table_Comp.scss";

const TableComp = () => {

    // Global State
    const {
        dashboardTableData, dashboardFromPage, dashboardToPage, dashboardTotalData,
        getDashboardNextAndPrevPage
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
            minWidth: "300px",
        },
        {
            name: 'Service Provider',
            selector: row => row.serviceProvider,
            // minWidth: "300px",
        },
        {
            name: 'PFAs',
            selector: row => row.pfa,
        },
        {
            name: 'Banks',
            selector: row => row.bank,
            sortable: true,
        },
        {
            name: 'NET Salary',
            selector: row => `₦${ row.netSalary }`,
        },
        {
            name: 'Enrollment Date',
            selector: row => row.enrollmentPeriod,
            minWidth: "150px",
            maxWidth: "200px",
        },
        {
            name: 'DOB',
            selector: row => row.dob,
        },
    ];

    const data = dashboardTableData;



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
                <span>{ dashboardFromPage } - { dashboardToPage } of { dashboardTotalData }</span>

                <TbArrowBarToLeft onClick={ () => getDashboardNextAndPrevPage("firstPage") } className="table-pagination__buttons" />
                <TbArrowNarrowLeft onClick={ () => getDashboardNextAndPrevPage("prevPage") } className="table-pagination__buttons" />
                <TbArrowNarrowRight onClick={ () => getDashboardNextAndPrevPage("nextPage") } className="table-pagination__buttons" />
                <TbArrowBarToRight onClick={ () => getDashboardNextAndPrevPage("lastPage") } className="table-pagination__buttons" />
            </div>
        </div>

    </section>
  )
}

export default TableComp;