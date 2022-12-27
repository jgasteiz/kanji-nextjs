export type Kanji = {
    kanji: string
    meaning: string
    examples: string
    kun_yomi: string
    on_yomi: string
}

export type Group = {
    index: number
    kanjiList: Kanji[]
}

export type Level = {
    name: string
    groups: Group[]
}