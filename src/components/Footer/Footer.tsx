import React from "react";
import { Container, Text, Group, Anchor, Divider, createStyles, Stack } from "@mantine/core";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { useStyles } from "./Footer.Styles";


const Footer: React.FC = () => {
  const { classes } = useStyles();

  return (
    <footer className={classes.footer}>
      <Container size="lg">
        <Group
          position="apart"
          align="start"
          spacing="xl"
          mb="md"
          m={20}
        >
          <div>
            <Text size="xl" weight={700} color="dark">
              SpaceX API
            </Text>
            <Text size="sm" className={classes.footerText}>
              Explore the universe of SpaceX data with the SpaceX API. Discover launches, rockets,
              and more!
            </Text>
          </div>

          <Stack spacing="xs">
            <Text size="md" className={classes.footerHeading}>
              Quick Links
            </Text>
            <Anchor
              href="https://www.spacex.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.link}
            >
              SpaceX Official
            </Anchor>
            <Anchor
              href="https://github.com/r-spacex/SpaceX-API"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.link}
            >
              SpaceX API GitHub
            </Anchor>
            <Anchor href="/about" className={classes.link}>
              About SpaceX API
            </Anchor>
          </Stack>

          <Stack spacing="xs">
            <Text size="md" className={classes.footerHeading}>
              Follow Us
            </Text>
            <Group spacing="md">
              <Anchor
                href="https://twitter.com/spacex"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.socialIcon}
              >
                <FaTwitter size={20} />
              </Anchor>
              <Anchor
                href="https://www.youtube.com/spacex"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.socialIcon}
              >
                <FaYoutube size={20} />
              </Anchor>
              <Anchor
                href="https://www.instagram.com/spacex/"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.socialIcon}
              >
                <FaInstagram size={20} />
              </Anchor>
            </Group>
          </Stack>
        </Group>

        <Divider className={classes.divider} />

        <Text align="center" size="xs" className={classes.bottomText}>
          &copy; {new Date().getFullYear()} SpaceX API. All rights reserved.
        </Text>
      </Container>
    </footer>
  );
};

export default Footer;
