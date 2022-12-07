import DataTable from 'react-data-table-component';

/*==== Import Icons ====*/
import { HiArrowUp } from 'react-icons/hi';


/*=== Import _AnnualEmployeePayment_Comp SCSS ===*/
import "./_GeneralTable_Comp.scss";


const GeneralTableComp = (props) => {
    const { tableData, chartTitle, colOneTitle, colTwoTitle, colThreeTitle } = props;

    const columns = [
        {
            name: `${colOneTitle}`,
            selector: row => row.name,
            maxWidth: "400px",
            sortable: true,
        },
        {
            name: `${colTwoTitle}`,
            selector: row => row.value,
            maxWidth: "150px",
            sortable: true,
        },
        {
            name: `${colThreeTitle}`,
            selector: row => `${ row.percentage }%`,
            maxWidth: "150px",
            // hide: "sm",
        },
    ];

    const data = tableData;



    return (
        <section className="GeneralTableComp mCard">
            <h1 className="table__title">{ chartTitle }</h1>

            <div className="table__wrapper">
                <DataTable
                    columns = { columns }
                    data = { data }
                    fixedHeader = { false }
                    striped = { true }
                    highlightOnHover = { true }
                    sortIcon = { <HiArrowUp size="32" color="black" /> }
                    defaultSortField = "name"
                    responsive
                    dense
                    // defaultSortAsc={false}
                />
            </div>
        </section>
    )
}

export default GeneralTableComp;