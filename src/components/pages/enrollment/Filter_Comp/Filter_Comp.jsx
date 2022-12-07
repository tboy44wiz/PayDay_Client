import { useContext } from 'react';
import Select from 'react-select';

/*==== Import AppStoreContext HOC ====*/
import { AppStoreContext } from '../../../../contexts/AppContextProvider';

/*==== Import _Filter_Comp SCSS ====*/
import "./_Filter_Comp.scss";

const FilterComp = () => {

    // Global State
    const { selectedMinistries, selectedServiceProvider, selectedPFA, selectedState, selectedStatus,
        handleMinistryInputChange, handleServiceProviderInputChange, handlePFAInputChange, handleStateInputChange, handleStatusInputChange,
        stateFilterOptions, statusFilterOptions,
        employeeMinistryFilterData, serviceProviderFilterData, pfaFilterData } = useContext(AppStoreContext);
        // ministriesFilterOptions, serviceProviderFilterOptions, pfaFilterOptions, dashBoardFilters,
    
        console.log("YYYYY", selectedMinistries);
        console.log("YYYYY", selectedServiceProvider);
        console.log("YYYYY", selectedPFA);
    

    const selectSearchStyle = {
        control: (base) => ({
          ...base,
          height: 40,
          width: "auto",
          border: 0,
          boxShadow: "none",
          textTransform: "capitalize",
        }),
        indicatorSeparator: () => null
    };


    return (
        <section className="FilterComp">
    
            <h3>Filters</h3>
            <form className="filter__form">
                <fieldset className="row">
                    {/* Ministry of Works */}
                    <div className="col">
                        <Select
                            styles={ selectSearchStyle }
                            placeholder={ "Ministries..." }
                            options={ employeeMinistryFilterData }
                            getOptionLabel= {(employeeMinistryFilterData) => employeeMinistryFilterData.label}
                            getOptionValue= {(employeeMinistryFilterData) => employeeMinistryFilterData.value}
                            value={ selectedMinistries }
                            onChange={(event => handleMinistryInputChange(event))}
                        />
                    </div>
    
                    {/* Service Provider */}
                    <div className="col">
                        <Select
                            styles={ selectSearchStyle }
                            placeholder={ "Service provider..." }

                            options={ serviceProviderFilterData }
                            getOptionLabel= {(serviceProviderFilterData) => serviceProviderFilterData.label}
                            getOptionValue= {(serviceProviderFilterData) => serviceProviderFilterData.value}
                            value={ selectedServiceProvider }
                            onChange={(event => handleServiceProviderInputChange(event))}
                        />
                    </div>
    
                    {/* PFA */}
                    <div className="col">
                        <Select
                            styles={ selectSearchStyle }
                            value={ selectedPFA }
                            placeholder={ "PFA..." }
                            onChange={(event => handlePFAInputChange(event))}
                            options={ pfaFilterData }
                        />
                    </div>
    
                    {/* State */}
                    <div className="col">
                        <Select
                            styles={ selectSearchStyle }
                            value={ selectedState }
                            placeholder={ "State..." }
                            onChange={(event => handleStateInputChange(event))}
                            options={ stateFilterOptions }
                        />
                    </div>
    
                    {/* Payroll Period */}
                    <div className="col">
                        <Select
                            styles={ selectSearchStyle }
                            value={ selectedStatus }
                            placeholder={ "Status..." }
                            onChange={(event => handleStatusInputChange(event))}
                            options={ statusFilterOptions }
                        />
                    </div>
                </fieldset>
            </form>
        </section>
    );
}

export default FilterComp;