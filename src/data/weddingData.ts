import { WeddingEvent, FamilyBlessing, GuestBlessing } from '../types/wedding';

export const coupleDetails = {
  groom: {
    name: 'Surinder Singh Purba',
    shortName: 'Surinder',
    father: 'Late S. Balwinder Singh Purba',
    mother: 'Sdm. Tarsem Kaur',
    family: 'Purba Family',
  },
  bride: {
    name: 'Harpreet Kaur Bedi',
    shortName: 'Harpreet',
    father: 'S. Shingara Singh Bedi',
    mother: 'Sdm. Kulvir Kaur',
    family: 'Bedi Family',
  },
  weddingDate: '22 November 2026',
  targetIsoDate: '2026-11-22T09:00:00+05:30',
  primaryLocation: 'Mandi Dabwali',
  hostContact: {
    name: 'Rajinder Purba',
    phone: '8360045011',
    formattedPhone: '+91 83600 45011',
    whatsappUrl: 'https://wa.me/918360045011',
  },
  sponsors: ['Ekam Garments', 'New Ekam Garments'],
};

export const weddingEvents: WeddingEvent[] = [

  {
    id: 'anand-karaj',
    title: 'Anand Karaj',
    punjabiTitle: 'ਅਨੰਦ ਕਾਰਜ (ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦੀ ਹਜ਼ੂਰੀ)',
    date: '22 November 2026',
    day: 'Sunday',
    time: '9:00 AM Barat Arrival | 10:00 AM Anand Karaj',
    venueName: 'Gurudwara Sahib Gosayiana, Patshahi Dasvi Pathrala',
    venueAddress: 'Gurudwara Sahib Gosayiana, Patshahi Dasvi, Pathrala, Punjab',
    description:
      'The sacred wedding ceremony where Surinder and Harpreet take the four auspicious Lavanan in the holy presence of Sri Guru Granth Sahib Ji. Guru Ka Langar will be served followed by the ceremony.',
    dressCode: 'Formal Modest Traditional Wear (Strictly cover heads; avoid black/white)',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA3T-bvZNfWQdZycOOU8Ufu5aiX4rUscyUwM7zKJ8gltPq38b2eJWAcDfALLXtNMLgU2BfTAlsWiKBPtNAInCPnunaLdUrGRlzHZ5cuUoL6pxrE25IZIHC6IvlVNZlqSuoUGcfaycVKuPlX-apD3clUfWkf1dd9OdUnl_PK4mrSyXlAxvb8slddX7DV4i7doCSgGHQtO1NrXcUMFQtZCwESsIkFtiU12ET8RPTbU68',
    mapQuery: 'Gurudwara Sahib Gosayiana, Patshahi Dasvi Pathrala, Punjab',
    badge: 'Sacred Auspicious Ceremony',
  },
  {
    id: 'royal-reception',
    title: 'Grand Wedding Palace Reception',
    punjabiTitle: 'ਸ਼ਾਹੀ ਰਿਸੈਪਸ਼ਨ ਪਾਰਟੀ',
    date: '22 November 2026',
    day: 'Sunday',
    time: '12:30 PM Onwards',
    venueName: 'Gill Resorts Jassi Bagwali',
    venueAddress: 'Gill Resorts, Jassi Bagwali, Bathinda Highway, Punjab',
    description:
      'Join both families for a grand royal celebration, gourmet multi-cuisine banquet feast, celebratory cake cutting, and congratulations at Gill Resorts Jassi Bagwali.',
    dressCode: 'Royal Punjabi Traditional / Elegant Formal Evening Attire',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBXEg2v84DAWXrC8g_aOboFPtPwfnn1-MzGFi2m6HpgypPtT9KMx_i49HkRYSM3bZPLKw2DDbX6N7o9PObY54zqTxGPuqod5Y-_EonqzuTRBK89I5eZVkQ82xxCAr9NgZ0u28qJI2RKvyy3FZpIK42u21_KdCKTCQl_RYXjbZ5Ubdmrp8PW_q6hELoUXfxdmtA4hOep-NYi7nWtUrN84BYGCOCJrg3aYV_N_zd8Rpw',
    mapQuery: 'Gill Resorts Jassi Bagwali, Bathinda, Punjab',
    badge: 'Royal Grand Banquet',
  },
];

export const familyBlessings: FamilyBlessing[] = [
  {
    role: 'Grand Parents',
    names: 'Late S. Hardev Singh Purba & Sdm. Surjit Kaur Purba',
    relationText: 'With divine blessings from the heavens & heartfelt love',
    note: 'ਵਾਹਿਗੁਰੂ ਜੀ ਦੀ ਅਰਦਾਸ ਹੈ ਕਿ ਸੁਰਿੰਦਰ ਅਤੇ ਹਰਪ੍ਰੀਤ ਨੂੰ ਅਸੀਮ ਕ੍ਰਿਪਾ, ਲੰਮਾ ਜੀਵਨ, ਅਰਾਮ-ਕ੍ਰਮ, ਧਨ-ਦੌਲਤ ਅਤੇ ਪ੍ਰੇਮ ਨਾਲ ਬਖਸ਼ੇ, ਜਿਵੇਂ ਉਹ ਇਸ ਪਵਿੱਤਰ ਯਾਤਰਾ ਵਿੱਚ ਦੋਹਾਂ ਜਾਨਾਂ ਨੂੰ ਇਕ ਰੂਹ ਵਿੱਚ ਮਿਲਾਉਣ ਲਈ ਅੱਗੇ ਵਧ ਰਹੇ ਹਨ।',
    iconType: 'grandparents',
  },
  {
    role: 'Bhabhi & Brother',
    names: 'Pooja & Rajinder Purba',
    relationText: 'Loving Brother & Bhabhi',
    note: 'ਪਿਆਰੀ ਹਰਪ੍ਰੀਤ, ਸਾਡੀ ਪਰਿਵਾਰ ਵਿੱਚ ਸੁਆਗਤ ਹੈ! ਸਾਡੇ ਪਿਆਰੇ ਭਰਾ ਸੁਰਿੰਦਰ ਅਤੇ ਪਿਆਰੀ ਭਾਬੀ ਦੇ ਲਈ ਅਨੰਤ ਖੁਸ਼ੀਆਂ, ਹੱਸੀਆਂ, ਪਰਸਪਰ ਭਰੋਸੇ ਅਤੇ ਸਹਿਯੋਗ ਦੇ ਨਾਲ ਲੰਬੀ ਉਮਰਾਂ ਦੀ ਅਰਦਾਸ ਕਰਦੇ ਹਾਂ।',
    iconType: 'siblings',
  },
  {
    role: 'Sister & Jiju',
    names: 'Amandeep Kaur & Gurpreet Singh',
    relationText: 'Loving Sister & Brother-in-Law',
    note: 'ਸਾਡੇ ਵੀਰ ਦੀ ਜ਼ਿੰਦਗੀ ਦੇ ਇਸ ਨਵੇਂ ਤੇ ਸੋਹਣੇ ਸਫ਼ਰ ਲਈ ਦਿਲੋਂ ਬਹੁਤ-ਬਹੁਤ ਵਧਾਈਆਂ! ❤️ ਵਾਹਿਗੁਰੂ ਜੀ ਹਮੇਸ਼ਾ ਤੁਹਾਡੇ ਘਰ ਵਿੱਚ ਖੁਸ਼ੀਆਂ, ਪਿਆਰ ਤੇ ਹਾਸੇ-ਖੇੜੇ ਬਣਾਈ ਰੱਖਣ। ਤੁਹਾਡੀ ਜੋੜੀ ਸਦਾ ਸਲਾਮਤ ਰਹੇ ਤੇ ਵਾਹਿਗੁਰੂ ਜੀ ਆਪਣੀ ਮਿਹਰ ਭਰਿਆ ਹੱਥ ਹਮੇਸ਼ਾ ਤੁਹਾਡੇ ਸਿਰ ’ਤੇ ਰੱਖਣ। 🙏🏻💐',
    iconType: 'sister',
  },
  {
    role: 'Nieces & Nephew',
    names: 'Ekam, Sonavjot, Girisha',
    relationText: 'Cherished Nieces & Nephew',
    note: 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਜੀ! 👶🏻💕\nਸਾਡਾ ਚਾਚੂ-ਮਾਮੂ ਜੀ ਦਾ ਵਿਆਹ ਹੋ ਰਿਹਾ ਹੈ,\nਤੁਸੀਂ ਜ਼ਰੂਰ ਆਉਣਾ ਜੀ!',
    iconType: 'kids',
  },
];

export const initialGuestBlessings: GuestBlessing[] = [
  {
    id: '1',
    name: 'S. Sukhdev Singh & Family',
    attendingEvents: 'All Auspicious Events',
    guestCount: 4,
    message: 'Warmest congratulations to the Purba and Bedi families! May Waheguru Ji bless the lovely couple Surinder & Harpreet with infinite happiness and harmony.',
    date: 'Just now',
  },
  {
    id: '2',
    name: 'Manpreet Singh (Bedi Relatives)',
    attendingEvents: 'Anand Karaj & Reception',
    guestCount: 2,
    message: 'Lakh Lakh Vadhaiyan! Harpreet and Surinder look like a match made in heaven. Looking forward to the sacred Anand Karaj at Gurudwara Sahib Gosayiana.',
    date: '2 hours ago',
  },
  {
    id: '3',
    name: 'Gurjot & Simran',
    attendingEvents: 'Jaggo & Reception',
    guestCount: 2,
    message: 'Can’t wait for the Jaggo and Party at Regal Food! Congratulations to Rajinder veere and the entire Purba family!',
    date: 'Yesterday',
  },
];

