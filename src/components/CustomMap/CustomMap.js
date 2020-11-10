import React from 'react'
import MapContent from './MapContent'
import './CustomMap.sass'

const CustomMap = () => {
	const key = "AIzaSyDHsBvb0Wq3AaQV-vYjxdeSM_16enhTrTk"
	const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${key}`

	return (
		<div className="map">
			<MapContent
				googleMapURL={mapURL}
				loadingElement={<div style={{ height: "100%" }} />}
				containerElement={<div style={{ height: "100%" }} />}
				mapElement={<div style={{ height: "100%" }} />}
			/>
		</div>
	)
}

export default CustomMap
