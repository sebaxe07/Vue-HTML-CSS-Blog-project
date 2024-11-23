<template>
  <div>
    <main>
      <h1>Bienvenido a Travel Mates</h1>
      <p>
        Explora los mejores destinos en Costa Rica, desde montañas majestuosas
        hasta playas paradisíacas.
      </p>
    </main>
    <div class="sections-container">
      <section id="montana">
        <h2>Descubre la magia de la montaña</h2>
        <img src="../assets/MontañaHome.jpg" alt="Playa" />
        <p>
          Aventúrate en los imponentes paisajes de Costa Rica: bosques nubosos,
          volcanes y senderos mágicos.
        </p>
        <router-link to="/montaña" class="btn">Montaña</router-link>
      </section>
      <section id="playa">
        <h2>Relájate en playas paradisíacas</h2>
        <img src="../assets/PlayaHome.jpg" alt="Playa" />
        <p>
          Desde arenas doradas hasta aguas cristalinas, nuestras playas son
          perfectas para tus momentos de descanso.
        </p>

        <router-link to="/playa" class="btn">Playa</router-link>
      </section>
    </div>
  </div>
</template>

<style>
main {
  text-align: center;
  margin: 2em;
}

.sections-container {
  display: flex;
  justify-content: space-around;
  margin: 2em;
}

section {
  flex: 1;
  margin: 1em;
  text-align: center;
}

.btn {
  background-color: #ffffff;
  transition: all 0.3s ease;
  display: block;
  margin-top: 1em;
  text-align: center;
  padding: 0.8em 3.5em;
  font-size: 1em;
  color: #2d6a4f;
  text-decoration: none;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  max-width: 10em;
  margin: 0 auto;
}

.btn:hover {
  background-color: #2d6a4f;
  color: #fff;
}

img {
  /*   min-width: 20em;
  min-height: 12em; */
  max-width: 100%;
  max-height: 25em;
  border-radius: 5px;
}

section h2 {
  font-size: 2em;
  margin-bottom: 1em;
}
</style>
