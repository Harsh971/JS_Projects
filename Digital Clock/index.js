function updateclock() {
    const now = new Date()
    let hours = now.getHours()
    const ampm = hours >= 12 ? "PM" : "AM"
    hours = (hours % 12) || 12
    hours = hours.toString().padEnd(2, 0)
    const min = now.getMinutes().toString().padEnd(2, 0)
    const sec = now.getSeconds().toString().padEnd(2, 0)
    const timeString = `${hours}:${min}:${sec} ${ampm}`
    document.getElementById("clock").textContent = timeString
}
updateclock()
setInterval(updateclock, 1000)