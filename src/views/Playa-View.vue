<template>
  <div>
    <main>
      <section class="playaSection">
        <h2>Explora las Mejores Playas</h2>

        <div class="lugar">
          <h3>Manuel Antonio</h3>
          <p>
            Una playa espectacular rodeada de un parque nacional con abundante
            flora y fauna. Ideal para relajarse y disfrutar de la naturaleza.
          </p>
          <img src="../assets/ManuelAntonio.jpg" alt="Playa Manuel Antonio" />
        </div>

        <div class="lugar">
          <h3>Santa Teresa</h3>
          <p>
            Destino popular entre surfistas y viajeros bohemios, con olas
            perfectas y una atmósfera relajada.
          </p>
          <img src="../assets/SantaTeresa.jpg" alt="Playa Santa Teresa" />
        </div>

        <div class="lugar">
          <h3>Tamarindo</h3>
          <p>
            Un lugar vibrante con playas doradas, perfecto para practicar surf y
            disfrutar de una animada vida nocturna.
          </p>
          <img src="../assets/Tamarindo.jpg" alt="Playa Tamarindo" />
        </div>
      </section>
    </main>
  </div>
</template>

<style>
.playaSection {
  max-width: 800px;
  margin: 2em auto;
  padding: 1em;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.playaSection h2 {
  color: #005f73;
  text-align: center;
  border-bottom: 2px solid #005f73;
  padding-bottom: 0.5em;
}
.lugar {
  margin: 1.5em 0;
}
.lugar h3 {
  color: #005f73;
}
.lugar img {
  max-width: 100%;
  border-radius: 5px;
}
</style>
