import React, {useState, useEffect} from 'react'
import './Stats.css'
import axios from 'axios'
import StatsRow from './StatsRow'
import { db } from './firebase'



function Stats() {


    const [stocksData, setStocksData] = useState([])
    const [myStocks, setMyStocks] = useState([])
/*
    async function getStocksData(stock) {
      try {
        return await axios.get(`https://finnhub.io/api/v1/quote?symbol=${stock}&token=bvs6u3f48v6oefuvbt9g`)
      } catch (error) {
        console.log(error);
      }
    }
*/

    const getMyStocks = () => {
      db
        .collection('myStocks')
        .onSnapshot(snapshot => {
          
          let promises = [];
          let tempoData = [];
          snapshot.docs.map((doc) => {
            promises.push(getStocksData(doc.data().ticker)
            .then(res => {
              tempoData.push({
                id: doc.id,
                data: doc.data(),
                info: res.data
              })
            })
          )})
          Promise.all(promises).then(() => {
            console.log(tempoData);
            setMyStocks(tempoData)
          })
        });
    }


    const getStocksData = (stock) => {
      return axios
        .get(`https://finnhub.io/api/v1/quote?symbol=${stock}&token=bvs6u3f48v6oefuvbt9g`)
        .catch((error) => {
          console.error("Error", error.message);
        })
      }

    useEffect(() => {
        const stocksList = ["AAPL", "MSFT", "TSLA", "FB", "BABA", "UBER", "DIS", "SBUX"];
        let tempData =[];
        getMyStocks();
        let promises = [];
        stocksList.map((stock) => {
          promises.push(
            getStocksData(stock)
            .then((res) => {
              tempData.push({
                name: stock,
                ...res.data
              });
            })
          )
        });
        Promise.all(promises).then(()=>{
          setStocksData(tempData);
        })
      }, []);

    return (
        <div className="stats">
            <div className="stats__container">

                <div className="stats__header">
                    <p>Stocks</p>
                </div>
                <div className="stats__content">
                    <div className="stats__row">
                        {myStocks.map((stock) => (
                          <StatsRow 
                            key={stock.data.ticker}
                            name={stock.data.ticker}
                            openPrice={stock.info.o}
                            shares={stock.data.shares}
                            price={stock.info.c}
                          />
                        ))}
                    </div>
                </div>

                <div className="stats__header stats__lists">
                    <p>Lists</p>
                </div>
                <div className="stats__content">
                    <div className="stats__row">
                        {stocksData.map((stock) => (
                          <StatsRow 
                            key={stock.name}
                            name={stock.name}
                            openPrice={stock.o}
                            price={stock.c}
                          />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats
