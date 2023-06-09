import '../App.css'

const LatestDeals=({latestDeals})=>{
    console.log(latestDeals)
    return <div className="latestDeals-box">
    {latestDeals.map((deals, id)=>{
       return <div className="deals" key={id}>
            <h4>{deals.title}</h4>
             <h5>Normal Price: ${deals.normalPrice}</h5>
             <h5 id='offer'>offer price: ${deals.salePrice}</h5>
             <h4>Savings: {deals.savings.substr(0,2)}%</h4>
        </div>
    })}
    </div>
}

export default LatestDeals;