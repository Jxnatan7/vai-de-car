import { Dispatch, SetStateAction } from "react"

export type LayoutContextProps = {
    headerTitle?: string,
    backButton?: boolean,
    isMap?: boolean,
    aboutUser?: boolean,
    brand?: boolean,
    setAboutUser: Dispatch<SetStateAction<boolean | undefined>>,
    setBackButton: Dispatch<SetStateAction<boolean | undefined>>,
    setBrand: Dispatch<SetStateAction<boolean | undefined>>,
    setHeaderTitle: Dispatch<SetStateAction<string | undefined>>,
    setIsMap: Dispatch<SetStateAction<boolean | undefined>>
    resetContext: () => void,
}