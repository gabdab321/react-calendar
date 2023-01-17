export type typeVariants = "error" | "warning" | "success"

export interface dateEventItem {
    id: string
    type: typeVariants,
    content: string
}
export type dateItem = dateEventItem[]

export interface datesState {
    [key: string]: dateItem
}