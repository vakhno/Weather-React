import React, { useState } from 'react'
import Context from '../../Context'
import Header from '../Header/Header'
import Content from '../Content/Content'
import WeatherSearch from '../WeatherSearch/WeatherSearch'
import WeatherData from '../WeatherData/WeatherData'
import Error from '../Error/Error'
import Footer from '../Footer/Footer'
import axios from 'axios'
import './Main.sass'

const Main = () => {
	const [weather, setWeather] = useState()
	const [city, setCity] = useState();
	const [error, setError] = useState()
	const api_call = async e => {
		e.preventDefault()
		const location = e.target.elements.location.value
		if (!location) return setError('Please enter the name of the city'), setWeather(null)
		const API_KEY = '6b4af1b7cb803d264e11150662ace04f'
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
		const request = axios.get(url)
		const response = await request

		setWeather(response.data.main)
		setCity(response.data.name)
		setError(null)
	}

	return (
		<div className='main'>
			<Header />
			<Content>
				<Context.Provider value={{ api_call: api_call, weather: weather, city: city, error: error }}>
					<WeatherSearch />
					{weather && <WeatherData />}
					{error && <Error />}
				</Context.Provider>
				<Footer />
			</Content>
		</div>
	)
}

export default Main
