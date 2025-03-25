import React from "react"

export interface Button {
    text: string,
    disabled?: boolean,
    isLoading?: boolean
    onClick?: VoidFunction,
    isActive?: boolean,
    children?: React.ReactNode
}

interface redirectButton {
    redirectTo: string
}

export interface HeaderButtonTypes extends Button, redirectButton { }
