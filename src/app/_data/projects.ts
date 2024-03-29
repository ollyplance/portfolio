import { Project } from '../_models/base-project.component';

export const allProjects: Project[] = [
  new Project(
    'SWE Internship',
    'Worked on a high impact project within the Fuchsia Graphics team to develop a new API and a demo for screen recording within the OS using C++.',
    '../../assets/images/2022swe.png',
    [new Date(2022, 4), new Date(2022, 8)],
    new Set(['featured', 'projects & experiences', 'internships']),
    [
      [
        'Code',
        'https://cs.opensource.google/fuchsia/fuchsia/+/main:src/ui/scenic/lib/screen_capture2/',
      ],
      [
        'Demo',
        'https://cs.opensource.google/fuchsia/fuchsia/+/main:src/ui/examples/screen_recording/',
      ],
      [
        'Docs',
        'https://fuchsia.dev/fuchsia-src/concepts/ui/scenic/screen_capture',
      ],
    ],
    'https://fuchsia.dev/',
  ),

  new Project(
    'SWE Internship',
    'Worked alongside Google Cloud Compute FE team to migrate Cloud Compute Reservation page to Angular. The migration was rolled out to over 2000 monthly users.',
    '../../assets/images/2021swe.png',
    [new Date(2021, 4), new Date(2021, 7)],
    new Set(['projects & experiences', 'internships']),
    [['Page', 'https://console.cloud.google.com/compute/reservations']],
    'https://cloud.google.com/compute/docs/instances/reservations-overview',
  ),

  new Project(
    'STEP Internship',
    'Worked with Angular to develop a full-stack website using Firebase with a team of 3. Implemented user authentication, profiles, data/image uploading, full-text search, and dynamic information.',
    '../../assets/images/2020swe.png',
    [new Date(2020, 4), new Date(2020, 7)],
    new Set(['projects & experiences', 'internships']),
    [],
    'https://github.com/googleinterns/step79-2020',
  ),

  new Project(
    'Montavie',
    'Created a social media iOS application for sharing images and descriptions for my thru-hike on the AT.',
    '../../assets/images/montavie.png',
    [new Date(2023, 0), new Date(2023, 1)],
    new Set(['featured', 'projects & experiences', 'personal life']),
    [
      ['App', 'https://apps.apple.com/us/app/montavie/id1671634416'],
      ['Code', 'https://github.com/ollyplance/montavie-ios'],
    ],
    'https://ollyplance.github.io/montavie-ios/',
  ),

  new Project(
    'RainyDayLover',
    'I learned SwiftUI and Apple development to create a personal app that will allow myself to connect with people who are close to me as I attempt to hike the Appalachian Trail over 5 months.',
    '../../assets/images/rainydaylover.png',
    [new Date(2022, 10), new Date(2022, 11)],
    new Set(['projects & experiences', 'personal life']),
    [['Code', 'https://github.com/ollyplance/rainydaylover']],
    'https://ollyplance.github.io/rainydaylover/',
  ),

  new Project(
    'Earth-It',
    'An Online Multiplayer 2D Sandbox game, similar to Terraria or Minecraft - built in 15112',
    '../../assets/images/earthpixelart.png',
    [new Date(2019, 10), new Date(2019, 11)],
    new Set(['projects & experiences', 'CMU']),
    [['Video', 'https://youtu.be/IPOaKH4888o?si=YZeYnxqLHhnKyiCq']],
    'https://github.com/ollyplance/earth-it',
  ),

  new Project(
    'Science Quiz Web App',
    'Created a full stack Ruby on Rails application using the MVC architecture in 67-272: Application Design and Development.',
    '../../assets/images/67272.png',
    [new Date(2021, 0), new Date(2021, 4)],
    new Set(['projects & experiences', 'CMU']),
    [],
    'https://67272.cmuis.net/home',
  ),

  new Project(
    'SplitIt',
    'React project that implements on ideas for receipt splitting. OCR on receipts, itemization, payment claims and more. Created in team for 17356: Software Engineering for Startups',
    '../../assets/images/splitit.png',
    [new Date(2022, 3), new Date(2022, 4)],
    new Set(['projects & experiences', 'CMU']),
    [['Video', 'https://youtu.be/83tsnPJbnto']],
    'https://github.com/ollyplance/splitit',
  ),

  new Project(
    'Form Experimentation',
    'Experiemented with Angular forms and drag-and-drop to create a modular WYSIWYG. Work in progress, however, foundation is there. This was for an app idea for sharing modular posts about the outdoors where at some point it would include picture, music, gallery, poetry modulars and editing.',
    '../../assets/images/angular.png',
    [new Date(2022, 4), new Date(2022, 10)],
    new Set(['projects & experiences', 'personal life']),
    [],
    'https://github.com/ollyplance/angular-form-experimentation',
  ),

  new Project(
    'Non-profit Consulting',
    'Worked with One To World to fix their data pipeline. They were unable to access old customer data due to a migration they had done internally. Recognized the problems and created a solution to extract and help them manage the data in the future.',
    '../../assets/images/onetoworldlogo.png',
    [new Date(2022, 0), new Date(2022, 4)],
    new Set(['featured', 'projects & experiences', 'CMU']),
    [],
    'https://onetoworld.org/',
  ),

  new Project(
    'Game Development',
    'Developed several games in 53-471 (Game Design, Prototyping, and Production). This class focused on "rapid prototyping and iterative design, and common methods of project management for creative software development."',
    '../../assets/images/game.png',
    [new Date(2021, 0), new Date(2021, 4)],
    new Set(['featured', 'projects & experiences', 'CMU']),
    [],
    'https://ollyplance.github.io/game-development/',
  ),

  new Project(
    'Chapbook',
    'First collection of poetry I ever wrote. Chapbook was a series of poems I wrote in Survey of Forms: Poetry.',
    '../../assets/images/poetry1.png',
    [new Date(2021, 7), new Date(2021, 11)],
    new Set(['writing', 'CMU']),
    [],
    '../../assets/pdfs/Chapbook1.pdf',
  ),

  new Project(
    'Poetry Workshop',
    'Revised poetry from a Workshop class I took at CMU. Frequent writing and revisions due every week. Excited about my writing in this collection.',
    '../../assets/images/poetry2.png',
    [new Date(2022, 7), new Date(2022, 11)],
    new Set(['writing', 'CMU']),
    [],
    '../../assets/pdfs/2022PoetryCollection.pdf',
  ),

  new Project(
    'Kiosk Project',
    'Build out Figma designs of bus kiosk by researching and prototyping designs to make travel more efficient.',
    '../../assets/images/kiosk.png',
    [new Date(2022, 0), new Date(2022, 4)],
    new Set(['projects & experiences', 'CMU']),
    [],
    'https://www.figma.com/proto/ipfpK7x6fNa1Bu3IYAC2rO/Hi-Fidelity-Prototype?type=design&scaling=scale-down&node-id=20-129&starting-point-node-id=20%3A129',
  ),

  new Project(
    'AT Thru-hike',
    "The Appalachian Trail is a 2198.4 mile trail from Georgia to Maine. I backpacked for 110 consecutive days carrying my shelter, food, and supplies. I pushed myself to physical and mental limits to successfully reach my goal. I documented every day's mileage, challenges, and elevation on the app I developed: Montavie.",
    '../../assets/images/AppalachianTrail.png',
    [new Date(2023, 1), new Date(2023, 5)],
    new Set(['physical challenges', 'personal life', 'featured']),
    [
      ['Gear', 'https://lighterpack.com/r/tvfh0z'],
      ['App', 'https://apps.apple.com/us/app/montavie/id1671634416'],
      ['Map', 'https://faroutguides.com/appalachian-trail-map/'],
    ],
    'https://appalachiantrail.org/',
  ),

  new Project(
    "CMU Swim Team",
    'Swam on the CMU Mens Varsity Swim Team with intensive training schedule throughout college. Attended UAA meet my freshman year. Large time commitment with training 6 days a week and multiple doubles (morning and night).',
    '../../assets/images/CMUAthletics.png',
    [new Date(2019, 7), new Date(2022, 7)],
    new Set(['physical challenges', 'CMU']),
    [['Times', 'https://www.swimcloud.com/swimmer/453734/']],
    'https://athletics.cmu.edu/sports/mswimdive/2020-21/bios/lance_oliver_3g5d',
  ),
];
