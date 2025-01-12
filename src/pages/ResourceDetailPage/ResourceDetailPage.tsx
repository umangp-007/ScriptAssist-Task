import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Card, Title, Text, Loader, Container, Group, Badge, Transition, Paper, Image, Button, Anchor, Center } from '@mantine/core';
import { getLaunchById } from '../../api/spacex'; 
import ErrorPage from '../../components/ErrorPage/ErrorPage';
import Loading from '../../components/Loading/Loading';
import { Launch } from '../../types/ResourceDetailPageTypes';


const ResourceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError, error } = useQuery<Launch>(
    ['launchDetail', id],
    () => getLaunchById(id!), 
    { enabled: !!id } 
  );

  if (isError && error instanceof Error && error.message === 'Network Error') {
    return <ErrorPage type="network" />;
  }

  if (isError && (error instanceof Error && error.message !== 'Network Error' || !data)) {
    return <ErrorPage type="no-data" />;
  }

  if (isLoading) {
    return (
     <Loading />
    );
  }

  return (
    <Container mt="xl">
      <Transition mounted={!!data} transition="slide-up" duration={600} timingFunction="ease">
        {(styles) => (
          <Paper style={styles} shadow="xs" radius="md" withBorder>
            <Card withBorder shadow="sm" radius="md">
              <Title order={2} align="center" mb="lg">
                {data?.name}
              </Title>

              {data?.links?.patch?.large && (
                <Image
                  src={data?.links?.patch?.large}
                  alt={data.name}
                  height={300}
                  fit="contain"
                  radius="md"
                  mb="lg"
                />
              )}

              <Group position="center" spacing="sm" mb="lg">
                <Badge size="lg" variant="outline" color="blue">
                  Rocket: {data?.rocket}
                </Badge>
                <Badge size="lg" variant="outline" color="green">
                  Status: {data?.success ? 'Success' : 'Failure'}
                </Badge>
              </Group>
              <Text size="sm" weight={500} mb="xs">
                Launch Date: {new Date(data?.date_utc).toLocaleDateString()}
              </Text>
              <Text size="sm" weight={500} mb="xs">
                Details: {data?.details || 'No details available.'}
              </Text>

              <Group position="center" spacing="sm" mt="lg">
                {data?.links?.article && (
                  <Anchor href={data?.links?.article} target="_blank" color="blue">
                    <Button variant="outline" color="blue">
                      Read Article
                    </Button>
                  </Anchor>
                )}

                {data?.links?.webcast && (
                  <Anchor href={data?.links?.webcast} target="_blank" color="green">
                    <Button variant="outline" color="green">
                      Watch Webcast
                    </Button>
                  </Anchor>
                )}

                {data?.links?.wikipedia && (
                  <Anchor href={data?.links?.wikipedia} target="_blank" color="dark">
                    <Button variant="outline" color="dark">
                      View on Wikipedia
                    </Button>
                  </Anchor>
                )}
              </Group>
            </Card>
          </Paper>
        )}
      </Transition>
    </Container>
  );
};

export default ResourceDetailPage;
