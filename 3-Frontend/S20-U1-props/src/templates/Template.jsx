import Footer from "../components/Footer"
import Header from "../components/Header"

const Template = ({ children }) => {
    return (
        <>
            <Header />
                <main>
                    {children}
                    {children}
                </main>
            <Footer />
        </>
    )
}

export default Template
