import { useState, useEffect, useRef } from 'react'
import './App.css';
/**
import cards from './cards.json'
let fetchpage = async (page=1, type='mlb_card') => {
  const firstcard = (page-1) * 100
  const lastcard = (page) * 100
  return ((cards) => {
  return new Promise((res) => setTimeout(() => res({
      total_pages: Math.ceil(cards.length / 100),
      listings: cards.slice(firstcard,lastcard),
  }), Math.random() * 100 + 100))
  })(cards.slice(0, 500))
}
let fetchlisting = (uuid) => new Promise((res) => setTimeout(() => res({
  "listing_name":"Roberto Clemente","best_sell_price":5777,"best_buy_price":5000,"item":{"uuid":"73d20b039c7607c58dd816c7e9fa29ed","img":"https://mlb21.theshow.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBazFqIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b5b71c30bee4c37b8143731bc4ca534480b72244/083d683764ed459d148692a20e43a182.jpg","name":"Roberto Clemente","rarity":"Diamond","team":"Pirates","ovr":85,"series":"Veteran"},"price_history":[{"date":"5/07","best_buy_price":0,"best_sell_price":5000},{"date":"5/06","best_buy_price":0,"best_sell_price":5600},{"date":"5/05","best_buy_price":0,"best_sell_price":5733},{"date":"5/04","best_buy_price":0,"best_sell_price":5250},{"date":"5/03","best_buy_price":0,"best_sell_price":5501},{"date":"5/02","best_buy_price":0,"best_sell_price":5400},{"date":"5/01","best_buy_price":0,"best_sell_price":5500},{"date":"4/30","best_buy_price":5000,"best_sell_price":5655},{"date":"4/29","best_buy_price":5000,"best_sell_price":5598},{"date":"4/28","best_buy_price":0,"best_sell_price":5200},{"date":"4/27","best_buy_price":0,"best_sell_price":5699},{"date":"4/26","best_buy_price":0,"best_sell_price":5500},{"date":"4/25","best_buy_price":5000,"best_sell_price":5490},{"date":"4/24","best_buy_price":5000,"best_sell_price":5300},{"date":"4/23","best_buy_price":5000,"best_sell_price":5500},{"date":"4/22","best_buy_price":0,"best_sell_price":5555},{"date":"4/21","best_buy_price":0,"best_sell_price":5699},{"date":"4/20","best_buy_price":5000,"best_sell_price":5500},{"date":"4/19","best_buy_price":0,"best_sell_price":5799},{"date":"4/18","best_buy_price":0,"best_sell_price":5000},{"date":"4/17","best_buy_price":0,"best_sell_price":5000},{"date":"4/16","best_buy_price":0,"best_sell_price":0},{"date":"4/15","best_buy_price":0,"best_sell_price":0}],"completed_orders":[{"date":"5/8/2021 12:34:53 AM","price":"5,777"},{"date":"5/8/2021 12:34:50 AM","price":"5,000"},{"date":"5/8/2021 12:34:36 AM","price":"5,000"},{"date":"5/8/2021 12:34:27 AM","price":"5,777"},{"date":"5/8/2021 12:34:25 AM","price":"5,000"},{"date":"5/8/2021 12:34:01 AM","price":"5,777"},{"date":"5/8/2021 12:33:57 AM","price":"5,000"},{"date":"5/8/2021 12:33:18 AM","price":"5,777"},{"date":"5/8/2021 12:33:18 AM","price":"5,000"},{"date":"5/8/2021 12:32:59 AM","price":"5,000"},{"date":"5/8/2021 12:32:52 AM","price":"5,777"},{"date":"5/8/2021 12:32:51 AM","price":"5,000"},{"date":"5/8/2021 12:32:48 AM","price":"5,000"},{"date":"5/8/2021 12:32:37 AM","price":"5,000"},{"date":"5/8/2021 12:32:35 AM","price":"5,777"},{"date":"5/8/2021 12:32:32 AM","price":"5,000"},{"date":"5/8/2021 12:32:26 AM","price":"5,777"},{"date":"5/8/2021 12:32:18 AM","price":"5,000"},{"date":"5/8/2021 12:32:10 AM","price":"5,000"},{"date":"5/8/2021 12:32:04 AM","price":"5,777"},{"date":"5/8/2021 12:31:56 AM","price":"5,770"},{"date":"5/8/2021 12:31:49 AM","price":"5,000"},{"date":"5/8/2021 12:31:38 AM","price":"5,777"},{"date":"5/8/2021 12:31:33 AM","price":"5,777"},{"date":"5/8/2021 12:31:28 AM","price":"5,000"},{"date":"5/8/2021 12:31:19 AM","price":"5,776"},{"date":"5/8/2021 12:31:00 AM","price":"5,777"},{"date":"5/8/2021 12:30:38 AM","price":"5,777"},{"date":"5/8/2021 12:30:09 AM","price":"5,776"},{"date":"5/8/2021 12:30:05 AM","price":"5,000"},{"date":"5/8/2021 12:29:24 AM","price":"5,777"},{"date":"5/8/2021 12:29:15 AM","price":"5,777"},{"date":"5/8/2021 12:29:11 AM","price":"5,700"},{"date":"5/8/2021 12:28:58 AM","price":"5,699"},{"date":"5/8/2021 12:28:13 AM","price":"5,600"},{"date":"5/8/2021 12:28:08 AM","price":"5,000"},{"date":"5/8/2021 12:27:11 AM","price":"5,000"},{"date":"5/8/2021 12:26:41 AM","price":"5,000"},{"date":"5/8/2021 12:26:23 AM","price":"5,777"},{"date":"5/8/2021 12:25:53 AM","price":"5,777"},{"date":"5/8/2021 12:25:48 AM","price":"5,777"},{"date":"5/8/2021 12:25:48 AM","price":"5,000"},{"date":"5/8/2021 12:25:48 AM","price":"5,777"},{"date":"5/8/2021 12:25:45 AM","price":"5,777"},{"date":"5/8/2021 12:25:43 AM","price":"5,000"},{"date":"5/8/2021 12:25:42 AM","price":"5,777"},{"date":"5/8/2021 12:25:33 AM","price":"5,000"},{"date":"5/8/2021 12:25:32 AM","price":"5,777"},{"date":"5/8/2021 12:25:32 AM","price":"5,000"},{"date":"5/8/2021 12:25:29 AM","price":"5,777"},{"date":"5/8/2021 12:25:28 AM","price":"5,777"},{"date":"5/8/2021 12:25:16 AM","price":"5,777"},{"date":"5/8/2021 12:25:05 AM","price":"5,000"},{"date":"5/8/2021 12:25:03 AM","price":"5,750"},{"date":"5/8/2021 12:24:58 AM","price":"5,000"},{"date":"5/8/2021 12:24:56 AM","price":"5,777"},{"date":"5/8/2021 12:24:53 AM","price":"5,777"},{"date":"5/8/2021 12:24:49 AM","price":"5,000"},{"date":"5/8/2021 12:24:42 AM","price":"5,001"},{"date":"5/8/2021 12:24:38 AM","price":"5,001"},{"date":"5/8/2021 12:24:35 AM","price":"5,001"},{"date":"5/8/2021 12:24:33 AM","price":"5,775"},{"date":"5/8/2021 12:24:06 AM","price":"5,777"},{"date":"5/8/2021 12:24:01 AM","price":"5,777"},{"date":"5/8/2021 12:23:56 AM","price":"5,001"},{"date":"5/8/2021 12:23:52 AM","price":"5,776"},{"date":"5/8/2021 12:23:47 AM","price":"5,776"},{"date":"5/8/2021 12:23:31 AM","price":"5,776"},{"date":"5/8/2021 12:23:26 AM","price":"5,001"},{"date":"5/8/2021 12:23:19 AM","price":"5,001"},{"date":"5/8/2021 12:23:16 AM","price":"5,004"},{"date":"5/8/2021 12:22:37 AM","price":"5,776"},{"date":"5/8/2021 12:22:35 AM","price":"5,000"},{"date":"5/8/2021 12:22:24 AM","price":"5,776"},{"date":"5/8/2021 12:22:10 AM","price":"5,000"},{"date":"5/8/2021 12:22:08 AM","price":"5,000"},{"date":"5/8/2021 12:22:02 AM","price":"5,776"},{"date":"5/8/2021 12:21:26 AM","price":"5,776"},{"date":"5/8/2021 12:21:24 AM","price":"5,776"},{"date":"5/8/2021 12:21:05 AM","price":"5,000"},{"date":"5/8/2021 12:20:59 AM","price":"5,776"},{"date":"5/8/2021 12:20:57 AM","price":"5,000"},{"date":"5/8/2021 12:20:53 AM","price":"5,776"},{"date":"5/8/2021 12:20:35 AM","price":"5,775"},{"date":"5/8/2021 12:20:32 AM","price":"5,700"},{"date":"5/8/2021 12:20:21 AM","price":"5,776"},{"date":"5/8/2021 12:20:16 AM","price":"5,000"},{"date":"5/8/2021 12:20:14 AM","price":"5,775"},{"date":"5/8/2021 12:20:13 AM","price":"5,775"},{"date":"5/8/2021 12:20:11 AM","price":"5,700"},{"date":"5/8/2021 12:20:09 AM","price":"5,000"},{"date":"5/8/2021 12:20:00 AM","price":"5,000"},{"date":"5/8/2021 12:19:53 AM","price":"5,776"},{"date":"5/8/2021 12:19:49 AM","price":"5,000"},{"date":"5/8/2021 12:19:41 AM","price":"5,000"},{"date":"5/8/2021 12:19:40 AM","price":"5,776"},{"date":"5/8/2021 12:19:29 AM","price":"5,000"},{"date":"5/8/2021 12:19:29 AM","price":"5,775"},{"date":"5/8/2021 12:19:22 AM","price":"5,000"},{"date":"5/8/2021 12:18:54 AM","price":"5,000"},{"date":"5/8/2021 12:18:47 AM","price":"5,000"},{"date":"5/8/2021 12:18:43 AM","price":"5,776"},{"date":"5/8/2021 12:18:39 AM","price":"5,000"},{"date":"5/8/2021 12:18:34 AM","price":"5,000"},{"date":"5/8/2021 12:18:32 AM","price":"5,000"},{"date":"5/8/2021 12:18:27 AM","price":"5,776"},{"date":"5/8/2021 12:18:24 AM","price":"5,000"},{"date":"5/8/2021 12:18:16 AM","price":"5,000"},{"date":"5/8/2021 12:18:14 AM","price":"5,000"},{"date":"5/8/2021 12:18:01 AM","price":"5,000"},{"date":"5/8/2021 12:17:23 AM","price":"5,775"},{"date":"5/8/2021 12:17:22 AM","price":"5,777"},{"date":"5/8/2021 12:17:18 AM","price":"5,777"},{"date":"5/8/2021 12:17:17 AM","price":"5,777"},{"date":"5/8/2021 12:17:00 AM","price":"5,777"},{"date":"5/8/2021 12:16:59 AM","price":"5,766"},{"date":"5/8/2021 12:16:57 AM","price":"5,770"},{"date":"5/8/2021 12:16:56 AM","price":"5,768"},{"date":"5/8/2021 12:16:55 AM","price":"5,766"},{"date":"5/8/2021 12:16:38 AM","price":"5,767"},{"date":"5/8/2021 12:16:22 AM","price":"5,767"},{"date":"5/8/2021 12:16:04 AM","price":"5,765"},{"date":"5/8/2021 12:15:39 AM","price":"5,600"},{"date":"5/8/2021 12:15:17 AM","price":"5,769"},{"date":"5/8/2021 12:15:01 AM","price":"5,769"},{"date":"5/8/2021 12:15:00 AM","price":"5,769"},{"date":"5/8/2021 12:14:59 AM","price":"5,769"},{"date":"5/8/2021 12:14:57 AM","price":"5,768"},{"date":"5/8/2021 12:14:00 AM","price":"5,768"},{"date":"5/8/2021 12:13:41 AM","price":"5,750"},{"date":"5/8/2021 12:13:14 AM","price":"5,000"},{"date":"5/8/2021 12:12:41 AM","price":"5,768"},{"date":"5/8/2021 12:12:29 AM","price":"5,768"},{"date":"5/8/2021 12:12:14 AM","price":"5,500"},{"date":"5/8/2021 12:12:07 AM","price":"5,300"},{"date":"5/8/2021 12:11:48 AM","price":"5,750"},{"date":"5/8/2021 12:11:44 AM","price":"5,745"},{"date":"5/8/2021 12:11:14 AM","price":"5,700"},{"date":"5/8/2021 12:10:28 AM","price":"5,500"},{"date":"5/8/2021 12:10:17 AM","price":"5,777"},{"date":"5/8/2021 12:10:09 AM","price":"5,776"},{"date":"5/8/2021 12:09:38 AM","price":"5,000"},{"date":"5/8/2021 12:08:57 AM","price":"5,777"},{"date":"5/8/2021 12:08:44 AM","price":"5,000"},{"date":"5/8/2021 12:08:43 AM","price":"5,000"},{"date":"5/8/2021 12:08:09 AM","price":"5,777"},{"date":"5/8/2021 12:07:31 AM","price":"5,777"},{"date":"5/8/2021 12:07:18 AM","price":"5,777"},{"date":"5/8/2021 12:07:03 AM","price":"5,000"},{"date":"5/8/2021 12:07:02 AM","price":"5,000"},{"date":"5/8/2021 12:07:01 AM","price":"5,777"},{"date":"5/8/2021 12:07:01 AM","price":"5,000"},{"date":"5/8/2021 12:06:56 AM","price":"5,777"},{"date":"5/8/2021 12:06:42 AM","price":"5,775"},{"date":"5/8/2021 12:06:39 AM","price":"5,774"},{"date":"5/8/2021 12:06:13 AM","price":"5,773"},{"date":"5/8/2021 12:05:51 AM","price":"5,772"},{"date":"5/8/2021 12:05:45 AM","price":"5,771"},{"date":"5/8/2021 12:05:41 AM","price":"5,000"},{"date":"5/8/2021 12:05:36 AM","price":"5,000"},{"date":"5/8/2021 12:05:33 AM","price":"5,771"},{"date":"5/8/2021 12:05:24 AM","price":"5,770"},{"date":"5/8/2021 12:05:00 AM","price":"5,750"},{"date":"5/8/2021 12:04:56 AM","price":"5,000"},{"date":"5/8/2021 12:04:46 AM","price":"5,500"},{"date":"5/8/2021 12:04:19 AM","price":"5,774"},{"date":"5/8/2021 12:04:18 AM","price":"5,774"},{"date":"5/8/2021 12:04:04 AM","price":"5,773"},{"date":"5/8/2021 12:03:52 AM","price":"5,773"},{"date":"5/8/2021 12:03:31 AM","price":"5,000"},{"date":"5/8/2021 12:03:18 AM","price":"5,770"},{"date":"5/8/2021 12:03:03 AM","price":"5,000"},{"date":"5/8/2021 12:02:17 AM","price":"5,773"},{"date":"5/8/2021 12:02:15 AM","price":"5,773"},{"date":"5/8/2021 12:02:10 AM","price":"5,000"},{"date":"5/8/2021 12:01:56 AM","price":"5,773"},{"date":"5/8/2021 12:01:49 AM","price":"5,773"},{"date":"5/8/2021 12:01:36 AM","price":"5,773"},{"date":"5/8/2021 12:01:16 AM","price":"5,773"},{"date":"5/8/2021 12:01:12 AM","price":"5,000"},{"date":"5/8/2021 12:00:59 AM","price":"5,773"},{"date":"5/8/2021 12:00:48 AM","price":"5,773"},{"date":"5/8/2021 12:00:38 AM","price":"5,600"},{"date":"5/8/2021 12:00:08 AM","price":"5,500"},{"date":"5/7/2021 11:59:54 PM","price":"5,000"},{"date":"5/7/2021 11:59:39 PM","price":"5,000"},{"date":"5/7/2021 11:59:02 PM","price":"5,773"},{"date":"5/7/2021 11:58:55 PM","price":"5,002"},{"date":"5/7/2021 11:58:45 PM","price":"5,772"},{"date":"5/7/2021 11:58:42 PM","price":"5,771"},{"date":"5/7/2021 11:58:31 PM","price":"5,500"},{"date":"5/7/2021 11:57:29 PM","price":"5,000"},{"date":"5/7/2021 11:57:24 PM","price":"5,770"},{"date":"5/7/2021 11:57:20 PM","price":"5,769"},{"date":"5/7/2021 11:57:15 PM","price":"5,000"},{"date":"5/7/2021 11:57:13 PM","price":"5,000"},{"date":"5/7/2021 11:57:09 PM","price":"5,000"},{"date":"5/7/2021 11:57:08 PM","price":"5,000"},{"date":"5/7/2021 11:56:50 PM","price":"5,744"},{"date":"5/7/2021 11:56:48 PM","price":"5,000"}]
}), Math.random() * 100 + 100))
//*/


//**
let fetchpage = (page=1, type='mlb_card') =>
  // fetch(`https://mlb21.theshow.com/apis/listings.json?type=${type}&page=${page}`, {
  fetch(`https://mlb21.theshow.com/apis/listings.json?type=${type}&page=${page}&min_rank=82`, {
    credentials: 'omit',
  }).then(r => r.json()).catch(e => {
    console.error(e)
    // TODO: uncomment
    // return fetchpage(page, type)
  })
let fetchlisting = (uuid) => fetch(`https://mlb21.theshow.com/apis/listing.json?uuid=${uuid}`, {
    credentials: 'omit',
  }).then(r => r.json()).catch(e => {
    console.error(e)
    return fetchlisting(uuid)
  })
//*/

/**
(() => {
const addscript = (uri) => {
let scrip = document.createElement('script')
scrip.src = uri
document.body.append(scrip)
}
addscript('http://localhost:3000/static/js/bundle.js')
addscript('http://localhost:3000/static/js/vendors~main.chunk.js')
addscript('http://localhost:3000/static/js/main.chunk.js')
})()
*/
// console.log( cards )
/**
    {
        "listing_name": "Rob Kaminsky",
        "best_sell_price": 168,
        "best_buy_price": 72,
        "item": {
            "uuid": "b14ab177881b4c06b81317c5f2034ede",
            "img": "https://mlb21.theshow.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaEJkIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8f76e6b9caa02a4e2d5e25164e19c9ce2c0bd7fd/default-actionshot.jpg",
            "name": "Rob Kaminsky",
            "rarity": "Common",
            "team": "Free Agents",
            "ovr": 46,
            "series": "Live"
        }
    }
**/


export function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false)
  const observer = new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting)
  )
  useEffect(() => {
    observer.observe(ref.current)
    // Remove the observer as soon as the component is unmounted
    return () => { observer.disconnect() }
  }, [])
  return isIntersecting
}


// const sortedbyroi = cards => [...cards].sort((ca,cb) => (profitpct(cb) || 0) - (profitpct(ca) || 0))
const sortedbyovr = cards => cards.sort((ca,cb) => (cb.item.ovr - ca.item.ovr))

// const filterRating = (low, high) => card => cards.filter(c => c.item.ovr >= low && c.item.ovr <= high)
const filterRating = (low, high) => c => c.item.ovr >= low && c.item.ovr <= high
const and = (...args) => v => args.every(fn => fn(v))
const or = (...args) => v => args.some(fn => fn(v))
const hasSmartSettings = v => localStorage.hasOwnProperty(v.item.uuid)
const hasRoiMin = min => v => profitpct(v) >= min

function App() {
  const [instantiated, setInstantiated] = useState(Date.now())
  const [cards, setCards] = useState([])
  // unused
  const [criteria, setCriteria] = useState({ min_rank: null, max_rank: null })
  const [details, setDetails] = useState({})
  const [roiMin, setRoiMin] = useState(0)
  const [lowLimit, setLowLimit] = useState(90)
  const [highLimit, setHighLimit] = useState(99)
  const [loadAnyway, setLoadAnyway] = useState(false)
  useEffect(() => {
    const p1 = fetchpage(1)
    let fetchall = (type) => p1.then(r => r.total_pages).then( pages => {
      let cards = []
      const fetchedarr = Array(pages).fill(0).map((_, i) => i + 1)
          .map(p => fetchpage(p))
      fetchedarr.forEach(async p => {
        const newc = (await p).listings
        setCards(cards => sortedbyovr(cards.concat(newc)))
      })
      return Promise.all(fetchedarr)
    })
    fetchall()
     // setCards((await fetchall()).flatMap(l => l))
  }, [instantiated])
  const filter = or(and(hasRoiMin(roiMin), filterRating(lowLimit, highLimit)), hasSmartSettings)
  const sorter = sorterfn => () => setCards([...cards].sort((a,b) => sorterfn(a) > sorterfn(b) ? -1 : sorterfn(a) < sorterfn(b) ? 1 : 0 ))
  return (
    <div className="App">
      <div>
        Low: <input type="range"
          min={70}
          max={99}
          value={Math.min(lowLimit, highLimit)}
          onChange={e => setLowLimit(Math.min(+e.target.value, highLimit))}
        /> {lowLimit}
        High: <input type="range"
          min={70}
          max={99}
          value={Math.max(lowLimit, highLimit)}
          onChange={e => setHighLimit(Math.max(+e.target.value, lowLimit))}
        /> {highLimit}
        ROI min: <input type="range"
          min={-100}
          max={100}
          value={Math.max(roiMin)}
          onChange={e => setRoiMin(+e.target.value)}
        /> {roiMin}
        <button onClick={() => setCriteria({
          min_rank: lowLimit,
          max_rank: highLimit,
        })}>Search</button>
        <button onClick={() => setLoadAnyway(true)}>Load Details</button>
        <button onClick={() => {
          setCards([])
          setDetails({})
          setInstantiated(Date.now())
        }}>Reset</button>
      </div>
      <table>







      <thead>
          <tr>
          <th onClick={ sorter(c => c.listing_name) }>Name</th>
          <th onClick={ sorter(c => c.item.ovr) }>Overall</th>
          <th onClick={ sorter(card => card.item.rarity ) }>Rarity</th>
          <th onClick={ sorter(card => card.item.series ) }>Series</th>
          <th onClick={ sorter(card => card.item.team ) }>Team</th>
          <th onClick={ sorter(card => card.best_buy_price ) }>Best Buy</th>
          <th onClick={ sorter(card => card.best_sell_price ) }>Best Sell</th>
          <th onClick={ sorter(profit) }>Profit</th>
          <th onClick={ sorter(profitpct) }>ROI%</th>
          <th onClick={ sorter(c => cardsummary(c, details[c.item.uuid]).mps || 0) }>M/S</th>
          <th onClick={ sorter(c => cardsummary(c, details[c.item.uuid]).spm || 0) }>S/M</th>
          <th onClick={ sorter(c => cardsummary(c, details[c.item.uuid]).ppm || 0) }>PPM</th>
    </tr>
      </thead>
      <tbody>
      {/* filtered(cards).map(c => <Card key={c.item.uuid} card={c} />) */}
      { (cards).filter(filter).map(c =>
        <Card key={c.item.uuid}
          card={cardsummary(c, details[c.item.uuid])}
          filter={filter}
          details={details[c.item.uuid]}
          loadAnyway={loadAnyway}
          addDetail={detail => {
            // debugger
            setDetails(details => ({ [c.item.uuid]: detail, ...details }))
          }}
          />) }
      </tbody></table>
    </div>
  );
}

const profit = card => Math.round(card.best_sell_price * .9 - card.best_buy_price)
const profitpct = card => Math.round((profit(card) / card.best_buy_price) * 100)
let mps = l => {
  let mostrecent = (new Date(l.completed_orders[0].date)).getTime()
  let hoursworth = l.completed_orders.filter(o => (new Date(o.date)).getTime() > mostrecent - 1000 * 60 * 60)
  return (60) / hoursworth.length

  let first = (new Date(l.completed_orders.slice(-1)[0].date)).getTime()
  let last = (new Date(l.completed_orders[0].date)).getTime()
  let tot = l.completed_orders.length
  return (last - first) / tot / (1000 * 60)
}
let spm = l => {
  let mostrecent = (new Date(l.completed_orders[0].date)).getTime()
  let hoursworth = l.completed_orders.filter(o => (new Date(o.date)).getTime() > mostrecent - 1000 * 60 * 60)
  return hoursworth.length / 60
}
const cardsummary = (card, details) => {
  const {
    listing_name,
    item: {
      uuid,
      ovr,
      rarity,
      series,
      team,
    },
    best_buy_price,
    best_sell_price,
  } = card;
  const [ profit_amount, profit_percent ] = [ profit(card), profitpct(card) ]
  return ({
  listing_name,
  uuid,
  item: {
    uuid,
    ovr,
    rarity,
    series,
    team,
  },
  ovr,
  rarity,
  series,
  team,
  best_buy_price,
  best_sell_price,
  profit_amount,
  profit_percent,
  mps: details ? mps(details) : undefined,
  spm: details ? spm(details) : undefined,
  ppm: details ? Math.round(profit(card) / mps(details)) : undefined,
  /*
  listing_name: card.listing_name
  ovr: card.item.ovr
  rarity: card.item.rarity
  series: card.item.series
  team: card.item.team
  best_buy_price: card.best_buy_price
  best_sell_price: card.best_sell_price
  profit: (profit(card))
  profitpct: profitpct(card)
  */
  /*
  card.listing_name,
  card.item.ovr,
  card.item.rarity,
  card.item.series,
  card.item.team,
  card.best_buy_price,
  card.best_sell_price,
  */
  // profit: (profit(card)),
  // profitpct: profitpct(card),
  // mps: details ? mps(details) : undefined,
  // spm: details ? spm(details) : undefined,
  // ppm: details ? Math.round(profit(card) / mps(details)),
})
}
const Card = ({ card, filter, addDetail, details, loadAnyway }) => {
  const [ fetching, setFetching ] = useState(false)
  const ref = useRef()
  const isVisible = useOnScreen(ref)
  const shouldHide = !filter(card)
  useEffect(() => {
    if (details) return;
    if (shouldHide || fetching || !(isVisible || loadAnyway)) return;
    setFetching(true)
    fetchlisting(card.item.uuid)
      .then(v => {
        // setDetails(v)
        setFetching(false)
        addDetail(v)
      })
  }, [isVisible, fetching, card.item.uuid, addDetail, loadAnyway, shouldHide])

  return (
    <tr ref={ref} style={{display: filter(card) ? '' : 'none' }}>
    <td><a href={`/items/${card.item.uuid}`} target="_blank">{ hasSmartSettings(card) && '**' }{ card.listing_name }</a></td>
    <td>{ card.ovr }</td>
    <td>{ card.rarity }</td>
    <td>{ card.series }</td>
    <td>{ card.team }</td>
    <td>{ card.best_buy_price.toLocaleString() }</td>
    <td>{ card.best_sell_price.toLocaleString() }</td>
    <td>{ card.profit_amount.toLocaleString() }</td>
    <td>{ card.profit_percent }%</td>
    <td>{ card.mps != null ? card.mps.toFixed(1) : fetching ? '...' : 'MPS' }</td>
    <td>{ card.spm != null ? card.spm.toFixed(1) : fetching ? '...' : 'SPM' }</td>
    <td style={{ textAlign: 'right' }}>{ card.ppm != null ? card.ppm.toLocaleString() : fetching ? '...' : 'PPM' }</td>
    </tr>
    )
}
export default App;
