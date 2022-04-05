export const getWeatherByCity = city => {
    return fetch(
            `https://www.metaweather.com/api/location/search/?query=${city}`
        )
        .then(response => response.json())
        .then(data => { // Information for me [learning]. The data (any name I want, here data) is a json reply which is further processed.
            const woeid = data[0].woeid;
            return fetch (
                `https://www.metaweather.com/api/location/${woeid}/`
            )
            .then(response => response.json())
            .then(data => data) // Information for me [learning]. It is the same as function(data) {return data;}
        });
};
