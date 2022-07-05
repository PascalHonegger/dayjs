// German [de]

import type { Locale } from '.'

const locale: Locale = {
  name: 'de',
  weekdays: [
    'Sonntag',
    'Montag',
    'Dienstag',
    'Mittwoch',
    'Donnerstag',
    'Freitag',
    'Samstag',
  ],
  weekdaysShort: ['So.', 'Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.'],
  weekdaysMin: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
  months: [
    'Januar',
    'Februar',
    'März',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Dezember',
  ],
  monthsShort: [
    'Jan.',
    'Feb.',
    'März',
    'Apr.',
    'Mai',
    'Juni',
    'Juli',
    'Aug.',
    'Sept.',
    'Okt.',
    'Nov.',
    'Dez.',
  ],
  ordinal: (n) => `${n}.`,
  weekStart: 1,
  yearStart: 4,
  formats: {
    LTS: 'HH:mm:ss',
    LT: 'HH:mm',
    L: 'DD.MM.YYYY',
    LL: 'D. MMMM YYYY',
    LLL: 'D. MMMM YYYY HH:mm',
    LLLL: 'dddd, D. MMMM YYYY HH:mm',
  },
  /* TODO
  relativeTime: {
    s: 'ein paar Sekunden',
    m: ['eine Minute', 'einer Minute'],
    mm: '%d Minuten',
    h: ['eine Stunde', 'einer Stunde'],
    hh: '%d Stunden',
    d: ['ein Tag', 'einem Tag'],
    dd: ['%d Tage', '%d Tagen'],
    M: ['ein Monat', 'einem Monat'],
    MM: ['%d Monate', '%d Monaten'],
    y: ['ein Jahr', 'einem Jahr'],
    yy: ['%d Jahre', '%d Jahren']
  }
  */
}

export default locale
