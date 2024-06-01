function message() {
  let IP = document.getElementById("IP").value;

  const webhook = "https://discord.com/api/webhooks/1246559249325097052/UzuMt97coTW1187qKif_WXZnHvLg4n-1C_M0NsBYtP2OBDDVv5RbZy3IZZMh33lzagkB";
  const contents = 'IP:';
  const request = new XMLHttpRequest();
  request.open("POST", webhook);
  request.setRequestHeader('Content-type', 'application/json');
  const params = {
    content: contents
  }
  request.send(JSON.stringify(params));
}
