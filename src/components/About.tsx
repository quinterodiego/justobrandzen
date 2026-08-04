const PARAGRAPHS = [
  `El personaje desconocido o la ortografía creadora de ficciones. Según el historiador J. A. Craviotto, en "Quilmes a través de los años," el 17 de febrero de 1881, por medio de la sanción de la ordenanza número 1, quedaron bautizadas las calles comprendidas entre las actuales Conesa y Brandsen y W. A. Bell e H. Yrigoyen. Claro que, en la mención del historiador, la calle qué da título a la nota está escrita con z.`,
  `Difícil es hoy poder asegurar quién era aquel Brandzen. Si recurrimos al Quilmero, fuente fundamental para los buscadores del pasado local, no encontraremos mención alguna sobre el tema en la fecha señalada. Abona —no caben dudas— la confusión planteada, la ausencia del documento en la que quedó plasmada nuestra ordenanza primera.`,
  `Cobra así fuerza la idea de que un error ortográfico pudo haber asistido a inventar un personaje que nunca existió. La ficción o la equivocación, han amasado la piedra fundacional de un homenaje que podría haber terminado inventando a un inexistente homenajeado.`,
  `Y en esta lógica, si Brandzen existe como calle, sin comprobaciones empíricas que refieran a alguien, ¿por qué su nombre no podía ser Justo?`,
  `En realidad, esto no es así: en primer lugar, quien motorizó el emprendimiento pensó en los términos de aquel que llega a nuevas tierras y elige el lugar indicado, "justo ahí, justo en Brandsen". Por otra parte, me permitiría plantear que en realidad, el receptor del homenaje debe haber sido el Coronel Carlos Luis Federico Brandsen, noble francés que combatió bajo el mando de Napoleón y que a partir de 1817 se sumó a la guerra de liberación llevada adelante por los ejércitos nacionales.`,
  `Camarada de armas del general José de San Martín, el valiente militar murió en la batalla de Ituzaingó, el 20 de febrero de 1827, cuando a la cabeza del Regimiento Nº 1 de Caballería, atacó la infantería imperial brasileña. A pesar de la observación de Brandsen de la equivocación que aquello implicaba, el general Carlos Antonio de Alvear comandante general de las fuerzas argentino-uruguayas ordenó un segundo ataque frontal, que si bien llevó al anunciado triunfo, generó más muertes de las necesarias.`,
  `De todas maneras, la torpeza condenatoria del comandante no evitaría que el francés afrontara su destino como debía, con aquella osadía e hidalguía que no consigue burlar a la muerte pero que hace inevitable el logro de la trascendencia: perdurar en el tiempo, Justamente, sería su destino.`,
];

export function About() {
  return (
    <section id="nosotros" className="border-t border-white/10 bg-[#0e0b09] py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-12">
        <p className="text-center text-sm font-medium uppercase tracking-[0.3em] text-gold-light">
          Sobre Nosotros
        </p>
        <h2 className="mt-3 text-center font-serif text-3xl text-white sm:text-4xl">
          Justo Brandzen
        </h2>
        <div className="mx-auto mt-6 h-px w-24 bg-gold" />

        <div className="mt-10 space-y-6 text-base leading-relaxed text-white/75">
          {PARAGRAPHS.map((paragraph, i) => (
            <p key={i} className={i === 0 ? "text-lg text-white/85" : undefined}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
