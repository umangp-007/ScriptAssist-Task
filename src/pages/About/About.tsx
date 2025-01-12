import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Container, Grid, Paper, Title, Text, Group, Anchor, Badge, Loader, Divider } from '@mantine/core';
import { getCompanyInfo } from '../../api/spacex';
import { CompanyInfo } from '../../types/AboutUsTypes';

const AboutPage: React.FC = () => {
  const { data, isLoading, isError } = useQuery<CompanyInfo>(['companyInfo'], getCompanyInfo);

  if (isLoading) {
    return (
      <Container mt="xl" style={{ textAlign: 'center' }}>
        <Loader size="lg" />
      </Container>
    );
  }

  if (isError || !data) {
    return (
      <Container mt="xl" style={{ textAlign: 'center' }}>
        <Text color="red" size="lg">Failed to load company information</Text>
      </Container>
    );
  }

  return (
    <Container mt="xl">
      <Title order={1} align="center" mb="xl">
        About {data.name}
      </Title>
      
      <Paper shadow="xs" radius="md" p="xl" withBorder>
        <Text size="lg" weight={500} mb="md">{data.summary}</Text>

        <Divider my="lg" />

        <Grid>
          <Grid.Col xs={12} sm={6}>
            <Title order={3} mb="sm">Key Information</Title>
            <Text size="sm"><strong>Founder:</strong> {data.founder}</Text>
            <Text size="sm"><strong>Founded:</strong> {data.founded}</Text>
            <Text size="sm"><strong>CEO:</strong> {data.ceo}</Text>
            <Text size="sm"><strong>COO:</strong> {data.coo}</Text>
            <Text size="sm"><strong>CTO:</strong> {data.cto}</Text>
            <Text size="sm"><strong>CTO of Propulsion:</strong> {data.cto_propulsion}</Text>
            <Text size="sm"><strong>Employees:</strong> {data.employees.toLocaleString()}</Text>
            <Text size="sm"><strong>Valuation:</strong> ${data.valuation.toLocaleString()}</Text>
          </Grid.Col>

          <Grid.Col xs={12} sm={6}>
            <Title order={3} mb="sm">Headquarters</Title>
            <Text size="sm"><strong>Address:</strong> {data.headquarters.address}</Text>
            <Text size="sm"><strong>City:</strong> {data.headquarters.city}</Text>
            <Text size="sm"><strong>State:</strong> {data.headquarters.state}</Text>
          </Grid.Col>
        </Grid>

        <Divider my="lg" />

        <Grid>
          <Grid.Col xs={12}>
            <Title order={3} mb="sm">SpaceX Stats</Title>
            <Group spacing="sm">
              <Badge color="blue" size="lg">Vehicles: {data.vehicles}</Badge>
              <Badge color="green" size="lg">Launch Sites: {data.launch_sites}</Badge>
              <Badge color="red" size="lg">Test Sites: {data.test_sites}</Badge>
            </Group>
          </Grid.Col>
        </Grid>

        <Divider my="lg" />

        <Grid>
          <Grid.Col xs={12}>
            <Title order={3} mb="sm">Find Out More</Title>
            <Group spacing="sm">
              <Anchor href={data.links.website} target="_blank" color="blue">
                Official Website
              </Anchor>
              <Anchor href={data.links.flickr} target="_blank" color="blue">
                Flickr
              </Anchor>
              <Anchor href={data.links.twitter} target="_blank" color="blue">
                Twitter
              </Anchor>
              <Anchor href={data.links.elon_twitter} target="_blank" color="blue">
                Elon Musk's Twitter
              </Anchor>
            </Group>
          </Grid.Col>
        </Grid>
      </Paper>
    </Container>
  );
};

export default AboutPage;
