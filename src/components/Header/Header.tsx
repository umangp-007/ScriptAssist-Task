// import React from 'react';
// import { useAuth } from '../AuthProvider/AuthProvider';
// import {
//   Button,
//   Container,
//   Group,
//   Text,
//   Menu,
//   Avatar,
//   MediaQuery,
//   Burger,
// } from '@mantine/core';
// import { useState } from 'react';

// const Header: React.FC = () => {
//   const { logout } = useAuth();
//   const [menuOpened, setMenuOpened] = useState(false);

//   const handleLogout = () => {
//     logout();
//   };

//   return (
//     <header style={{background:'#e2e2e2'}}>
//       <Container size="xl" py="md" px="sm" >
//         <Group position="apart" align="center">
//           {/* Left Section: Brand */}
//           <Text weight={700} size="lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
//             SpaceX Explorer
//           </Text>

//           {/* Right Section: Navigation & Profile */}
//           <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
//             <Group spacing="md">
//               <Text component="a" href="#home" weight={500} style={{ cursor: 'pointer' }}>
//                 Home
//               </Text>
//               <Text component="a" href="#missions" weight={500} style={{ cursor: 'pointer' }}>
//                 Missions
//               </Text>
//               <Text component="a" href="#about" weight={500} style={{ cursor: 'pointer' }}>
//                 About
//               </Text>
//               <Menu shadow="md" width={200}>
//                 <Menu.Target>
//                   <Avatar
//                     radius="xl"
//                     src="https://via.placeholder.com/40"
//                     alt="User Profile"
//                     style={{ cursor: 'pointer' }}
//                   />
//                 </Menu.Target>
//                 <Menu.Dropdown>
//                   <Menu.Label>Account</Menu.Label>
//                   <Menu.Item>Profile</Menu.Item>
//                   <Menu.Item>Settings</Menu.Item>
//                   <Menu.Divider />
//                   <Menu.Item color="red" onClick={handleLogout}>
//                     Logout
//                   </Menu.Item>
//                 </Menu.Dropdown>
//               </Menu>
//             </Group>
//           </MediaQuery>

//           {/* Mobile Menu */}
//           <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
//             <Burger
//               opened={menuOpened}
//               onClick={() => setMenuOpened(!menuOpened)}
//               size="sm"
//               aria-label="Toggle navigation"
//             />
//           </MediaQuery>
//         </Group>

//         {/* Mobile Dropdown Navigation */}
//         {menuOpened && (
//           <Group
//             spacing="sm"
//             mt="md"
//             style={{ background: '#f8f9fa', padding: '10px', borderRadius: '5px' }}
//           >
//             <Text component="a" href="#home" weight={500} style={{ cursor: 'pointer' }}>
//               Home
//             </Text>
//             <Text component="a" href="#missions" weight={500} style={{ cursor: 'pointer' }}>
//               Missions
//             </Text>
//             <Text component="a" href="#about" weight={500} style={{ cursor: 'pointer' }}>
//               About
//             </Text>
//             <Button color="red" onClick={handleLogout} size="xs">
//               Logout
//             </Button>
//           </Group>
//         )}
//       </Container>
//     </header>
//   );
// };

// export default Header;
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
          {/* Brand Section */}
          <Text className={classes.brand}>SpaceX Explorer</Text>

          {/* Desktop Navigation */}
          <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            <Group spacing="md">
              <Text component="a" href="#home" className={classes.navLink}>
                Home
              </Text>
              <Text component="a" href="#missions" className={classes.navLink}>
                Missions
              </Text>
              <Text component="a" href="#about" className={classes.navLink}>
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

          {/* Mobile Menu Button */}
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Burger
              opened={menuOpened}
              onClick={() => setMenuOpened((prev) => !prev)}
              size="sm"
              aria-label="Toggle navigation"
            />
          </MediaQuery>
        </Group>

        {/* Mobile Navigation */}
        {menuOpened && (
          <div className={classes.mobileMenu}>
            <Group spacing="xs">
              <Text component="a" href="#home" className={classes.mobileNavItem}>
                Home
              </Text>
              <Text component="a" href="#missions" className={classes.mobileNavItem}>
                Missions
              </Text>
              <Text component="a" href="#about" className={classes.mobileNavItem}>
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
