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
import { useLocation, Link } from 'react-router-dom';
import { useAuth } from '../AuthProvider/AuthProvider';
import useStyles from './Header.style';

const Header: React.FC = () => {
  const { logout } = useAuth();
  const [menuOpened, setMenuOpened] = useState(false);
  const { classes } = useStyles();
  const location = useLocation(); 

  const handleLogout = () => {
    logout();
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={classes.header}>
      <Container size="xl" py="sm">
        <Group position="apart" align="center">
          <Text className={classes.brand}>SpaceX Explorer</Text>

          <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            <Group spacing="md">
              <Text
                component={Link}
                to="/resources"
                className={`${classes.navLink} ${isActive('/resources') && classes.activeNavLink}`}
                style={isActive('/resources') ? { pointerEvents: 'none' } : {}}
              >
                Home
              </Text>
              <Text
                component={Link}
                to="/ships"
                className={`${classes.navLink} ${isActive('/ships') && classes.activeNavLink}`}
                style={isActive('/ships') ? { pointerEvents: 'none' } : {}}
              >
                Ships
              </Text>
              <Text
                component={Link}
                to="/about"
                className={`${classes.navLink} ${isActive('/about') && classes.activeNavLink}`}
                style={isActive('/about') ? { pointerEvents: 'none' } : {}}
              >
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
              <Text
                component={Link}
                to="/resources"
                className={`${classes.mobileNavItem} ${
                  isActive('/resources') && classes.activeNavLink
                }`}
                style={isActive('/resources') ? { pointerEvents: 'none' } : {}}
              >
                Home
              </Text>
              <Text
                component={Link}
                to="/ships"
                className={`${classes.mobileNavItem} ${
                  isActive('/ships') && classes.activeNavLink
                }`}
                style={isActive('/ships') ? { pointerEvents: 'none' } : {}}
              >
                Ships
              </Text>
              <Text
                component={Link}
                to="/about"
                className={`${classes.mobileNavItem} ${
                  isActive('/about') && classes.activeNavLink
                }`}
                style={isActive('/about') ? { pointerEvents: 'none' } : {}}
              >
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

  