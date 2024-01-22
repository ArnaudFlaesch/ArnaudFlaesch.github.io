import { IExperience } from '../model/IExperience';

export const formationData: IExperience[] = [
  {
    title: 'Mastère Architecture des Logiciels',
    name: 'ESGI - École Supérieure de Génie Informatique',
    location: 'Paris 12ème',
    description: `
    Activités et associations : J'ai participé à des associations ludiques et également assisté à des conférences organisées par l'école concernant par exemple le domaine du Web, la question de la sécurité des applications ou encore l'évolution des langages utilisés pour les développer.
    Réalisations de projets en Android, C++ ou encore Spring.`,
    dateDebut: new Date(2015, 9, 1),
    dateFin: new Date(2017, 8, 31),
    skills: ['C#', 'Java', 'Spring Boot', 'C++']
  },
  {
    title: 'Bachelor Architecture des Logiciels',
    name: 'ESGI - École Supérieure de Génie Informatique',
    location: 'Paris 12ème',
    description: `
    Réalisations de projets en Python, C, Java ou encore SQL (Conception Bases de données).
    Membre de l'association sportive de Crossfit de l'école.
    `,
    dateDebut: new Date(2014, 9, 1),
    dateFin: new Date(2015, 5, 31),
    skills: ['Bases de données', 'Java', 'PHP', 'Langage de modélisation unifié (UML)', 'SQL']
  },
  {
    title: 'Brevet de Technicien Supérieur',
    name: 'Lycée Privé Saint Michel de Picpus',
    location: 'Saint Mandé',
    description: `BTS Services Informatiques aux Organisations, Solutions Logicielles et Applications Métiers.
    Stages en entreprise (deux fois cinq semaines); développement d'applications Web interagissant avec une base de données dans le cadre des projets à  présenter pour l'épreuve E4 (Conception et Maintenance de Solutions Informatiques).
    Ces deux années en BTS m'ont permis d'acquérir beaucoup de connaissances en matière de développement Web (PHP, SQL, HTML) notamment grâce aux deux stages  faisant partie de la formation, mais aussi en développement logiciel (Java, C++).
    `,
    dateDebut: new Date(2012, 9, 1),
    dateFin: new Date(2014, 5, 31),
    skills: []
  },
  {
    title: 'Licence Mathématiques - Informatique',
    name: 'Université Paris Descartes - Paris 5',
    location: 'Paris 07ème',
    description: `
    Emploi étudiant durant le second semestre : enregistrement vidéo de certains cours pour les mettre en ligne sur la médiathèque de l'université.
    Course à pieds avec le service des sports de l'université.
    `,
    dateDebut: new Date(2015, 9, 18),
    dateFin: new Date(2015, 9, 18),
    skills: []
  },
  {
    title: 'Baccalauréat Économique et Social',
    name: 'Lycée privé Massillon',
    location: 'Paris 4ème',
    description: `Activités extra-scolaires : Cours d'improvisation pendant un an.`,
    dateDebut: new Date(2015, 9, 1),
    dateFin: new Date(2015, 9, 18),
    skills: []
  }
];

export default formationData;
