import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Redirect, Route, NavLink} from 'react-router-dom'
import sports from './sports-data';
import './style.css'

const Home = (props) => <section className="home"><h1>Home</h1></section>
const News = (props) => <section className="news"><h1>News</h1></section>
const Weather = (props) => <section className="weather"><h1>Weather {props.temperature}</h1></section>

const Sport = ({match}) => {
  console.log('match:', match);
  const sport = sports.find( sport => sport.id === Number(match.params.id) )
  return (
    <article><img width="100" src={sport.imageSrc} alt={sport.title} /></article>
  )
}

const Sports = (props) => {
  const links = sports.map(sport => <li><NavLink to={`/sports/${sport.id}`}>{sport.title}</NavLink></li>)
  return (
    <section className="sports">
      <h1>Sports</h1>
      <div className="flex-container">
        <div className="sports-nav">
          <ul style={{ listStyleType: "none", padding: 10, textAlign: 'left' }}>
            {links}
          </ul>
        </div>
        <div className="sports-main">
          <Route path="/sports/:id" render={(props) => <Sport {...props} />} />
        </div>
      </div>
    </section>
  )
}

const App = () => (
  <Router>
    <main>
      <nav>
        <NavLink exact to="/">Home</NavLink>
        <NavLink       to="/news">News</NavLink>
        <NavLink       to="/weather">Weather</NavLink>
        <NavLink       to="/sports">Sports</NavLink>
      </nav>
      <Route exact path="/" component={Home} />
      <Route       path="/news" component={News} />
      <Route       path="/weather" render={(props) => <Weather {...props} temperature={93} />} />
      <Route       path="/sports" component={Sports} />
    </main>    
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'))
