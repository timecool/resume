import React from 'react'
import Container from './Container'
const AboutMe: React.FC = () => (
  <Container bgClassName="bg-gray-100 dark:bg-gray-800" id="about">
    <h2>Über mich</h2>

    <div>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
        Ich bin Webentwickler mit einem abgeschlossenen IT-Studium und einer
        Leidenschaft für digitale Lösungen. In den letzten Jahren habe ich vor
        allem in der Entwicklung gearbeitet und dabei gemerkt, dass mich nicht
        nur das reine Programmieren begeistert, sondern auch das Planen,
        Konzipieren und Steuern von IT-Prozessen.
        <br />
        <br />
        Mich motiviert es, komplexe Herausforderungen verständlich zu machen und
        nachhaltige Lösungen zu entwickeln. Egal ob im direkten Austausch mit
        Fachabteilungen oder in der technischen Umsetzung. Für meine berufliche
        Zukunft wünsche ich mir, mein technisches Wissen weiter auszubauen und
        stärker Verantwortung in IT-Infrastruktur und Projektmanagement zu
        übernehmen.
      </p>
    </div>
  </Container>
)

export default AboutMe
