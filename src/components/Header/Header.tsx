import React, { useState } from 'react';
import {
  Container,
  Group,
  Text,
  Menu,
  Avatar,
  MediaQuery,
  Burger,
  Button,
} from '@mantine/core';
import { useAuth } from '../AuthProvider/AuthProvider';
import useStyles from './Header.style';

const Header: React.FC = () => {
  const { logout } = useAuth();
  const [menuOpened, setMenuOpened] = useState(false);
  const { classes } = useStyles();

  const handleLogout = () => {
    logout();
  };

  return (
    <header className={classes.header}>
      <Container size="xl" py="sm">
        <Group position="apart" align="center">
          <Text className={classes.brand}>SpaceX Explorer</Text>

          <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            <Group spacing="md">
              <Text component="a" href="/resources" className={classes.navLink}>
                Home
              </Text>
              <Text component="a" href="/ships" className={classes.navLink}>
                Ships
              </Text>
              <Text component="a" href="/about" className={classes.navLink}>
                About
              </Text>
              <Menu shadow="md" width={200}>
                <Menu.Target>
                  <Avatar
                    radius="xl"
                    src="https://via.placeholder.com/40"
                    alt="User Profile"
                  />
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Label>Account</Menu.Label>
                  <Menu.Item>Profile</Menu.Item>
                  <Menu.Item>Settings</Menu.Item>
                  <Menu.Divider />
                  <Menu.Item color="red" onClick={handleLogout}>
                    Logout
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Group>
          </MediaQuery>

          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Burger
              opened={menuOpened}
              onClick={() => setMenuOpened((prev) => !prev)}
              size="sm"
              aria-label="Toggle navigation"
            />
          </MediaQuery>
        </Group>

        {menuOpened && (
          <div className={classes.mobileMenu}>
            <Group spacing="xs">
              <Text component="a" href="/resources" className={classes.mobileNavItem}>
                Home
              </Text>
              <Text component="a" href="/ships" className={classes.mobileNavItem}>
                Ships
              </Text>
              <Text component="a" href="/about" className={classes.mobileNavItem}>
                About
              </Text>
              <Button color="red" size="xs" onClick={handleLogout}>
                Logout
              </Button>
            </Group>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
