import React, { useState } from 'react';
import {
  Table,
  Container,
  Text,
  Paper,
  TextInput,
  Pagination,
  Group,
  Select,
  MultiSelect,
  Badge,
  Stack,
} from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { getLaunches } from '../../api/spacex';
import ErrorPage from '../../components/ErrorPage/ErrorPage'; 
import Loading from '../../components/Loading/Loading';
import { Launch } from '../../types/ResourceListPageTypes';


const ResourceListPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [yearFilter, setYearFilter] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string[]>([]);
  const [rocketFilter, setRocketFilter] = useState<string[]>([]);

  const { data, isLoading, isError, error } = useQuery<Launch[]>(['launches'], getLaunches);
  const navigate = useNavigate();

  const years: string[] = Array.from(
    new Set(data?.map((launch) => new Date(launch.date_utc).getFullYear().toString()))
  ).sort();

  const rockets: string[] = Array.from(new Set(data?.map((launch) => launch.rocket)));
  const statuses: string[] = ['Success', 'Failure'];

  const filteredData = data
    ?.filter((launch) => launch.name.toLowerCase().includes(search.toLowerCase()))
    .filter((launch) => (yearFilter ? new Date(launch.date_utc).getFullYear().toString() === yearFilter : true))
    .filter((launch) => (statusFilter.length ? statusFilter.includes(launch.success ? 'Success' : 'Failure') : true))
    .filter((launch) => (rocketFilter.length ? rocketFilter.includes(launch.rocket) : true));

  const itemsPerPage = 10;
  const pageCount = Math.ceil((filteredData?.length || 0) / itemsPerPage);
  const paginatedData = filteredData?.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const handleRowClick = (launchId: string) => {
    navigate(`/resources/${launchId}`);
  };

  if (isError && error instanceof Error && error.message === 'Network Error') {
    return <ErrorPage type="network" />;
  }

  if (isLoading) {
    return (
    <Loading />
    );
  }

  if (isError) {
    return (
     <ErrorPage type={'network'} />
    );
  }

  return (
    <Container mt="xl">
      <Paper shadow="xs" p="lg">
        <Text size="xl" weight={500} align="center" mb="lg">
          SpaceX Launches
        </Text>

        <Stack spacing="md" mb="md">
          <TextInput
            label="Search by Mission Name"
            placeholder="Enter mission name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Group grow>
            <Select
              label="Filter by Year"
              placeholder="Select year"
              data={years.map((year) => ({ value: year, label: year }))}
              value={yearFilter}
              onChange={setYearFilter}
              clearable
            />
            <MultiSelect
              label="Filter by Status"
              placeholder="Select status"
              data={statuses.map((status) => ({ value: status, label: status }))}
              value={statusFilter}
              onChange={setStatusFilter}
              clearable
            />
          </Group>
          <MultiSelect
            label="Filter by Rocket"
            placeholder="Select rocket"
            data={rockets.map((rocket) => ({ value: rocket, label: rocket }))}
            value={rocketFilter}
            onChange={setRocketFilter}
            clearable
          />
        </Stack>

        <div style={{ overflowX: 'auto' }}>
          <Table striped highlightOnHover verticalSpacing="md" fontSize="md" style={{ minWidth: '600px' }}>
            <thead>
              <tr>
                <th>Mission Name</th>
                <th>Launch Date</th>
                <th>Rocket</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData?.map((launch) => (
                <tr key={launch.id} onClick={() => handleRowClick(launch.id)} style={{ cursor: 'pointer' }}>
                  <td>{launch.name}</td>
                  <td>{new Date(launch.date_utc).toLocaleDateString()}</td>
                  <td>{launch.rocket}</td>
                  <td>
                    <Badge color={launch.success ? 'green' : 'red'}>
                      {launch.success ? 'Success' : 'Failure'}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        {pageCount > 1 && (
          <Group position="center" mt="xl">
            <Pagination value={page} onChange={setPage} total={pageCount} />
          </Group>
        )}
      </Paper>
    </Container>
  );
};

export default ResourceListPage;
