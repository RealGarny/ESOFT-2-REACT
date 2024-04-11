<<<<<<< HEAD
export interface ContainerProps{
    children: React.ReactNode,
    className?: string
=======
import React from "react"

export interface ContainerProps {
    className?: string,
    children: React.ReactNode,
}

export interface cardItem {
    className?: string,
    iconPath: string,
    title: string,
    description: string
}
export interface sectionItem {
  header: string,
  items:cardItem[]
>>>>>>> be5cae7a729dc768c13bf41a15939bd9278787a2
}