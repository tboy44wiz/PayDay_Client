import DataTable from 'react-data-table-component';

/*==== Import Icons ====*/
import { HiArrowUp } from 'react-icons/hi';


/*=== Import _SalaryDeductionTable_Comp SCSS ===*/
import "./_SalaryDeductionTable_Comp.scss";


const SalaryDeductionTableComp = (props) => {
    const { tableData, chartTitle } = props;

    const columns = [
        {
            name: "MDAs",
            selector: row => row.mda,
            maxWidth: "400px",
            sortable: true,
        },
        {
            name: 'Salary',
            selector: row => `₦${row.earning}`,
            maxWidth: "150px",
            sortable: true,
        },
        {
            name: 'Deduction',
            selector: row => `₦${row.deduction}`,
            maxWidth: "150px",
            sortable: true,
            // hide: "sm",
        },
    ];

    const data = tableData;



    return (
        <section className="SalaryDeductionTableComp mCard">
            <h1 className="table__title">{ chartTitle }</h1>

            <div className="table__wrapper">
                <DataTable
                    columns = { columns }
                    data = { data }
                    fixedHeader = { false }
                    striped = { true }
                    highlightOnHover = { true }
                    sortIcon = { <HiArrowUp size="32" color="black" /> }
                    defaultSortField = "mda"
                    responsive
                    dense
                    // defaultSortAsc={false}
                />
            </div>
        </section>
    )
}

export default SalaryDeductionTableComp;