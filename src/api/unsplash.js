import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com/',
	headers: {
		Authorization: 'Client-ID wfbi6-gDsGzkrrVJFQy31JivCtOr5jXYZ5FDKfPM8Sw' 
	}
})