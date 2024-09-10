# get_the_data.js
Web-API for [getthedata.com](https://www.getthedata.com) an API that provides seamless conversion of easting and northing coordinates to latitude and longitude, offering invaluable insights for location-based applications

## Example
```JavaScript
async function main() {
	const { GetTheData } = require("./get_the_data.js");
	const getTheData = new GetTheData()
	const data = await getTheData.getData("", "")
	console.log(data)
}

main()
```
