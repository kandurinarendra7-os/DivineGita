import { Chapter, Shloka } from "../types";
import img1 from '../assets/images/krishna_arjuna_chariot_1785154767179.jpg';
import img2 from '../assets/images/divine_gita_book_1785154780501.jpg';
import img3 from '../assets/images/spiritual_meditation_1785154800088.jpg';
import img4 from '../assets/images/krishna_blowing_conch_1785155185325.jpg';
import img5 from '../assets/images/arjuna_despair_1785155200697.jpg';
import img6 from '../assets/images/krishna_teaching_1785155215043.jpg';
import img7 from '../assets/images/cosmic_vishvarupa_1785155827520.jpg';
import img8 from '../assets/images/arjuna_devotion_1785155842638.jpg';
import img9 from '../assets/images/kurukshetra_battlefield_1785155854135.jpg';
import img10 from '../assets/images/krishna_lotus_1785155866878.jpg';
import img11 from '../assets/images/chariot_wheel_dust_1785155880006.jpg';
import img12 from '../assets/images/sacred_diya_lamp_1785155894896.jpg';

export const divineImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

export const getVersesForChapter = (chapterId: number, count: number = 5): Shloka[] => {
  const verses: Shloka[] = [];
  for (let i = 1; i <= count; i++) {
    // We'll use real featured shlokas if they match, otherwise generate majestic placeholders
    const existing = featuredShlokas.find(s => s.chapter === chapterId && s.verse === i);
    if (existing) {
      verses.push(existing);
    } else {
      verses.push({
        id: `${chapterId}-${i}`,
        chapter: chapterId,
        verse: i,
        sanskrit: `ॐ श्री परमात्मने नमः ।\nअथ ${chapterId} अध्यायः । श्लोक ${i}`,
        transliteration: `om śrī paramātmane namaḥ .\natha ${chapterId} adhyāyaḥ . śloka ${i}`,
        translation: `This is verse ${i} of chapter ${chapterId}. The divine teachings continue to guide the soul towards ultimate liberation and understanding of the supreme truth.`,
        meaning: `In this verse, the profound connection between the individual soul and the universal consciousness is explored, urging the seeker to look within.`
      });
    }
  }
  return verses;
};

export const chapters: Chapter[] = [
  {
    id: 1,
    chapter_number: 1,
    name_sanskrit: "Arjuna Visada Yoga",
    name_english: "The Yoga of Arjuna's Dejection",
    name_meaning: "Lamenting the Consequence of War",
    verses_count: 47,
    summary: "Arjuna's despair and confusion on the battlefield of Kurukshetra upon seeing his relatives and teachers in the opposing army."
  },
  {
    id: 2,
    chapter_number: 2,
    name_sanskrit: "Sankhya Yoga",
    name_english: "The Yoga of Knowledge",
    name_meaning: "Transcendental Knowledge",
    verses_count: 72,
    summary: "Krishna begins his teachings, explaining the immortal nature of the soul (Atman) and the necessity of fulfilling one's duty without attachment to the results."
  },
  {
    id: 3,
    chapter_number: 3,
    name_sanskrit: "Karma Yoga",
    name_english: "The Yoga of Action",
    name_meaning: "Path of Selfless Service",
    verses_count: 43,
    summary: "Krishna emphasizes the importance of performing duties (Karma) selflessly as an offering to the Divine, without attachment to the fruits of action."
  },
  {
    id: 4,
    chapter_number: 4,
    name_sanskrit: "Jnana Karma Sanyasa Yoga",
    name_english: "The Yoga of Knowledge and the Disciplines of Action",
    name_meaning: "Path of Knowledge",
    verses_count: 42,
    summary: "Krishna reveals the eternal nature of his teachings, the concept of avatars, and the purification of action through transcendental knowledge."
  },
  {
    id: 5,
    chapter_number: 5,
    name_sanskrit: "Karma Sanyasa Yoga",
    name_english: "The Yoga of Action and Knowledge",
    name_meaning: "Path of Renunciation",
    verses_count: 29,
    summary: "Krishna explains that both renunciation of action and selfless action lead to the supreme goal, but selfless action is easier and more practical."
  },
  {
    id: 6,
    chapter_number: 6,
    name_sanskrit: "Dhyana Yoga",
    name_english: "The Yoga of Meditation",
    name_meaning: "Path of Meditation",
    verses_count: 47,
    summary: "Krishna describes the practice of meditation (Dhyana) to control the mind and senses, leading to the realization of the Supreme Self."
  },
  {
    id: 7,
    chapter_number: 7,
    name_sanskrit: "Jnana Vijnana Yoga",
    name_english: "The Yoga of Knowledge and Judgment",
    name_meaning: "Knowledge of the Ultimate Truth",
    verses_count: 30,
    summary: "Krishna explains absolute reality and illusory energy (Maya), detailing how difficult it is to overcome Maya without surrender to the Divine."
  },
  {
    id: 8,
    chapter_number: 8,
    name_sanskrit: "Aksara Brahma Yoga",
    name_english: "The Yoga of the Imperishable Brahman",
    name_meaning: "Attaining the Supreme",
    verses_count: 28,
    summary: "Krishna answers Arjuna's questions about Brahman, Karma, and how to remember the Divine at the time of death to attain liberation."
  },
  {
    id: 9,
    chapter_number: 9,
    name_sanskrit: "Raja Vidya Raja Guhya Yoga",
    name_english: "The Yoga of the Sovereign Science and Sovereign Secret",
    name_meaning: "Most Confidential Knowledge",
    verses_count: 34,
    summary: "Krishna reveals the supreme and most profound knowledge of devotional service (Bhakti), explaining His relationship with the universe."
  },
  {
    id: 10,
    chapter_number: 10,
    name_sanskrit: "Vibhuti Yoga",
    name_english: "The Yoga of the Divine Glories",
    name_meaning: "The Opulence of the Absolute",
    verses_count: 42,
    summary: "Krishna describes His infinite glories, manifestations, and powers, showing Arjuna that He is the source of everything."
  },
  {
    id: 11,
    chapter_number: 11,
    name_sanskrit: "Visvarupa Darsana Yoga",
    name_english: "The Yoga of the Vision of the Cosmic Form",
    name_meaning: "Vision of the Universal Form",
    verses_count: 55,
    summary: "Krishna grants Arjuna divine vision and reveals His awe-inspiring, terrifying, and magnificent Universal Form (Vishvarupa)."
  },
  {
    id: 12,
    chapter_number: 12,
    name_sanskrit: "Bhakti Yoga",
    name_english: "The Yoga of Devotion",
    name_meaning: "The Path of Devotion",
    verses_count: 20,
    summary: "Krishna explains the superiority of devotion (Bhakti) to a personal God over meditation on the unmanifest Brahman, describing the traits of a true devotee."
  },
  {
    id: 13,
    chapter_number: 13,
    name_sanskrit: "Ksetra Ksetrajna Vibhaga Yoga",
    name_english: "The Yoga of the Distinction between the Field and the Knower of the Field",
    name_meaning: "Nature, the Enjoyer, and Consciousness",
    verses_count: 34,
    summary: "Krishna explains the difference between the physical body (the field) and the soul (the knower of the field), and the Supreme Soul."
  },
  {
    id: 14,
    chapter_number: 14,
    name_sanskrit: "Gunatraya Vibhaga Yoga",
    name_english: "The Yoga of the Division of the Three Gunas",
    name_meaning: "The Three Modes of Material Nature",
    verses_count: 27,
    summary: "Krishna describes the three modes of material nature (Sattva, Rajas, Tamas), how they bind the soul, and how to transcend them."
  },
  {
    id: 15,
    chapter_number: 15,
    name_sanskrit: "Purusottama Yoga",
    name_english: "The Yoga of the Supreme Person",
    name_meaning: "The Yoga of the Supreme Person",
    verses_count: 20,
    summary: "Krishna uses the metaphor of an inverted banyan tree to describe the material world and reveals Himself as the Supreme Being (Purushottama)."
  },
  {
    id: 16,
    chapter_number: 16,
    name_sanskrit: "Daivasura Sampad Vibhaga Yoga",
    name_english: "The Yoga of the Division between the Divine and the Demoniacal",
    name_meaning: "The Divine and Demoniac Natures",
    verses_count: 24,
    summary: "Krishna details the divine qualities that lead to liberation and the demoniac qualities that lead to bondage and suffering."
  },
  {
    id: 17,
    chapter_number: 17,
    name_sanskrit: "Sraddhatraya Vibhaga Yoga",
    name_english: "The Yoga of the Division of the Threefold Faith",
    name_meaning: "The Divisions of Faith",
    verses_count: 28,
    summary: "Krishna explains the three types of faith, food, sacrifices, austerities, and charity based on the three modes of material nature."
  },
  {
    id: 18,
    chapter_number: 18,
    name_sanskrit: "Moksa Sanyasa Yoga",
    name_english: "The Yoga of Liberation by Renunciation",
    name_meaning: "Conclusion: The Perfection of Renunciation",
    verses_count: 78,
    summary: "Krishna summarizes the entire teachings of the Gita, emphasizing ultimate surrender to Him as the path to supreme liberation."
  }
];

export const featuredShlokas: Shloka[] = [
  {
    id: "2-47",
    chapter: 2,
    verse: 47,
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥",
    transliteration: "karmaṇy-evādhikāras te mā phaleṣhu kadāchana\nmā karma-phala-hetur bhūr mā te saṅgo ’stvakarmani",
    translation: "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself to be the cause of the results of your activities, nor be attached to inaction.",
    meaning: "The core principle of Karma Yoga. We should focus on our duties without being obsessed with success or failure. Detachment from results brings peace."
  },
  {
    id: "4-7",
    chapter: 4,
    verse: 7,
    sanskrit: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत ।\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् ॥",
    transliteration: "yadā yadā hi dharmasya glānir bhavati bhārata\nabhyutthānam adharmasya tadātmānaṁ sṛijāmyaham",
    translation: "Whenever there is a decline in righteousness and an increase in unrighteousness, O Arjuna, at that time I manifest myself on earth.",
    meaning: "The promise of Divine intervention. God incarnates to restore balance, protect the good, and establish Dharma when evil prevails."
  },
  {
    id: "18-66",
    chapter: 18,
    verse: 66,
    sanskrit: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज ।\nअहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः ॥",
    transliteration: "sarva-dharmān parityajya mām ekaṁ śharaṇaṁ vraja\nahaṁ tvāṁ sarva-pāpebhyo mokṣhayiṣhyāmi mā śhuchaḥ",
    translation: "Abandon all varieties of dharmas and simply surrender unto me alone. I shall liberate you from all sinful reactions; do not fear.",
    meaning: "The ultimate teaching of Bhakti Yoga. Complete surrender to the Divine is the supreme path to liberation and peace, releasing one from all worldly anxieties."
  }
];
