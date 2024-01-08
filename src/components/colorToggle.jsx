import { IconSun, IconMoonStars, IconMoon } from "@tabler/icons";
import { ActionIcon, Group, useMantineColorScheme, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    dark_mode_bt: {

    }
}))

function ColorToggle() {
    const { classes } = useStyles();
    const { colorScheme, toggleColorScheme } = useMantineColorScheme(); 

    return (
        <Group position="center">
            <ActionIcon 
                radius="xl" 
                onClick={() => toggleColorScheme()}
                aria-label="darl/light mode toggle"
                size={37}
                sx={(theme) => ({
                    backgroundColor: 
                        theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
                    color:
                        theme.colorScheme === "dark" ? theme.colors.yellow[4] : theme.colors.blue[6],
                })} 
                >
                {colorScheme === "dark" ? (
                    <IconSun className={classes.darkmodebutton} size={24} stroke={2.5}/>
              ): (
                <IconMoonStars className={classes.darkmodebutton} size={24} stroke={2.5}/>
                )}
            </ActionIcon>
        </Group>
    );

}

export default ColorToggle();