const http = require('http');

const fs = require('fs');

var requests = require('requests');

const replaceVal = (tempVal, orgVal) => {
    let temperature = tempVal.replace("{%location%}", orgVal.name);
    temperature = temperature.replace("{%country%}", orgVal.sys.country);
    temperature = temperature.replace("{%tempval%}", orgVal.main.temp)
    temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min)
    temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max)
    return temperature;
}

    const homeFile = fs.readFileSync("web.html", "utf-8");

    const server = http.createServer((req, res) => {
        if (req.url == "/") {
            requests('https://api.openweathermap.org/data/2.5/weather?q=indore&appid=90bf9f180fbe23d3c4369949ff4fa283'
            )
                .on("data", (chunk) => {
                    const objdata = JSON.parse(chunk)
                    const arrData = [objdata]
                    console.log(arrData)
                    const realTimeData = arrData.map((val) => replaceVal(homeFile, val))
                    .join(" ");
                    res.write(realTimeData);
                    })
                     .on("end", (err) => {
                    if (err) return console.log('connection closed due to errors', err);
                    res.end();
                });
        }
    });

    server.listen(9500)