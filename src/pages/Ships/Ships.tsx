// import React, { useState } from 'react';
// import { useQuery } from '@tanstack/react-query';
// import {
//   Card,
//   Container,
//   Grid,
//   Loader,
//   Paper,
//   Text,
//   Title,
//   Image,
//   Button,
//   Group,
//   Transition,
//   Pagination,
// } from '@mantine/core';
// import { getShips } from '../../api/spacex';
// import { Ship } from '../../types/ShipsTypes';
// import Loading from '../../components/Loading/Loading';

// const ShipsPage: React.FC = () => {
//   const { data, isLoading, isError } = useQuery<Ship[]>(['ships'], getShips);

//   const [activePage, setActivePage] = useState(1);
//   const itemsPerPage = 6;

//   const paginatedData = data?.slice((activePage - 1) * itemsPerPage, activePage * itemsPerPage);

//   if (isLoading) {
//     return <Loading />;
//   }

//   if (isError || !data) {
//     return (
//       <Container>
//         <Text color="red" align="center" size="lg">
//           Failed to load ships. Please try again later.
//         </Text>
//       </Container>
//     );
//   }

//   return (
//     <Container mt="xl">
//       <Title order={2} align="center" mb="lg">
//         SpaceX Ships
//       </Title>
//       <Grid gutter="lg">
//         {paginatedData?.map((ship) => (
//           <Grid.Col xs={12} sm={6} lg={4} key={ship.ship_id}>
//             <Transition mounted transition="scale-y" duration={400} timingFunction="ease-in-out">
//               {(styles) => (
//                 <Paper
//                   style={styles}
//                   shadow="lg"
//                   radius="md"
//                   p="md"
//                   withBorder
//                 >
//                   <Card shadow="sm" p="md" radius="md" style={{ height: '100%' }}>
//                     <Title order={4} mb="sm" align="center">
//                       {ship.ship_name || 'No Name Available'}
//                     </Title>
//                     <Text size="sm" color="dimmed" align="center">
//                       Type: {ship.ship_type || 'Not Specified'}
//                     </Text>
//                     <Text size="sm" color="dimmed" align="center">
//                       Home Port: {ship.home_port || 'Unknown'}
//                     </Text>
//                     <Text size="sm" color="dimmed" align="center">
//                       Year Built: {ship.year_built || 'N/A'}
//                     </Text>
//                     <Text size="sm" color="dimmed" align="center">
//                       Status: {ship.active ? 'Active' : 'Inactive'}
//                     </Text>
//                     {ship.image ? (
//                       <Image
//                         src={ship.image}
//                         alt={ship.ship_name}
//                         height={150}
//                         fit="cover"
//                         radius="md"
//                         mt="md"
//                         style={{ objectFit: 'cover' }}
//                       />
//                     ) : (
//                       <Image
//                         src="https://via.placeholder.com/150"
//                         alt="No Image Available"
//                         height={150}
//                         fit="cover"
//                         radius="md"
//                         mt="md"
//                         style={{ objectFit: 'cover' }}
//                       />
//                     )}

//                     <Group mt="md" position="center">
//                       {ship.link && (
//                         <Button
//                           component="a"
//                           href={ship.link}
//                           target="_blank"
//                           variant="gradient"
//                           gradient={{ from: 'indigo', to: 'cyan' }}
//                         >
//                           View Details
//                         </Button>
//                       )}
//                     </Group>
//                   </Card>
//                 </Paper>
//               )}
//             </Transition>
//           </Grid.Col>
//         ))}
//       </Grid>

//       <Group position="center" mt="lg">
//   <Pagination
//     total={Math.ceil(data.length / itemsPerPage)} 
//     value={activePage} 
//     onChange={setActivePage} 
//   />
// </Group>

//     </Container>
//   );
// };

// export default ShipsPage;
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  Card,
  Container,
  Grid,
  Paper,
  Text,
  Title,
  Image,
  Button,
  Group,
  Pagination,
  Badge,
  Divider,
} from '@mantine/core';
import { getShips } from '../../api/spacex';
import { Ship } from '../../types/ShipsTypes';
import Loading from '../../components/Loading/Loading';

const ShipsPage: React.FC = () => {
  const { data, isLoading, isError } = useQuery<Ship[]>(['ships'], getShips);
 console.log("datadatadatadatadata",data)
  // Pagination state
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 6;

  const paginatedData = data?.slice((activePage - 1) * itemsPerPage, activePage * itemsPerPage);

  if (isLoading) {
    return <Loading />;
  }

  if (isError || !data) {
    return (
      <Container>
        <Text color="red" align="center" size="lg">
          Failed to load ships. Please try again later.
        </Text>
      </Container>
    );
  }

  return (
    <Container mt="xl">
      <Title order={2} align="center" mb="lg">
        SpaceX Ships
      </Title>
      <Grid gutter="lg">
        {paginatedData?.map((ship) => (
          <Grid.Col xs={12} sm={6} lg={4} key={ship.ship_id}>
            <Paper
              shadow="md"
              radius="md"
              p="md"
              withBorder
             
            >
              <Card shadow="sm" radius="md" p="lg" style={{ height: '100%' }}>
                <Title order={4} mb="sm" align="center">
                  {ship.name || 'No Name Available'}
                </Title>

                <Group position="center" spacing="xs" mb="sm">
                  <Badge color="blue">{ship.type || 'Unknown Type'}</Badge>
                  {ship.active ? <Badge color="green">Active</Badge> : <Badge color="red">Inactive</Badge>}
                </Group>

                <Divider my="sm" />

                <Text size="sm" color="dimmed" align="center">
                  Home Port: {ship.home_port || 'Unknown'}
                </Text>
                <Text size="sm" color="dimmed" align="center">
                  Year Built: {ship.year_built || 'N/A'}
                </Text>

                {ship.image ? (
                  <Image
                    src={ship.image}
                    alt={ship.name}
                    height={180}
                    radius="md"
                    mt="md"
                    style={{ objectFit: 'cover' }}
                  />
                ) : (
                  <Image
                    src="https://placehold.co/600x400"
                    alt="No Image Available"
                    height={180}
                    radius="md"
                    mt="md"
                    style={{ objectFit: 'cover' }}
                  />
                )}

                <Group mt="md" position="center">
                  {ship.link && (
                    <Button
                      component="a"
                      href={ship.link}
                      target="_blank"
                      variant="gradient"
                      gradient={{ from: 'teal', to: 'blue' }}
                      size="xs"
                    >
                      View Details
                    </Button>
                  )}
                </Group>
              </Card>
            </Paper>
          </Grid.Col>
        ))}
      </Grid>

      <Group position="center" mt="lg">
        <Pagination
          total={Math.ceil(data.length / itemsPerPage)}
          value={activePage}
          onChange={setActivePage}
        />
      </Group>
    </Container>
  );
};

export default ShipsPage;
