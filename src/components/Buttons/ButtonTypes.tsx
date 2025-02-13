export type Button = {
    text: string,
    disabled?: boolean,
    isLoading?: boolean
    onClick: VoidFunction,
    isActive?: boolean,
}

type redirectButton = {
    redirectTo: string
}

export type HeaderButtonTypes = Button & redirectButton

