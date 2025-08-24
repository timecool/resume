import type { Project } from "../interfaces/Project";

export const timelineData: Project[] = [
  {
    title: "Coface Shelf",
    company: "Coface",
    description:
      "Coface Shelf ist ein Ticketing-System zur effizienten Arbeitsprozess-Steuerung und Aufgabenverteilung. Es ermöglicht das zentrale Erfassen, Zuweisen und Nachverfolgen von Tickets, sorgt für klare Verantwortlichkeiten und schafft Transparenz in allen Arbeitsabläufen.",
    date: "Dezember 2024 - Jetzt",
    technology: [
      "React",
      "TypeScript",
      "SPFx",
      "SharePoint Cloud",
      "Power Automate",
      "Tailwind",
    ],
  },
  {
    title: "Supplier Management Tool",
    company: "Coface",
    description:
      "Supplier Management Tool ist eine zentrale Plattform zur Verwaltung und Steuerung von Lieferantenbeziehungen. Hier werden Counter Calls erfasst und automatisch Aufgaben für das Service-Team erstellt. Zusätzlich dient das Tool als Suchmaschine für alle im System erfassten Lieferanten, sodass Informationen schnell gefunden und Prozesse effizient gesteuert werden können.",
    date: "Juli 2024 - September 2024",
    technology: ["React", "TypeScript", "SPFx", "SharePoint SE", "Workflows"],
  },
  {
    title: "Room Butler",
    company: "Coface",
    description:
      "Room Butler ist ein smartes Buchungs- und Verwaltungssystem für Besprechungsräume und Veranstaltungen. Neben der einfachen Reservierung von Räumen können direkt Bewirtungen und Einladungen organisiert werden. Bestellungen werden automatisch an den Catering-Dienstleister weitergeleitet. Gleichzeitig sorgt das System für eine vollständige Dokumentation aller Vorgänge. Inklusive Teilnehmern, Bestellungen und Anlass und stellt so die notwendige Transparenz für die Steuerabteilung und Prüfer sicher.",
    date: "April 2024 - September 2024",
    technology: ["React", "TypeScript", "SPFx", "SharePoint SE", "Workflows"],
  },
  {
    title: "P2P Invoice Approval (Support, Neue Entwicklung und Optimirung) ",
    company: "Coface",
    description:
      "P2P Invoice Approval ist ein zentrales System zur Genehmigung von Rechnungen. Es ermöglicht eine effiziente Überprüfung und Freigabe von Rechnungen und sorgt so für eine verbesserte Transparenz und Nachvollziehbarkeit im Rechnungsprozess.",
    date: "Juli 2023 - Jetzt",
    technology: ["React", "TypeScript", "SPFx", "SharePoint SE", "Workflows"],
  },
  {
    title: "P2P Archive",
    company: "Coface",
    description:
      "P2P Archive ist ein zentrales System zur Archivierung von Rechnungen. Nach erfolgter Bezahlung werden alle relevanten Unterlagen, einschließlich E-Rechnungen, automatisch zu einem PDF zusammengeführt und revisionssicher im Archivsystem gespeichert. Damit wird eine transparente und gesetzeskonforme Ablage aller Finanzdokumente gewährleistet.",
    date: "Oktober 2023 - Dezember 2023",
    technology: ["React", "TypeScript", "SPFx", "SharePoint SE", "PowerShell"],
  },
  {
    title: "Interner Byte5 Adventskalender",
    company: "byte5 GmbH",
    description:
      "War eine interne Adventsaktion, bei der jeden Tag Aufgaben zu bewältigen waren. Die Teilnehmenden mussten ihre Ergebnisse dokumentieren, aufnehmen und im System hochladen. So entstand ein spielerischer Wettbewerb, der Teamgeist, Kreativität und Motivation im Arbeitsalltag förderte.",
    date: "Oktober 2022",
    technology: ["Next.js", "TypeScript", "Go", "PostgreSQL"],
  },
  {
    title: "Automatische Cypress Test fürs Carrera Shop System",
    company: "byte5 GmbH",
    description:
      "Automatische Cypress Tests für das Carrera Shop System zur Sicherstellung der Funktionalität und Benutzerfreundlichkeit.",
    date: "Oktober 2021 - April 2023",
    technology: ["Cypress", "TypeScript"],
  },
  {
    title: "BW Jobs (TYPO3 Extension)",
    company: "Browserwerk GmbH",
    description:
      "Die Extension ist eine einfach zu installierende TYPO3-Erweiterung zur Erstellung einer leistungsstarken Jobliste. Sie ist nach dem Schema.org-Standard strukturiert, wodurch Stellenanzeigen automatisch an Jobportale weitergeleitet werden können.",
    date: "Oktober 2021 - April 2023",
    technology: ["PHP", "HTML"],
  },
  {
    title: "Multi Social Media",
    company: "byte5 GmbH",
    description:
      "Multi Social Media war ein Tool zur zentralen Aggregation und Darstellung von Social-Media- und Streaming-Daten. Es sammelt Informationen über Plattformen wie YouTube, Spotify und Apple Music über deren APIs und zeigt sie übersichtlich auf einer Seite an. Zusätzlich ermöglicht das System das Erstellen von Playlists über mehrere Streaming-Dienste hinweg und bietet eine Suche nach Serien, Filmen und Schauspielern, basierend auf den Daten von MovieDB.",
    date: "Oktober 2021 - April 2022",
    technology: [
      "Next.js",
      "TypeScript",
      "APIs",
      "Node.js",
      "Express.js",
      "Redis",
    ],
  },

  {
    title: "Bachelorarbeit (Hyperwork)",
    company: "Hochschule Rhein-Main",
    description:
      "Hyperwork ist ein Arbeitsplatz-Buchungssystem, das im Rahmen meiner Bachelorarbeit entwickelt wurde. Mit der Anwendung können Mitarbeiterinnen und Mitarbeiter flexibel ihren Arbeitsplatz reservieren, sei es im Büro, in Meetingräumen oder in Co-Working-Bereichen. Das System unterstützt eine effiziente Raumnutzung, vermeidet Doppelbelegungen und schafft Transparenz über verfügbare Arbeitsplätze. Darüber hinaus trägt Hyperwork dazu bei, flexible Arbeitsmodelle wie Hybrid Work oder Desk Sharing optimal zu organisieren und erleichtert Unternehmen die Planung und Auslastung ihrer Büroflächen.",
    date: "Februar 2022 - August 2021",
    technology: ["React", "TypeScript", "Go", "MongoDB", "Docker"],
  },
  {
    title: "Wachprojekt (MyFoodCoop)",
    company: "Hochschule Rhein-Main, Stadtgemüse Wiesbaden",
    description:
      "Mit der Stadtgemüse-App kannst du regional, ökologisch und fair produzierte Lebensmittel direkt bestellen. Verwalte deine Bestellungen, plane Abholungen und bleibe immer über aktuelle Angebote informiert. Die App macht es einfach, Teil einer solidarischen Community zu sein und nachhaltig einzukaufen, von frischem Gemüse über Honig, Säfte und Milchprodukte bis hin zu Eiern und Getreide.",
    date: "August 2021 - Februar 2022",
    technology: [
      "Svelte",
      "JavaScript",
      "Java",
      "Spring Boot",
      "Karate",
      "PostgreSQL",
    ],
  },
  {
    title: "Automatische Selenium Test fürs Degussa Bank Landingpages",
    company: "Browserwerk GmbH",
    description:
      "Entwicklung von End-to-End-Tests für Formulare auf Landingpages, ausgeführt über Docker-VMs und BrowserStack für zuverlässige Cross-Browser-Tests.",
    date: "Juli 2018 - August 2021",
    technology: [
      "Selenium",
      "TypeScript",
      "TYPO3",
      "PHP",
      "Browserstack",
      "GitLab Pipelines",
      "Docker",
      "SCSS",
    ],
  },
  {
    title: "Unterstütung TYPO3 Entwicklung",
    company: "Browserwerk GmbH",
    description:
      "Unterstützung bei der Entwicklung von TYPO3-basierten Webanwendungen und -lösungen. Webseiten wie: Naspa Immobilien, SokaBau Intranet, Degussa Bank LandingPages, PRIME Selfstorage, Lufthansa, Browserwerk, VAN HEES",
    date: "Juli 2017 - August 2021",
    technology: ["TYPO3", "PHP", "SCSS"],
  },
  {
    title: "PDF generierung für NASPA Immobilien",
    company: "Browserwerk GmbH",
    description:
      "Entwicklung einer PDF-Generierungslösung für die NASPA Immobilien-Website zur automatischen Erstellung von Exposés.",
    date: "Oktober 2018 - April 2019",
    technology: ["TYPO3", "Docker", "MPDF"],
  },
];
