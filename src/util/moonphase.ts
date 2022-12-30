// Source: https://gist.github.com/datatypevoid/f4dd1f6439feaa588bb2aaf4f8f4361f#gistcomment-3691909
export {
  EMoonPhase,
  moonIcons,
  moonImage,
  moonPhaseAlt,
  EMoonPhaseName,
  MOON_PHASE_NAMES,
  moonPhase,
}

const { round, trunc: truncate } = Math

enum EMoonPhase {
  New = 0,
  WaxingCrescent,
  QuarterMoon,
  WaxingGibbous,
  Full,
  WaningGibbous,
  LastQuarter,
  WaningCrescent,
  COUNT = 8,
}

const moonIcons: [
  New: string,
  WaxingCrescent: string,
  QuarterMoon: string,
  WaxingGibbous: string,
  Full: string,
  WaningGibbous: string,
  LastQuarter: string,
  WaningCrescent: string
] = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"]

const moonImage: [
  New: string,
  WaxingCrescent: string,
  QuarterMoon: string,
  WaxingGibbous: string,
  Full: string,
  WaningGibbous: string,
  LastQuarter: string,
  WaningCrescent: string
] = [
  "./img/fases/nova.svg",
  "./img/fases/crescente.svg",
  "./img/fases/quarto_crescente.svg",
  "./img/fases/crescente_gibosa.svg",
  "./img/fases/cheia.svg",
  "./img/fases/minguante_gibosa.svg",
  "./img/fases/quarto_minguante.svg",
  "./img/fases/minguante.svg"
]

enum EMoonPhaseName {
  New = "Lua Nova",
  WaxingCrescent = "Lua Crescente",
  QuarterMoon = "Lua Quarto Crescente",
  WaxingGibbous = "Lua Gibosa",
  Full = "Lua Cheia",
  WaningGibbous = "Lua Minguante Gibosa",
  LastQuarter = "Lua Quarto Minguante",
  WaningCrescent = "Lua Minguante",
  COUNT = "COUNT",
}

const MOON_PHASE_NAMES: EMoonPhaseName[] = [
  // Look-up table.
  EMoonPhaseName.New,
  EMoonPhaseName.WaxingCrescent,
  EMoonPhaseName.QuarterMoon,
  EMoonPhaseName.WaxingGibbous,
  EMoonPhaseName.Full,
  EMoonPhaseName.WaningGibbous,
  EMoonPhaseName.LastQuarter,
  EMoonPhaseName.WaningCrescent,
  EMoonPhaseName.COUNT,
]

// Reference: http://individual.utoronto.ca/kalendis/lunar/#FALC
// Also known as a synodic month.
// An average synodic month takes 29 days, 12 hours, 44 minutes, 3 seconds.
const LUNAR_CYCLE = 29.5305882 // 29.53058770576

const DAYS_PER_YEAR = 365.25
const DAYS_PER_MONTH = 30.6

// Number of days since known new moon on `1900-01-01`.
const DAYS_SINCE_NEW_MOON_1900_01_01 = 694039.09

interface IResult {
  name: EMoonPhaseName
  phase: EMoonPhase
  icon: string
  image: string
}

// function hemisphere() {
//   let y = new Date().getFullYear();
//   if (y.getTimezoneOffset() == undefined) return 'S';
//   var jan = -(new Date(y, 0, 1, 0, 0, 0, 0).getTimezoneOffset()),
//       jul = -(new Date(y, 6, 1, 0, 0, 0, 0).getTimezoneOffset()),
//       diff = jan-jul;
//   if (diff> 0) return 'N';
//   //if (diff< 0) return 'S'
//   return 'S';
// }

function moonPhaseAlt(date: Date = new Date()): IResult {
  let year: number = date.getFullYear()
  let month: number = date.getMonth() + 1
  const day: number = date.getDate()
  return moonPhase(year, month, day)
}

// Ported from `http://www.voidware.com/moon_phase.htm`.
function moonPhase(year: number, month: number, day: number): IResult {
  if (month < 3) {
    year--
    month += 12
  }

  month += 1

  let totalDaysElapsed: number =
    DAYS_PER_YEAR * year +
    DAYS_PER_MONTH * month +
    day -
    DAYS_SINCE_NEW_MOON_1900_01_01

  totalDaysElapsed /= LUNAR_CYCLE // Divide by the lunar cycle.

  let phase: number = truncate(totalDaysElapsed)

  /*
    Subtract integer part to leave fractional part of original
    `totalDaysElapsed`.
   */
  totalDaysElapsed -= phase

  // Scale fraction from `0-8`.
  phase = round(totalDaysElapsed * 8)
  if (phase >= 8) phase = 0 // `0` and `8` are the same so turn `8` into `0`.

  if (phase >= EMoonPhase.COUNT || phase < EMoonPhase.New)
    throw new Error(`Invalid moon phase: ${phase}`)

  return { phase, name: MOON_PHASE_NAMES[phase], icon: moonIcons[phase], image: moonImage[phase] }
}
