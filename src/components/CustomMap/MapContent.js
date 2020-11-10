import React, { useContext } from 'react'
import Context from '../../Context'
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'

const MapContent = () => {
	const { coord } = useContext(Context)

	return (
		<GoogleMap
			defaultZoom={0.2}
			defaultCenter={{ lat: 48.12, lng: 31.74 }}
		>
			<Marker position={{ lat: coord.lat, lng: coord.lon }} />
		</GoogleMap>
	)
}

export default withScriptjs(withGoogleMap(MapContent))
