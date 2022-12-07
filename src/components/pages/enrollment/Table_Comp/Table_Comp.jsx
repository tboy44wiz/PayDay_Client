import { useContext, useEffect } from 'react';
import DataTable from 'react-data-table-component';

/*==== Import Icons ====*/
import { HiArrowUp } from 'react-icons/hi';

/*==== Import AppStoreContext HOC ====*/
import { AppStoreContext } from '../../../../contexts/AppContextProvider';


/*==== Import _Table_Comp SCSS ====*/
import "./_Table_Comp.scss";

const TableComp = () => {

    // Global State
    const { dashboardTableData } = useContext(AppStoreContext);

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
            minWidth: "350px",
            // maxWidth: "300px",
            // wrap: true
        },
        {
            name: 'Grade Level',
            selector: row => row.gradeLevel,
            minWidth: "160px",
            maxWidth: "200px",
        },
        {
            name: 'Enrollment Date',
            selector: row => row.gradeLevel,
            // selector: row => row.enrollmentDate.split("T")[0].split("-").join("/"),
            minWidth: "150px",
            maxWidth: "200px",
        },
        {
            name: 'Status',
            maxWidth: "150px",
            cell: row => (row.status !== "Active") ? (
                // <span style={{ color: "green" }}>{ row.status }</span>
                <span style={{
                    backgroundColor: "rgba(109, 230, 109, 0.4)",
                    borderRadius: "3px",
                    padding: "7px 10px"
                }}>Active</span>
            ) : (
                // <span style={{ color: "red" }}>{ row.status }</span>
                <span style={{
                    backgroundColor: "rgba(255, 109, 109, 0.3)",
                    borderRadius: "3px",
                    padding: "7px 10px"
                }}>Inactive</span>
            ),
            sortable: true,
        }
    ];

    const data = dashboardTableData;


  return (
    <section className="TableComp container-fluid p-0">
      
        <h3>Overview Table</h3>

        <div className="table__wrapper">
            <DataTable
                columns = { columns }
                data = { data }
                pagination
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
        </div>

    </section>
  )
}

export default TableComp;