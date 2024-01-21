import { Greycliff } from 'next/font/google';

const MainFont = Greycliff({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-greycliff",
    weight: ["100", "200", "300", "400", "500", "600", "700", "900"]
})

export default MainFont;