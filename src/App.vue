<template>
  <div id="app">
    <header>
      <meta charset="UTF-8" />

      <img
        src="./assets/Logos_Articulos_para_el_Hogar_Simple_Blanco_y_Negro__1_-removebg-preview.png"
        alt="Travel Mates logo"
      />
      <h1>Travel Mates</h1>
      <nav>
        <ul>
          <li><router-link to="/">Inicio</router-link></li>
          <li><router-link to="/montaña">Montaña</router-link></li>
          <li><router-link to="/playa">Playa</router-link></li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <div>
        <form>
          <div>
            <label for="email">Subscribete:</label>
          </div>
          <input type="email" id="email" name="email" placeholder="Tu correo" />
          <button type="submit">Enviar</button>
        </form>
        <div>
          <p>Siguenos en:</p>
          <ul>
            <li>
              <img class="socialimg" src="./assets/instagram.png" />
              <a
                class="social"
                target="_blank"
                href="https://www.instagram.com/"
                >Travel_Mates0407</a
              >
            </li>
            <li>
              <img class="socialimg" src="./assets/facebook.png" />

              <a class="social" target="_blank" href="https://www.facebook.com/"
                >Travel Mates</a
              >
            </li>
            <li>
              <img class="socialimg" src="./assets/tiktok.png" />

              <a class="social" target="_blank" href="https://www.tiktok.com/"
                >TravelMates04</a
              >
            </li>
          </ul>
        </div>
      </div>
      <p>© 2024 Travel Mates. Your trip, our commitment.</p>
    </footer>
  </div>
</template>
<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 2em 1em;
  background-color: rgba(0, 0, 0, 0.5);
}
nav ul {
  list-style: none;
  display: flex;
  gap: 1em;
}
nav a {
  text-decoration: none;
  color: white;
}

nav a:hover {
  color: #bebebe;
}
main {
  text-align: center;
  margin: 2em;
  flex: 1;
}
footer {
  padding: 1em;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.7);
  font-size: 0.9em;
}
footer ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  padding-inline-end: 40px;
}

footer ul li {
  display: flex;
  gap: 0.2em;
  align-items: center;
  justify-items: center;
}

footer div p {
  margin-top: 1em;
  margin-bottom: -1em;
}

footer div {
  display: flex;
  gap: 1em;
  justify-content: center;
  align-items: center;
}

footer div div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

body {
  font-family: "Arial", sans-serif;
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #6bcdfd, #2d6a4f);
  color: #fff;
}
header img {
  width: 200px;
  margin-top: -3em;
  margin-bottom: -3em;
}
header h1 {
  font-size: 2.5em;
  margin: 0.5em 0;
}
header p {
  font-size: 1.2em;
  margin: 0.5em 0 1em;
}

.social {
  color: #3498db;
  text-decoration: none;
  position: relative;
  font-weight: bold;
}

.social::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background: #3498db;
  transition: width 0.3s ease-in-out;
}

.social:hover::after {
  width: 100%;
}

.socialimg {
  width: 20px;
  margin-right: 0.5em;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input[type="email"] {
  padding: 10px 15px;
  font-size: 16px;
  border: 2px solid #ddd;
  border-radius: 5px;
  transition: border-color 0.3s, box-shadow 0.3s;
  outline: none;
}

input[type="email"]:focus {
  border-color: #3498db;
  box-shadow: 0 0 8px rgba(52, 152, 219, 0.4);
}

button {
  padding: 10px 15px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: #3498db;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

button:hover {
  background-color: #2980b9;
  transform: translateY(-3px);
}

button:active {
  transform: translateY(0);
}
</style>
