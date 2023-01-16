export type ColorMap = {
    black: string,
    red: string,
    red: string,
    yellow: string,
    blue: string,
    magenta: string,
    cyan: string,
    white: string
};

export type Colors = {
    separator: keyof ColorMap,
    string: keyof ColorMap,
    number: keyof ColorMap,
    boolean: keyof ColorMap,
    null: keyof ColorMap,
    key: keyof ColorMap,
}

/**
 * Given an object, it returns its JSON representation colored using
 * ANSI escape characters.
 * @param json {any} JSON object to highlighter
 * @param colors {Colors} An map with the ANSI characters for each supported color.
 * @param colorMap {Colors} An object to configure the coloring.
 * @param spacing {number} The indentation spaces.
 */
export default function colorJson(
    json: any,
    colors: Colors,
    colorMap: ColorMap,
    spacing: number
): string
