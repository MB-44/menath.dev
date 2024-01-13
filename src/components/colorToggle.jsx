import { ActionIcon, Group, useMantineColorScheme, createStyles } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
    darkmodebutton: {
        '&:hover': {
            transform: 'rotate(180deg)',
            transition: 'transform 0.3s ease-in-out',
        },

        '&:active': {
            transform: 'rotate(0deg)',
            transition: 'transform 0.3s ease-in-out',
        },
    },
}))

export default function ColorToggle() {
    const { colorScheme, changeColorScheme } = useMantineColorScheme(); 
    const { classes } = useStyles();

    return (
        <Group position="center">
            <ActionIcon 
                radius="xl" 
                onClick={() => changeColorScheme(colorScheme === 'dark' ? 'light':'dark')}
                aria-label="dark/light mode toggle"
                size={37}
                sx={{
                    backgroundColor: 
                        colorScheme === "dark" ? "dark[6]" : "gray[0]",
                    color:
                        colorScheme === "dark" ? "yellow[4]" : "blue[6]",
                }} 
                >
                {colorScheme === 'dark' ? (
                    <IconSun className={classes.darkmodebutton} size={24} stroke={2.5} />
              ) : (
                <IconMoonStars className={classes.darkmodebutton} size={24} stroke={2.5} />
                )}
            </ActionIcon>
        </Group>
    );
}
