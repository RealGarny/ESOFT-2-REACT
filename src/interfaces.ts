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
}