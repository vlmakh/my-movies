export type StateType = {
    theme: string,
    lang: string,
    lib: string[],
    album: string[],
}

export interface IActor {
    name: string,
    character: string,
    profile_path: string,
}