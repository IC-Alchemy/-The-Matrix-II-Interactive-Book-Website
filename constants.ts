
import { Dossier } from './types';

export const DOSSIERS: Dossier[] = [
  {
    id: 'intro',
    title: 'Introduction & Mission Briefing',
    category: 'General Intelligence',
    content: [
      "MATRIX II is the result of MATRIX plus 2 years of intense work. The knowledge contained within is a product of the blood, sweat and tears of many people.",
      "The abduction and manipulation of human beings by other species is a natural process that occurs when the awareness and intelligence of one species is less than another. It is the collective goal of many on this planet to raise the awareness and intelligence of the human species, as well as the awareness and intelligence of some alien species, to a point where unmanipulated evolving harmony can occur.",
      "This terminal provides access to declassified, and in some cases, re-constructed data pertaining to this multidimensional scenario. Proceed with caution. The information contained herein may challenge preconceived notions of reality.",
      "Select a dossier from the index to begin your investigation."
    ],
    images: [],
    altText: [],
  },
  {
    id: 'greys',
    title: 'Profile: The Greys',
    category: 'Alien Species',
    content: [
      "The primary species involved is that of the Greys. Over the last several years, researchers have unearthed plenty of evidence that the United States made one or more agreements with a species described as the tall Greys, and has agreed not to interfere with alien operational plans in trade for technology.",
      "The large Greys use smaller cloned big-headed Greys to perform abduction and examination work. It is these Greys that abductees see most of the time.",
      "For the Greys, the main motivation for the genetic work with humans is the survival of the Grey species, which is genetically damaged. Travel outside the 3rd dimension also bridges the human concept of time. Some species claim that they are being performed at this time.",
    ],
    images: ['https://picsum.photos/seed/greyalien1/400/300', 'https://picsum.photos/seed/greyalien2/400/300'],
    altText: ["Artist's rendering of a standard 'Grey' entity.", "Composite sketch of Grey facial features based on witness testimony."]
  },
  {
    id: 'reptilians',
    title: 'Profile: The Reptilians',
    category: 'Alien Species',
    content: [
      "This initial report is concerned with two groups of aliens: Greys and Reptilians. Both groups live on this planet or beneath its surface and in space. They have been here for a long time.",
      "The Reptilian species directs the efforts of the worker class, which are about 4 feet tall. They are currently referred to as Greys or EBEs and are the largest category likely to be encountered by surface humans.",
      "The Greys (the short, 'Big Heads') are mercenaries. They interface with humans in 'Secret Societies' and within the Military/Governmental Complex. An interconnected 'WEB' manipulates the surface Earth cultures."
    ],
    images: ['https://picsum.photos/seed/reptilian1/400/300'],
    altText: ['Illustration depicting a reptilian humanoid entity.']
  },
  {
    id: 'area51',
    title: 'Location Analysis: Groom Lake (Area 51)',
    category: 'Terrestrial Bases',
    content: [
      "Groom Lake, also known as Area 51, is a highly classified United States Air Force (USAF) facility located within the Nevada Test and Training Range.",
      "The intense secrecy surrounding the base has made it the frequent subject of conspiracy theories and a central component to UFO folklore.",
      "Public Hearing for Renewal of Groom Mountain Range Land Withdrawal, November 19, 1985. The purpose of this action is allegedly for national defense. It is believed that reverse-engineering of extraterrestrial craft is ongoing at this location.",
      "Hypothetical Configuration of Tunnels and Gravity Anomalies indicates extensive underground facilities, potentially connecting to other bases such as Dulce, NM."
    ],
    images: ['https://picsum.photos/seed/area51map/400/300', 'https://picsum.photos/seed/area51craft/400/300'],
    altText: ["Topographical map of Groom Lake facility and surrounding area.", "Sketch of a triangular craft allegedly tested at the S-4 facility."]
  },
  {
    id: 'abduction',
    title: 'Phenomenon: Abduction & Manipulation',
    category: 'Anomalous Events',
    content: [
      "Abduction by alien entities is a reality shaking experience for many people. The technologies involved allow the aliens to control perception, experience, and memory. A significant portion of those abducted remember the experience without hypnotic regression.",
      "Typically, individuals are taken and subjected to testing, examination and manipulation. Biological monitoring and control implants are inserted and the individual is then released. There have also been cases of genetic cross breeding work.",
      "Memory loss is a primary effect of abduction cases, and is apparent in most cases, but not all. The first follows a two primary thoughts with regard to memory loss. The first holds that memory blocks are created by the aliens to protect the subject."
    ],
    images: ['https://picsum.photos/seed/abduction1/400/300'],
    altText: ["Diagram illustrating physical locations of abduction-related bodily injuries."]
  }
];
