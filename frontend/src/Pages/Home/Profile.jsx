import React, { useState ,useEffect} from "react";
import { Text, Avatar, Container,Space } from '@mantine/core';
const Profile = ({user}) => {
    const[data, setData] = useState(0);
  
return (
    
    <div>
       <Container strategy="grid" size={500} mt="xl"  >
       <Avatar variant="center" radius="md" src="" />
        <Space h="md" />
           <Text fw={700}>name: {user.name}</Text>
            <Space h="md" />
           <Text>email: {user.email}</Text>
           </Container>
         
    </div>
  );
};

export default Profile;

