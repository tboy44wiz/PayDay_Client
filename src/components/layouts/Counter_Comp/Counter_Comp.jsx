/*==== Import _Counter_Comp SCSS ====*/
import "./_Counter_Comp.scss";

const CounterComp = ({ data }) => {

    return (
        <section className="CounterComp container-fluid p-0">

            <h3>Counter</h3>

            <div className="counter-card__wrapper row row-cols-2 row-cols-sm-1 row-cols-md-2 row-cols-lg-4 gx-lg-3 gy-lg-0">
                {data.map((eachCounter, index) => (
                    <div className="col pb-4 pb-lg-3" key={ index }>
                        <div className="mCard card__wrapper col">
                            <div className={ `card_top item__${index}` }>
                                <p>{ eachCounter.title }</p>
                                <eachCounter.icon className={`card__icon item${index}__icon`} />
                            </div>
                            <h1>{ eachCounter.number }</h1>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default CounterComp;