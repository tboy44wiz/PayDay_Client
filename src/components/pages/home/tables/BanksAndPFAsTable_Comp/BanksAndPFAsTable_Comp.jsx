import React, { useContext } from 'react';


/*==== Import AppStoreContext HOC ====*/
import { AppStoreContext } from '../../../../../contexts/AppContextProvider';

/*==== Import Chart Components ====*/
import TopTenTableComp from '../TopTenTable_Comp/TopTenTable_Comp';

/*==== Import  ====*/

const BakAndPFAsTableComp = () => {

    // Global State
    const { dashboardTopTenBanksTableData, dashboardTopTenPFAsTableData } = useContext(AppStoreContext);
    // console.log(dashboardTopTenBanksTableData)
    // console.log(dashboardTopTenPFAsTableData)

  return (
    <section className="BakAndPFAsTableComp container-fluid mt-5 p-0">
        <div className="row">
            <div className="col-12 col-lg-6">
                <TopTenTableComp tableData={ dashboardTopTenBanksTableData } name="Banks" chartTitle="Top 10 Banks" />
            </div>
            <div className="col-12 col-lg-6">
                <TopTenTableComp tableData={ dashboardTopTenPFAsTableData } name="PFAs" chartTitle="Top 10 PFAs" />
            </div>
        </div>
    </section>
  )
}

export default BakAndPFAsTableComp