import React, { useState } from 'react';
import { ActionIcon, Group } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';

function ColorSchemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleColorScheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <Group position="center">
      <ActionIcon
        radius="xl"
        onClick={toggleColorScheme}
        aria-label="dark/light mode toggle"
        size={37}
        style={{
          backgroundColor: isDarkMode ? '#1E2125' : '#FFFFFF',
          color: isDarkMode ? '#FFCC00' : '#0066CC',
        }}
      >
        {isDarkMode ? (
          <IconSun size={24} stroke={2.5} />
        ) : (
          <IconMoonStars size={24} stroke={2.5} />
        )}
      </ActionIcon>
    </Group>
  );
}

export default ColorSchemeToggle;
