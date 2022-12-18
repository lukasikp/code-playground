import React, { ReactElement, useState } from "react";
import {
  AppShell,
  Header,
  Title,
  Box,
  Button,
  useMantineTheme,
  MantineProvider,
  Space,
  Switch,
  Group,
  useMantineColorScheme,
  ColorSchemeProvider,
  ActionIcon,
  Container,
} from "@mantine/core";
import { MODE } from "ui/models/appShell";
import { IconSun, IconMoonStars } from "@tabler/icons";

import { useAppShell } from "./index";

interface TopBarProps {
  title: string;
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },
};
export const TopBar: React.FunctionComponent<TopBarProps> = ({ title }) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const colors = {
    [MODE.DARK]: {
      accent: theme.colors.violet[8],
    },
    [MODE.LIGHT]: {
      accent: theme.colors.violet[9],
    },
  };
  return (
    <Header height={60} p="xs">
      <Container style={styles.header}>
        <span>PLAYGROUND</span>
        <Title color={colors[theme.colorScheme].accent}>{title}</Title>
        <Group position="center" my="xl">
          <ActionIcon
            onClick={() => toggleColorScheme()}
            size="lg"
            sx={(theme) => ({
              borderWidth: 1,
              borderColor:
                theme.colorScheme === MODE.DARK
                  ? theme.colors.dark[4]
                  : theme.colors.gray[4],
            })}
          >
            {colorScheme === MODE.DARK ? (
              <IconSun size={18} />
            ) : (
              <IconMoonStars size={18} />
            )}
          </ActionIcon>
        </Group>
      </Container>
    </Header>
  );
};
