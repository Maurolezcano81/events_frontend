export interface Button {
    text: string,
    disabled?: boolean,
    isLoading?: boolean
    onClick: VoidFunction,
    isActive?: boolean,
}

interface redirectButton {
    redirectTo: string
}

export interface HeaderButtonTypes extends Button, redirectButton { }

