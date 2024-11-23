<template>
  <div>
    <main>
      <section class="montañaSection">
        <h2>Explora los Mejores Destinos de Montaña</h2>

        <div class="lugar">
          <h3>Monteverde</h3>
          <p>
            Monteverde es famoso por su Bosque Nuboso, senderos mágicos y tours
            de canopy. Un destino ideal para amantes de la naturaleza.
          </p>
          <img
            src="../assets/Monteverde.jpg"
            alt="Bosque Nuboso de Monteverde"
          />
        </div>

        <div class="lugar">
          <h3>Volcán Arenal</h3>
          <p>
            Este volcán es uno de los más impresionantes de Costa Rica. Disfruta
            de caminatas, aguas termales y vistas espectaculares.
          </p>
          <img src="../assets/VolcanArenal.jpg" alt="Volcán Arenal" />
        </div>

        <div class="lugar">
          <h3>Cerro Chirripó</h3>
          <p>
            El punto más alto de Costa Rica, perfecto para los aventureros que
            buscan una experiencia de senderismo inolvidable.
          </p>
          <img src="../assets/CerroChirripo.jpg" alt="Cerro Chirripó" />
        </div>
      </section>
    </main>
  </div>
</template>

<style>
.montañaSection {
  max-width: 800px;
  margin: 2em auto;
  padding: 1em;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.montañaSection h2 {
  color: #2d6a4f;
  text-align: center;
  border-bottom: 2px solid #2d6a4f;
  padding-bottom: 0.5em;
}
.lugar {
  margin: 1.5em 0;
}
.lugar h3 {
  color: #2d6a4f;
}
.lugar img {
  width: 20em;
  border-radius: 5px;
}
.lugar p {
  color: #000;
  font-size: 1.1em;
  line-height: 1.5;
}
</style>
