// import { Avatar, Center, Text, Title, Stack, Group } from '@mantine/core';

// export default function Profile({ user }) {

//   // Optional loading state
//   if (!user) {
//     return <Text>Loading...</Text>;
//   }

//   return (
//     <>
//       <Center mt={50}>
//         <Stack align="center" gap="md">

//           <Avatar size={120} />

//           <Title order={1}>
//             {user.name}
//           </Title>

//           <Text size="md">
//             {user.email}
//           </Text>

//           <Group gap={5}>
//             <Text fw={700}>User ID:</Text>
//             <Text size="md">
//               {user.id}
//             </Text>
//           </Group>

//           <Group gap={5}>
//             <Text fw={700}>Website:</Text>
//             <Text size="md">
//               {user.website}
//             </Text>
//           </Group>

//         </Stack>
//       </Center>
//     </>
//   );
// }


import { Avatar, Center, Text, Title, Stack, Group } from '@mantine/core';

export default function Profile({ user }) {
  if (!user) {
    return <Text>Loading...</Text>;
  }

  return (
    <Center mt={50}>
      <Stack align="center" gap="md">
        <Avatar src={user.avatar} size={120} radius="xl" />

        <Title order={1}>{user.name}</Title>

        <Group gap={5}>
          <Text fw={700}>Email:</Text>
          <Text>{user.email}</Text>
        </Group>

        <Group gap={5}>
          <Text fw={700}>User ID:</Text>
          <Text>{user.id}</Text>
        </Group>

        <Group gap={5}>
          <Text fw={700}>Created At:</Text>
          <Text>
            {user.createdAt
              ? new Date(user.createdAt).toLocaleDateString()
              : 'N/A'}
          </Text>
        </Group>

      </Stack>
    </Center>
  );
}