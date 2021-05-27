//Definition
const NOTES = [
    // FLAT
    ['C', 'D♭', 'D', 'E♭', 'E', 'F', 'G♭', 'G', 'A♭', 'A', 'B♭', 'B'],
    // SHARP
    ['C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'A♯', 'B']
]

const SCALES = [
    // MAJOR
    [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
    // NATURAL_MINOR
    [1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0],
    // PENTA_TONIC_MAJOR
    [1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0],
    // PENTA_TONIC_MINOR
    [1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0]
]

//Default
const DEFAULT_TUNING = [4, 11, 7, 2, 9, 4];

// const DEFAULT_ROOT = 0;

//Options
export const tuning = DEFAULT_TUNING;
export const frets = 24;

export const notes = NOTES;
export const scales = SCALES;
// export const root = DEFAULT_ROOT;