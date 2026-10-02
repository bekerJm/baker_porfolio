export type Language = 'en' | 'ar'
export type Bilingual = { en: string; ar: string }
export type VideoCategory = 'recitation' | 'competition'

export interface VideoItem {
  id: string
  category: VideoCategory
  title: Bilingual
  description: Bilingual
  src: string
  poster?: string
  available?: boolean
  tag: string
  achievement?: Bilingual
}

export interface GalleryItem {
  id: string
  src: string
  alt: Bilingual
  category: Bilingual
  available?: boolean
}

export interface CertificateItem {
  id: string
  image: string
  title: Bilingual
  institution?: Bilingual
  year?: string
}

const placeholder = (en: string, ar: string): Bilingual => ({ en, ar })

export const profile = {
  name: placeholder('Baker Jemai', 'باقر الجميعي'),
  shortName: placeholder('Baker', 'باقر'),
  title: placeholder('Hafiz of the Holy Quran · Quran Reciter · Taraweeh & Tahajjud Imam · Quran Teacher', 'حافظ للقرآن الكريم · قارئ قرآن · إمام تراويح وتهجد · معلّم للقرآن'),
  location: placeholder('Tunisia', 'تونس'),
  intro: placeholder('I am Baker Jemai, a Tunisian 21 years old Hafiz of the Holy Quran, Quran reciter, and Taraweeh & Tahajjud Imam, with more than eight years of experience in leading Taraweeh prayer and experience in teaching the Quran to children, young students, and adults. I have also participated in Quran and Adhan competitions at the local, regional, national, and international levels.', 'أنا باقر الجميعي، 21 سنة، حافظ تونسي للقرآن الكريم، وقارئ للقرآن، وإمام لصلاة التراويح والتهجد، أملك أكثر من ثماني سنوات من الخبرة في إمامة صلاة التراويح، إلى جانب خبرة في تعليم القرآن للأطفال والناشئة والكبار. كما شاركت في مسابقات قرآنية ومسابقات الأذان على المستوى المحلي والجهوي والوطني والدولي.'),
  bio: placeholder('My journey with the Holy Quran has been shaped by memorization, recitation, teaching, and serving the community through prayer. As a Hafiz of the Holy Quran from Tunisia, I have been leading Taraweeh prayer for more than eight years and have regular experience leading Tahajjud prayers in mosques in Bizerte. Alongside my experience as an Imam, I have taught Quran to children from around 5 to 8 years old, students between 10 and 15 years old, as well as adults. My Quranic journey has also included participation in local, regional, and national Quran memorization competitions in Tunisia, where I achieved good placements. Among my most notable achievements are winning first place in the National Adhan Competition in Tunisia and achieving fourth place in the 18th Edition of the Mohammed VI International Quran Prize — Tajweed Category. Through this portfolio, I aim to present my Quran recitation, experience in Imamat and teaching, and my participation in Quranic competitions. I am open to opportunities to serve as a Guest Qari, Taraweeh or Tahajjud Imam, or Quran teacher for Ramadan programs and Islamic events.', 'كانت رحلتي مع القرآن الكريم قائمة على الحفظ والتلاوة والتعليم وخدمة الناس من خلال الإمامة والصلاة. أنا حافظ للقرآن الكريم من تونس، ولدي أكثر من ثماني سنوات من الخبرة في إمامة صلاة التراويح، إلى جانب خبرة منتظمة في إمامة صلاة التهجد في جوامع ببنزرت. كما أملك خبرة في تعليم القرآن الكريم للأطفال من حوالي 5 إلى 8 سنوات، وللناشئة من 10 إلى 15 سنة، وكذلك للكبار. وشملت مسيرتي القرآنية المشاركة في مسابقات محلية وجهوية ووطنية في حفظ القرآن الكريم في تونس، حيث حققت مراكز جيدة. ومن أبرز إنجازاتي حصولي على المركز الأول في المسابقة الوطنية للأذان في تونس، والمركز الرابع في الدورة الثامنة عشرة من جائزة محمد السادس الدولية للقرآن الكريم — صنف التجويد. من خلال هذا الموقع، أقدّم نماذج من تلاوتي، وخبرتي في الإمامة وتعليم القرآن، ومشاركتي في المسابقات القرآنية. كما أرحب بالفرص التي تتيح لي خدمة كتاب الله من خلال إمامة التراويح أو التهجد، أو المشاركة كقارئ ضيف، أو تعليم القرآن الكريم ضمن برامج رمضان والفعاليات الإسلامية.'),
  contactMessage: placeholder('I would be pleased to connect with mosques, Islamic centers, and Quranic institutions interested in inviting me for Taraweeh, Tahajjud, Quran recitation, or Quran teaching programs. I am also open to opportunities to serve as a Guest Qari during Ramadan and to participate in Quranic and Islamic events.', 'يسعدني التواصل مع المساجد والمراكز الإسلامية والمؤسسات القرآنية الراغبة في دعوتي لإمامة التراويح أو التهجد، أو للمشاركة في برامج تلاوة وتعليم القرآن الكريم. كما أرحب بفرص المشاركة كقارئ ضيف خلال شهر رمضان والمشاركة في الفعاليات القرآنية والإسلامية.'),
  navigation: [
    { id: 'home', label: placeholder('Home', 'الرئيسية') }, { id: 'about', label: placeholder('About', 'من أنا') },
    { id: 'recitation', label: placeholder('Recitation', 'التلاوة') }, { id: 'imamat', label: placeholder('Imama', 'الإمامة') },
    { id: 'teaching', label: placeholder('Teaching', 'تعليم القرآن') }, { id: 'achievements', label: placeholder('Achievements', 'الإنجازات') },
    { id: 'media', label: placeholder('Media', 'الوسائط') }, { id: 'contact', label: placeholder('Contact', 'التواصل') },
  ],
  imamat: {
    taraweeh: placeholder('More than 8 years of experience leading Taraweeh prayer in Tunisia.', 'أكثر من 8 سنوات من الخبرة في إمامة صلاة التراويح في تونس.'),
    tahajjud: placeholder('Regular experience leading Tahajjud prayer in mosques in Bizerte, Tunisia.', 'خبرة منتظمة في إمامة صلاة التهجد في جوامع ببنزرت، تونس.'),
  },
  teaching: [
    { id: 'children', age: placeholder('5—8', '٥—٨'), title: placeholder('Quran Learning for Young Children', 'تعليم القرآن للأطفال الصغار'),description: placeholder(
  'Teaching the foundations of Quran reading, memorization, and correct recitation in a patient and age-appropriate way.',
  'تعليم أساسيات قراءة القرآن وحفظه وتلاوته الصحيحة بأسلوب مناسب لأعمار الأطفال وبطريقة هادئة ومتدرجة.'
) },
    { id: 'students', age: placeholder('10—15', '١٠—١٥'), title: placeholder('Quran Learning for Students Aged 10–15', 'تعليم القرآن للناشئة من 10 إلى 15 سنة'),description: placeholder(
  'Supporting young students in Quran memorization, recitation, and strengthening their connection with the Quran.',
  'مساعدة الناشئة على حفظ القرآن وتلاوته، مع تعزيز صلتهم بكتاب الله ومتابعة تقدمهم في التعلم.'
) },
    { id: 'adults', age: placeholder('ADULTS', 'الكبار'), title: placeholder('Quran Learning for Adults', 'تعليم القرآن للكبار'), description: placeholder(
  'Quran learning for adults, with a focus on improving recitation, memorization, and understanding of proper reading.',
  'تعليم القرآن للكبار مع التركيز على تحسين التلاوة والحفظ وإتقان القراءة الصحيحة.'
)},
  ],
recitations: [
  {
    id: 'tartil',
    category: 'recitation',
    title: placeholder(
      'Tartil Recitation',
      'تلاوة بالترتيل'
    ),
    description: placeholder(
      'A selected Quran recitation in Tartil style.',
      'تلاوة مختارة للقرآن الكريم بأسلوب الترتيل.'
    ),
    src: '/videos/tartil.mp4',
    poster: '/images/tartil-poster.jpg',
    available: true,
    tag: '01'
  },

  {
    id: 'tajweed',
    category: 'recitation',
    title: placeholder(
      'Tajweed Recitation',
      'تلاوة بالتجويد'
    ),
    description: placeholder(
      'A selected recitation showcasing Tajweed',
      'تلاوة مختارة تُبرز أحكام التجويد.'
    ),
    src: '/videos/tajweed.mp4',
    poster: '/images/tajweed-poster.jpg',
    available: true,
    tag: '02'
  },

  {
    id: 'taraweeh',
    category: 'recitation',
    title: placeholder(
      'Taraweeh Recitation',
      'تلاوة التراويح'
    ),
    description: placeholder(
      'A recording from Taraweeh prayer led in Tunisia.',
      'تسجيل من صلاة التراويح أثناء إمامتي للصلاة في تونس.'
    ),
    src: '/videos/taraweeh.mp4',
    poster: '/images/taraweeh-poster.png',
    available: true,
    tag: '03'
  },

  {
    id: 'adhan-competition',
    category: 'competition',
    title: placeholder(
      'National Adhan Competition',
      'المسابقة الوطنية للأذان'
    ),
    description: placeholder(
      'A selected excerpt from my participation in the National Adhan Competition in Tunisia, where I achieved first place.',
      'مقطع من مشاركتي في المسابقة الوطنية للأذان في تونس، حيث تحصلت على المركز الأول.'
    ),
    src: '/videos/adhan.mp4',
    poster: '/images/adhan-poster.png',
    available: true,
    tag: '04',
    achievement: placeholder(
      '1st Place — National Adhan Competition, Tunisia',
      'المركز الأول — المسابقة الوطنية للأذان في تونس'
    )
  },

  {
    id: 'international-tajweed',
    category: 'competition',
    title: placeholder(
      '18th Edition of the Mohammed VI International Quran Prize — Tajweed Category',
      'الدورة الثامنة عشرة من جائزة محمد السادس الدولية للقرآن الكريم — صنف التجويد'
    ),
    description: placeholder(
      'A selected excerpt from my participation in the 18th Edition of the Mohammed VI International Quran Prize in the Tajweed category.',
      'مقطع من مشاركتي في الدورة الثامنة عشرة من جائزة محمد السادس الدولية للقرآن الكريم في صنف التجويد.'
    ),
    src: '/videos/competition.mp4',
    poster: '/images/competition-poster.png',
    available: true,
    tag: '05',
    achievement: placeholder(
      '4th Place — Tajweed Category',
      'المركز الرابع — صنف التجويد'
    )
  }
] satisfies VideoItem[],
achievements: [
  {
    id: 'national-adhan',
    title: placeholder(
      'National Adhan Competition, Tunisia',
      'المسابقة الوطنية للأذان في تونس'
    ),
    result: placeholder(
      '1st Place',
      'المركز الأول'
    ),
    description: placeholder(
      'Achieved first place in the National Adhan Competition in Tunisia.',
      'تحصلت على المركز الأول في المسابقة الوطنية للأذان في تونس.'
    ),
    videoId: 'adhan-competition'
  },

  {
    id: 'international-tajweed',
    title: placeholder(
      '18th Edition of the Mohammed VI International Quran Prize — Tajweed Category',
      'الدورة الثامنة عشرة من جائزة محمد السادس الدولية للقرآن الكريم — صنف التجويد'
    ),
    result: placeholder(
      '4th Place',
      'المركز الرابع'
    ),
    description: placeholder(
      'Achieved fourth place in the Tajweed category of the 18th Edition of the Mohammed VI International Quran Prize.',
      'تحصلت على المركز الرابع في صنف التجويد ضمن الدورة الثامنة عشرة من جائزة محمد السادس الدولية للقرآن الكريم.'
    ),
    videoId: 'international-tajweed'
  },

  {
    id: 'general',
    title: placeholder(
      'Quran Memorization Competitions',
      'مسابقات حفظ القرآن الكريم'
    ),
    result: placeholder(
      'Local, regional and national participation',
      'مشاركة محلية وجهوية ووطنية'
    ),
    description: placeholder(
      'Participated in local, regional and national Quran memorization competitions in Tunisia, achieving good placements.',
      'شاركت في مسابقات محلية وجهوية ووطنية في حفظ القرآن الكريم في تونس، وحققت مراكز جيدة.'
    )
  }
],
gallery: [
  {
    id: 'profile',
    src: '/images/profile.png',
    alt: placeholder(
      'Baker Jemai profile portrait',
      'صورة باقر الجميعي الشخصية'
    ),
    category: placeholder(
      'Profile',
      'صورة شخصية'
    ),
    available: true
  },
] satisfies GalleryItem[],
 certificates: [
  {
    id: 'mohammed-vi',
    image: '/images/certificate.jpg',
    title: placeholder(
      '18th Edition of the Mohammed VI International Quran Prize — Tajweed Category',
      'الدورة الثامنة عشرة من جائزة محمد السادس الدولية للقرآن الكريم — صنف التجويد'
    ),
    institution: placeholder(
      'Ministry of Endowments and Islamic Affairs — Morocco',
      'وزارة الأوقاف و الشؤون الإسلامية — المغرب'
    ),
  },
] satisfies CertificateItem[],
  contact: { email: 'bekerjemai45@gmail.com', whatsapp: '+216 54901177', instagram: 'https://www.instagram.com/bakerjemai?stkn=MWhjbDZzcWZrbzNvZA==' },
  seo: {
    title: placeholder('Baker Jemai | Hafiz, Quran Reciter & Taraweeh Imam', 'باقر جميعي | حافظ قرآن وقارئ وإمام تراويح'),
    description: placeholder('A bilingual profile for Baker Jemai, Tunisian Hafiz, Quran reciter, Imam, and teacher.', 'الملف التعريفي لباقر جميعي، حافظ قرآن وقارئ وإمام ومعلّم للقرآن من تونس.'),
  },
} as const

export const t = (value: Bilingual, language: Language) => value[language]
export const whatsappUrl = (number: string) => `https://wa.me/${number.replace(/\D/g, '')}`
export const isPlaceholder = (value: string) => value.startsWith('[')
export type Profile = typeof profile
