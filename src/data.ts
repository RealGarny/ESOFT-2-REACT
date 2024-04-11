import { sectionItem } from "./interfaces";

const cardSections:sectionItem[] = [
    {
        header: "Мои компетенции",
        items: [{
        iconPath: "figma.svg",
        title: "Figma",
        description: "Без неё верстать сложна"
        },
        {
            iconPath: "js.svg",
            title: "JavaScript",
            description: "удобный, но бестолковый"
        },
        {
            iconPath: "c++.svg",
            title: "C++",
            description: "Дебаг консоль, замаскированная под язык"
        },
        {
            iconPath: "python.svg",
            title: "Python",
            description: "всё же программировать может каждый?"
        }]
    },
    {
        header: "Мои проекты",
        items: [{
            iconPath: "",
            title: "Blocky",
            description: "Сапер, сделанный на React"
        },
        {
            iconPath: "",
            title: "Chronos",
            description: "Музыкальный Discord бот, проигрывающий видео с Youtube"
        },
        {
            iconPath: "",
            title: "C++",
            description: "Дебаг консоль, замаскированная под язык"
        }]
    },
    {
        header: "Хотел бы изучить",
        items: [{
            iconPath: "",
            title: "Асинхронное программирование",
            description: "Теория вроде как мне понятна, но на практике получается не очень. Надо практиковаться"
        },
        {
            iconPath: "",
            title: "Эффективную работу с базами данных",
            description: "Всегда интересно, как можно оптимизировать какой-либо процесс."
        },
        {
            iconPath: "",
            title: "Бэкенд разработку",
            description: "Хоть опыт бэкенд разработки у меня есть, мне не хватает более глубоких познаний в данной сфере"
        },
        {
            iconPath: "",
            title: "State Hooks",
            description: "Как лучше пользоваться, плюсы и минусы разных подходов"
        },
        {
            iconPath: "",
            title: "State менеджеры",
            description: "Принцип работы, использование."
        },
        {
            iconPath: "",
            title: "Работа с данными",
            description: "RestAPI, защита передачи данных, хорошие практики и т.д."
        },
        {
            iconPath: "",
            title: "TypeScript",
            description: ""
        },
        {
            iconPath: "",
            title: "Docker",
            description: ""
        },
        {
            iconPath: "",
            title: "SampleText",
            description: ""
        },]
    }
]

export default cardSections;