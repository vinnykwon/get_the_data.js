class GetTheData {
	constructor() {
		this.api = "https://api.getthedata.com"
		this.headers = {
			"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
		}
	}

	async getData(easting, northing) {
		const response = await fetch(
			`${this.api}/bng2latlong/${easting}/${northing}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {GetTheData}
