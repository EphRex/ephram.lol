fetch("https://ipapi.co/json/")
    .then(response => response.json())
    .then(json => {
        const ip = json.ip;
        const version = json.version;
        const country = json.country_name;
        const region = json.region;
        const org = json.org;
        const city = json.city;

        document.getElementById("IP").innerHTML = ip;
        document.getElementById("version").innerHTML = version;
        document.getElementById("country_name").innerHTML = country;
        document.getElementById("region").innerHTML = region;
        document.getElementById("org").innerHTML = org;
        document.getElementById("city").innerHTML = city;
    })
