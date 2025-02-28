function juegoPreguntas() {
  let area = prompt("¿Quieres seguir hacia el área de Front-End o Back-End?");
  let tecnologia;
  
  if (area === "Front-End") {
      tecnologia = prompt("¿Quieres aprender React o Vue?");
  } else if (area === "Back-End") {
      tecnologia = prompt("¿Quieres aprender C# o Java?");
  } else {
      alert("Por favor, ingresa una opción válida.");
      return;
  }
  
  let camino = prompt(`¿Quieres seguir especializándote en ${area} o desarrollarte como Fullstack?`);
  if (camino === "especializarme") {
      alert(`¡Genial! Seguirás mejorando en ${area} con tecnologías como ${tecnologia}`);
  } else if (camino === "fullstack") {
      alert(`¡Increíble! Aprenderás tanto ${area} como otras áreas para convertirte en Fullstack.`);
  } else {
      alert("Opción no válida, pero sigue aprendiendo y creciendo.");
  }
  
  let tecnologiasAprender = [];
  while (true) {
      let nuevaTecnologia = prompt("¿Qué otra tecnología te gustaría aprender?");
      if (nuevaTecnologia) {
          tecnologiasAprender.push(nuevaTecnologia);
      }
      let continuar = prompt("¿Hay alguna otra tecnología que te gustaría aprender? (Responde 'ok' para seguir o cualquier otra cosa para salir)").toLowerCase();
      if (continuar !== "ok") {
          break;
      }
  }
  
  if (tecnologiasAprender.length > 0) {
      alert(`¡Qué emocionante! Aprenderás sobre: ${tecnologiasAprender}`);
  } else {
      alert("¡Sigue explorando y aprendiendo nuevas tecnologías!");
  }
}
