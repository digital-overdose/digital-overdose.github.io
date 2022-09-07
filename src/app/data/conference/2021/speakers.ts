// tslint:disable:object-literal-key-quotes
import { Speaker } from 'src/app/interfaces/speaker';

/** The list of team members. */
export const speakers: Speaker[] = [
  {
    name: 'Sam Ferguson',
    alias: ['AffineSecurity'],
    description: 'All Your Modules Are Belong To Us - An Introduction to Python Module Hijacking',
    imageUrl: '/assets/images/conference/2021/speakers/affinesecurity.png',
    links: [
      {
        label: 'Website',
        icon: 'fas fa-globe',
        url: 'https://affinesecurity.gitlab.io/',
      },
      {
        label: 'Twitter',
        icon: 'fab fa-fw fa-twitter-square',
        url: 'https://twitter.com/AffineSecurity'
      },
      {
        label: 'LinkedIn',
        icon: 'fab fa-fw fa-linkedin',
        url: 'https://www.linkedin.com/in/affinesecurity/',
      },
      {
        label: 'GitLab',
        icon: 'fab fa-fw fa-gitlab',
        url: 'https://gitlab.com/AffineSecurity',
      }
    ],
    talkURL: 'https://www.youtube.com/watch?v=hcIB41SBPb8'
  },
  {
    name: 'Abigail Simmons',
    description: 'Honey, I shrunk the disks! - A beginner\'s guide to data recovery',
    imageUrl: '/assets/images/conference/2021/speakers/pandecrew.png',
    links: [
      {
        label: 'Twitter',
        icon: 'fab fa-fw fa-twitter-square',
        url: 'https://twitter.com/met_sec'
      }
    ],
    talkURL: 'https://www.youtube.com/watch?v=0wm_mhdLMnw'
  },
  {
    name: 'Drew Jones',
    description: 'Preparing for the Offensive Security Certified Professional (OSCP) Without Any PenTesting Experience',
    imageUrl: '/assets/images/conference/2021/speakers/qhum7.jpg',
    links: [
      {
        label: 'Website',
        icon: 'fas fa-globe',
        url: 'https://qhum7.github.io/',
      },
      {
        label: 'Twitter',
        icon: 'fab fa-fw fa-twitter-square',
        url: 'https://twitter.com/qhum7sec'
      }
    ],
    talkURL: 'https://www.youtube.com/watch?v=Wd33BLBv7X0'
  },
  {
    name: 'Luke Pajor',
    alias: ['Luckay'],
    description: 'What to do About Motivated Intruders',
    imageUrl: '/assets/images/conference/2021/speakers/luckay.png',
    links: [
      {
        label: 'LinkedIn',
        icon: 'fab fa-fw fa-linkedin',
        url: 'https://www.linkedin.com/in/luke-pajor-02486511b/',
      },
    ],
    talkURL: 'https://www.youtube.com/watch?v=i35QA7A2K84'
  },
  {
    name: 'Alex Hoffman',
    alias: ['RedWedgeX'],
    description: '0-Days & Nat 20\'s - CVSSv3 Through the Lens of Dungeons & Dragons',
    imageUrl: '/assets/images/conference/2021/speakers/redwedgex.png',
    links: [
      {
        label: 'Twitter',
        icon: 'fab fa-fw fa-twitter-square',
        url: 'https://twitter.com/RedWedgeX'
      }
    ],
    talkURL: 'https://www.youtube.com/watch?v=QSMA-c7c168'
  },
  {
    name: '3t3rn4l P4r4d0x',
    description: 'Capabilities: That one vulnerability vector you don\'t realize exists',
    imageUrl: '/assets/images/conference/2021/speakers/3t3rn4l_p4r4d0x.png',
    talkURL: 'https://www.youtube.com/watch?v=VaMKSsTtCZo'
  },
  {
    name: 'Juan Giarrizzo',
    alias: ['F1nd3r'],
    description: 'A rookie journey into OSINT: How to get started (on a budget)',
    imageUrl: '/assets/images/conference/2021/speakers/f1nd3r.jpg',
    links: [
      {
        label: 'Twitter',
        icon: 'fab fa-fw fa-twitter-square',
        url: 'https://twitter.com/10fMan7'
      }
    ],
    talkURL: 'https://www.youtube.com/watch?v=BUIizj01sLE'
  },
  {
    name: 'BosintBlanc',
    description: 'Systematic OSINT and the OSINTFUNdamentals',
    imageUrl: '/assets/images/conference/2021/speakers/bosintblanc.jpg',
    links: [
      {
        label: 'Twitter',
        icon: 'fab fa-fw fa-twitter-square',
        url: 'https://twitter.com/BosintBlanc'
      }
    ],
    talkURL: 'https://www.youtube.com/watch?v=tQX_E6f6Va4'
  },
  {
    name: 'Suryansh M.',
    description: 'Application Logic Vulnerabilities and My Journey',
    imageUrl: '/assets/images/conference/2021/speakers/milleniumx.jpg',
    links: [
      {
        label: 'Medium',
        icon: 'fab fa-medium',
        url: 'https://medium.com/@suryanshmansha'
      },
      {
        label: 'Twitter',
        icon: 'fab fa-fw fa-twitter-square',
        url: 'https://twitter.com/0xd4rk'
      }
    ],
    talkURL: 'https://www.youtube.com/watch?v=HkIkHTS-uV0'
  },
  {
    name: 'Nasreddine Bencherchali',
    alias: ['Nas Bench'],
    description: 'Common Tools & Techniques Used By Threat Actors and Malware',
    imageUrl: '/assets/images/conference/2021/speakers/nas_bench.jpg',
    links: [
      {
        label: 'Twitter',
        icon: 'fab fa-fw fa-twitter-square',
        url: 'https://twitter.com/nas_bench'
      },
      {
        label: 'LinkedIn',
        icon: 'fab fa-fw fa-linkedin',
        url: 'https://www.linkedin.com/in/nasreddinebencherchali/',
      },
      {
        label: 'GitLab',
        icon: 'fab fa-fw fa-gitlab',
        url: 'https://github.com/nasbench',
      }
    ],
    talkURL: 'https://www.youtube.com/watch?v=YVMgHsvJ1_Y'
  },
  {
    name: 'Sarthak Taneja',
    alias: ['S4T4N'],
    description: 'The Zero Trust Model',
    imageUrl: '/assets/images/conference/2021/speakers/sarthak.jpg',
    links: [
      {
        label: 'Twitter',
        icon: 'fab fa-fw fa-twitter-square',
        url: 'https://twitter.com/s4t4n1212'
      },
    ],
    talkURL: 'https://www.youtube.com/watch?v=ZZ9M8TevT8Y'
  },
  {
    name: 'Patrick Rus',
    description: 'Cyber-Investigation/OSINT of Phishing Emails',
    imageUrl: '/assets/images/conference/2021/speakers/patrick_rus.jpg',
    talkURL: 'https://www.youtube.com/watch?v=V3sbQmxTkm0'
  },
  {
    name: 'Rahul',
    alias: ['nxious', 'nxi0us'],
    description: 'Creating a DevSecOps pipeline from scratch',
    imageUrl: '/assets/images/conference/2021/speakers/nxi0us.jpg',
    links: [
      {
        label: 'Twitter',
        icon: 'fab fa-fw fa-twitter-square',
        url: 'https://twitter.com/0xnxious'
      },
      {
        label: 'LinkedIn',
        icon: 'fab fa-fw fa-linkedin',
        url: 'https://www.linkedin.com/in/nxi0us/',
      },
    ]
  },
  {
    name: 'Anastasiia Mytrofanovska',
    description: 'IPv6. Does size matter?',
    imageUrl: '/assets/images/conference/2021/speakers/anastasiia_m.jpg',
    links: [
      {
        label: 'Twitter',
        icon: 'fab fa-fw fa-twitter',
        url: 'https://www.twitter.com/stasya7z/',
      }
    ],
    talkURL: 'https://www.youtube.com/watch?v=YC1RScc9tKY'
  },
  {
    name: 'Argandov',
    description: 'Making sense of data with Linux',
    imageUrl: '/assets/images/conference/2021/speakers/argandov.jpg',
    links: [
      {
        label: 'Twitter',
        icon: 'fab fa-fw fa-twitter-square',
        url: 'https://twitter.com/Argandov1'
      },
      {
        label: 'LinkedIn',
        icon: 'fab fa-fw fa-linkedin',
        url: 'https://www.linkedin.com/in/argandov/',
      }
    ],
    talkURL: 'https://www.youtube.com/watch?v=5mjjsv91qbU'
  },
  {
    name: 'Deeksha Shekar',
    description: 'Introduction to Social Engineering',
    imageUrl: '/assets/images/conference/2021/speakers/deeksha.jpg',
    links: [
      {
        label: 'Twitter',
        icon: 'fab fa-fw fa-twitter-square',
        url: 'https://twitter.com/ABSaarc'
      },
      {
        label: 'LinkedIn',
        icon: 'fab fa-fw fa-linkedin',
        url: 'https://www.linkedin.com/in/deeksha-shekar-5422aa15a/',
      }
    ],
    talkURL: 'https://www.youtube.com/watch?v=4RZIhme1xcg'
  },
  {
    name: 'White Hat Inspector',
    description: 'Skype: A hidden OSINT goldmine',
    imageUrl: '/assets/images/conference/2021/speakers/whitehatinspector.jpg',
    links: [
      {
        label: 'Twitter',
        icon: 'fab fa-fw fa-twitter-square',
        url: 'https://twitter.com/WHInspector'
      },
      {
        label: 'GitHub',
        icon: 'fab fa-fw fa-github-square',
        url: 'https://github.com/WhiteHatInspector',
      }
    ],
    talkURL: 'https://www.youtube.com/watch?v=x0TYNXlvdww'
  },
  {
    name: 'Becca I.',
    description: 'BizOps in motion',
    imageUrl: '/assets/images/conference/2021/speakers/becca.jpg',
    links: [
      {
        label: 'Twitter',
        icon: 'fab fa-fw fa-twitter-square',
        url: 'https://twitter.com/dotbecca'
      },
      {
        label: 'LinkedIn',
        icon: 'fab fa-fw fa-linkedin',
        url: 'https://www.linkedin.com/in/rebecca-isherwood-b23007136/',
      }
    ],
    talkURL: 'https://www.youtube.com/watch?v=kRg9-qoAX6w'
  },
  {
    name: 'Tehreem Fahim',
    alias: ['Tem', 'BlackZero'],
    description: 'Building an effective Red Team',
    imageUrl: '/assets/images/conference/2021/speakers/placeholder.jfif',
    links: [
      {
        label: 'Twitter',
        icon: 'fab fa-fw fa-twitter-square',
        url: 'https://twitter.com/tehreemfahim'
      },
      {
        label: 'LinkedIn',
        icon: 'fab fa-fw fa-linkedin',
        url: 'https://www.linkedin.com/in/tehreem09/',
      }
    ],
    talkURL: 'https://www.youtube.com/watch?v=Ojc87ewBsMI'
  },
  {
    name: 'Luna Belfort',
    alias: ['SovietLunox'],
    description: 'A.I. - The Inevitable Threat w/ Alvaro Leno',
    imageUrl: '/assets/images/conference/2021/speakers/sovietlunox.jpg',
    links: [
      {
        label: 'LinkedIn',
        icon: 'fab fa-fw fa-linkedin',
        url: 'https://www.linkedin.com/in/luna-belfort/',
      },
      {
        label: 'Instagram',
        icon: 'fab fa-fw fa-instagram-square',
        url: 'https://www.instagram.com/luna.brizzi/',
      },
    ],
    talkURL: 'https://www.youtube.com/watch?v=Rzqo0d-oDtc'
  },
  {
    name: 'Alvaro Leno',
    alias: ['Trueno'],
    description: 'A.I. - The Inevitable Threat w/ Luna Belfort',
    imageUrl: '/assets/images/conference/2021/speakers/trueno.jpg',
    links: [
      {
        label: 'LinkedIn',
        icon: 'fab fa-fw fa-linkedin',
        url: 'https://www.linkedin.com/in/alvaroleno/',
      },
      {
        label: 'Instagram',
        icon: 'fab fa-fw fa-instagram-square',
        url: 'https://www.instagram.com/alvaroleno/',
      },
    ],
    talkURL: 'https://www.youtube.com/watch?v=Rzqo0d-oDtc'
  },
  {
    name: 'Thomas Chen',
    description: 'Machine Learning for Humanitarian Good',
    imageUrl: '/assets/images/conference/2021/speakers/thomas_chen.jpg',
  },
  {
    name: 'Mariah Rucker',
    description: 'Defense Against the Dark (Cyber) Arts',
    imageUrl: '/assets/images/conference/2021/speakers/patronuscode.jpg',
    links: [
      {
        label: 'Twitter',
        icon: 'fab fa-fw fa-twitter-square',
        url: 'https://twitter.com/patronuscode'
      },
      {
        label: 'LinkedIn',
        icon: 'fab fa-fw fa-linkedin',
        url: 'https://www.linkedin.com/in/mariahrucker/',
      },
      {
        label: 'GitHub',
        icon: 'fab fa-fw fa-github-square',
        url: 'https://github.com/patronuscode',
      },
      {
        label: 'Website',
        icon: 'fas fa-globe',
        url: 'https://wizardsintech.com',
      },
    ]
  },
  {
    name: 'Heather Lane',
    alias: ['Heart'],
    description: 'Manual work: A noble and proven approach to open source investigations',
    imageUrl: '/assets/images/conference/2021/speakers/heart.png',
    links: [
      {
        label: 'Twitter',
        icon: 'fab fa-fw fa-twitter-square',
        url: 'https://twitter.com/Heart_OSINT'
      },
      {
        label: 'LinkedIn',
        icon: 'fab fa-fw fa-linkedin',
        url: 'https://www.linkedin.com/in/heatherelane/',
      }
    ]
  },
  {
    name: 'Josephine Windsor-Lewis',
    description: 'Smart phone to medical device in five (not so) easy steps',
    imageUrl: '/assets/images/conference/2021/speakers/josephinew.jpg',
    links: [
      {
        label: 'Twitter',
        icon: 'fab fa-fw fa-twitter-square',
        url: 'https://twitter.com/m157y573p'
      },
    ],
    talkURL: 'https://www.youtube.com/watch?v=LbxVzD1vQz4'
  },
  {
    name: 'REALM',
    description: 'An introduction to reverse engineering: ‘WannaCry’ killswitch domain',
    imageUrl: '/assets/images/conference/2021/speakers/realm.jpg',
    links: [
      {
        label: 'Twitter',
        icon: 'fab fa-fw fa-twitter-square',
        url: 'https://twitter.com/tehr3alm'
      },
    ]
  },
  {
    name: 'Michael McGinley',
    description: 'Parting ways with Purdue? - The Effect of Industry 4.0 on Industrial Control Systems Security Architectures',
    imageUrl: '/assets/images/conference/2021/speakers/michaelm.jpg',
    links: [
      {
        label: 'Twitter',
        icon: 'fab fa-fw fa-twitter-square',
        url: 'https://twitter.com/michael_mcg3'
      },
    ],
    talkURL: 'https://www.youtube.com/watch?v=jlr5qNZc0Qk'
  },
  {
    name: 'Chloe Seaton',
    description: 'What it takes to be an Ethical Hacker - A journey into a technical role',
    imageUrl: '/assets/images/conference/2021/speakers/chloe.jpg',
    links: [
      {
        label: 'Twitter',
        icon: 'fab fa-fw fa-twitter-square',
        url: 'https://twitter.com/csearchi'
      },
      {
        label: 'LinkedIn',
        icon: 'fab fa-fw fa-linkedin',
        url: 'https://www.linkedin.com/in/chloe-seaton-13732014a/',
      }
    ],
    talkURL: 'https://www.youtube.com/watch?v=Rzqo0d-oDtc'
  }
];
