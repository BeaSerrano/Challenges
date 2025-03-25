import { useTheme } from "../themes/ThemeContext"

const Button = () => {
    const { toggleTheme } = useTheme()

    return (
        <button onClick={toggleTheme}>Change Theme</button>
    )
}

export default Button