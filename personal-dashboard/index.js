
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
		document.getElementById("author").textContent = `By: ${data.user.name}`
    })
    .catch(err => {
        // Use a default background image/author
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
)`
		document.getElementById("author").textContent = `By: Dodi Achmad`
    })

    


fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()
    })
    .then(data => {
        document.getElementById("crypto-top").innerHTML = `
            <img src=${data.image.small} />
            <span>${data.name}</span>
        `
        document.getElementById("crypto").innerHTML += `
            <p> current price 🎯: $${data.market_data.current_price.usd}</p>
            <p> daily high👆: $${data.market_data.high_24h.usd}</p>
            <p> daily low 👇: $${data.market_data.low_24h.usd}</p>
        `
    })
    .catch(err => console.error(err))


fetch("https://api.coingecko.com/api/v3/coins/ethereum")
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()
    })
    .then(data => {
        document.getElementById("crypto-top2").innerHTML = `
            <img src=${data.image.small} />
            <span>${data.name}</span>
        `
        document.getElementById("crypto2").innerHTML += `
            <p> current price 🎯: $${data.market_data.current_price.usd}</p>
            <p> daily high👆: $${data.market_data.high_24h.usd}</p>
            <p> daily low 👇: $${data.market_data.low_24h.usd}</p>
        `
    })
    .catch(err => console.error(err))



function getCurrentTime(){
const date = new Date()
document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "short"})}

setInterval(getCurrentTime, 1000)


navigator.geolocation.getCurrentPosition(position => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial&appid=2ced849c98aaa9dff9cf4e1b747d2384
`)
        .then(res => {
            if (!res.ok) {
                throw Error("Weather data not available")
            }
            return res.json()
        })
        .then(data => {
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            document.getElementById("weather").innerHTML = `
                <div class = "weather-top">
                <img src=${iconUrl} /> <span> ${Math.round(data.main.temp)}º </span>
                <p id = 'weather-bottom'> ${data.name}</p>

                
            `
        



        })
.catch(err => console.error(err))
});



