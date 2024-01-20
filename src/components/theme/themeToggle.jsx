import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import IconSun from "../icons/iconSun"
import IconMoon from "../icons/iconMoon"

const ThemeToggle = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) {
        return null;
    }

    return(
        <div className="fixed bottom-8 right-8">
            <button
                type="button"
                className="w-11 h-11 rounded-full shadow-md inline-flex justify-center items-center focus:outline-none cardTheme"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
                {theme == 'dark' ? <IconMoon/> : <IconSun/>}
            </button>
        </div>
    );
}

export default ThemeToggle;



// import { ActionIcon, Group, useMantineColorScheme, createStyles } from "@mantine/core";
// import { IconSun, IconMoonStars } from "@tabler/icons";

// const useStyles = createStyles((theme) => ({
//     darkmodebutton: {
//         '&:hover': {
//             transform: theme.colorScheme === 'dark' ? 'rotate(180deg)' : 'rotate(0deg)',
//             transition: 'transform 0.3s ease-in-out',
//         },

//         '&:active': {
//             transform: theme.colorScheme === 'dark' ? 'rotate(0deg)' : 'rotate(180deg)',
//             transition: 'transform 0.3s ease-in-out',
//         },
//     },
// }))

// export default function ColorToggle() {
//     const { colorScheme, changeColorScheme } = useMantineColorScheme(); 
//     const { classes } = useStyles();

//     return (
//         <Group position="center">
//             <ActionIcon
//               radius="xl"
//               onClick={() => changeColorScheme()}
//               aria-label="dark/light mode toggle"
//               size={37}
//               sx={(theme) => ({
//                 backgroundColor:
//                     theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
//                 color: 
//                     theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
//               })}>
//                 {colorScheme === 'dark' ? (
//                     <IconSun className={classes.darkmodebutton} size={24} stroke={2.5} />
//                 ): (
//                     <IconMoonStars className={classes.darkmodebutton} size={24} stroke={2.5} />
//                 )}
//             </ActionIcon>
//         </Group>
//     );
// }
