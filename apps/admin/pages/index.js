import {
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Box
} from '@chakra-ui/react'

import {TableSkeleton} from 'ui'
import {useAllProfileQuery} from 'ui';


export default function Admin() {

  const heads =['Username', 'Email', 'First Name', 'Last Name']

  const {isLoading, data, error} = useAllProfileQuery()

  if(isLoading){

    return(
      <TableSkeleton heads={heads} />
    )

  }

  if(error){

    return(
      <Text>{error.message}</Text>
    )
  }

    return (
<Box border='1px' borderColor='gray.200'>
  <Table>
    <Thead>
      <Tr>
      {heads.map((head)=><Th fontWeight='medium' key={head} >{head}</Th>)}
      </Tr>
    </Thead>
    <Tbody>
      {data.map((p) => (
        <Tr key={p.id}>
          <Td>
            <Text >{p.username}</Text>
          </Td>
          <Td>
            <Text>{p.email}</Text>
          </Td>
          <Td>
            <Text>{p.first_name}</Text>
          </Td>
          <Td>
            <Text>{p.last_name}</Text>
          </Td>
          
        </Tr>
      ))}
    </Tbody>
  </Table>
  </Box>
        
  )}

