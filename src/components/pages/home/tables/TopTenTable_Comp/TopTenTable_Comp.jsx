import React, {useContext} from "react";
import DataTable from 'react-data-table-component';
import { GridLoader } from "react-spinners";

/*==== Import AppStoreContext HOC ====*/
import {AppStoreContext} from "../../../../../contexts/AppContextProvider";

/*==== Import Icons ====*/
import { HiArrowUp } from 'react-icons/hi';


/*=== Import _TopTenTable_Comp SCSS ===*/
import "./_TopTenTable_Comp.scss";


const TopTenTableComp = (props) => {
    const { tableData, name, chartTitle } = props;

    // Global State
    const { isDashBoardTopTenLoading } = useContext(AppStoreContext);

    const columns = [
        {
            name: 'S/N',
            selector: row => row.serialNumber,
            width: "60px",
        },
        {
            name: `${ name }`,
            selector: row => row.name,
            sortable: true,
            minWidth: "230px",
        },
        {
            name: 'Amount',
            selector: row => `₦${row.amount}`,
            sortable: true,
            maxWidth: "200px",
            // hide: "sm",
        },
        {
            name: 'Total(%)',
            selector: row => row.percentage + "%",
            sortable: true,
            maxWidth: "120px",
        },
    ];
    const data = tableData;


    return (
        <section className="TopTenTableComp">
            <h1 className="table__title">{ chartTitle }</h1>

            <div className="table__wrapper">

                {/*==== Loading Overlay Wrapper ====*/}
                {(!isDashBoardTopTenLoading) ? (
                    <DataTable
                        columns = { columns }
                        data = { data }
                        fixedHeader = { true }
                        striped = { true }
                        noDataComponent = "Please wait while data is loading..."
                        highlightOnHover = { true }
                        sortIcon = { <HiArrowUp size="32" color="black" /> }
                        defaultSortField = "bank"
                        responsive
                        dense
                        // defaultSortAsc={false}
                    />
                ) : (
                    <div className="GridLoader__wrapper">
                        <GridLoader
                            size={10}
                            color={"#757575"}
                        />
                        <p>Loading...</p>
                    </div>
                )}
            </div>
        </section>
    )
}

export default TopTenTableComp;