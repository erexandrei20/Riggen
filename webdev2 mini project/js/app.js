const weatherKey = "d6c12fe653144d048f4150434252502";
const movieKey = "fb7bb23f03b6994dafc674c074d01761";
document.getElementById("getWeather").addEventListener("click", async () => {
 const city = document.getElementById("cityInput").value;
 const url = `https://api.weatherapi.com/v1/current.json?
key=${weatherKey}&q=${city}`;
 try {
 const res = await fetch(url);
 const data = await res.json();
 const { name } = data.location;
 const { temp_c, condition } = data.current;
 document.getElementById("weatherResult").innerHTML = `
 <div class="card">
 <h3>${name}</h3>
 <p>${temp_c}°C, ${condition.text}</p>
 </div>`;
 } catch (err) {
 document.getElementById("weatherResult").innerText = "City not found.";
 }
});
document.getElementById("getMovies").addEventListener("click", async () => {
 const keyword = document.getElementById("movieInput").value;
 const url = `https://api.themoviedb.org/3/search/movie?
api_key=${movieKey}&query=${keyword}`;

 try {
 const res = await fetch(url);
 const { results } = await res.json();
 document.getElementById("movieResult").innerHTML = results
 .slice(0, 5)
 .map(
 (movie) => `
 <div class="card">
 <h3>${movie.title}</h3>
 <p>${movie.overview || "No overview available."}</p>
 </div>`
 )
 .join("");
 } catch (err) {
 document.getElementById("movieResult").innerText = "Error fetching movies.";
 }
});
