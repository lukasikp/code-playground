import React from "react";
import { AppShell, MantineProvider, ColorSchemeProvider } from "@mantine/core";
import { MODE } from "ui/models/appShell";

import { useAppShell } from "./index";
import { TopBar } from "ui/TopBar";

interface ShellProps {
  title: string;
  children: React.ReactNode;
}

export const Shell: React.FunctionComponent<ShellProps> = ({
  title,
  children,
}) => {
  const { mode, setMode } = useAppShell();

  const toggleColorScheme = (value?: MODE) => {
    setMode(value ?? mode === MODE.DARK ? MODE.LIGHT : MODE.DARK);
  };

  return (
    <ColorSchemeProvider
      colorScheme={mode}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme: mode }}
        withGlobalStyles
        withNormalizeCSS
      >
        <AppShell padding="md" header={<TopBar title={title} />}>
          {children}
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
