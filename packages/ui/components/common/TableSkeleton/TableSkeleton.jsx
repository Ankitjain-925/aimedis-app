// import React from 'react'
import { Box , Skeleton} from '@chakra-ui/react'
import { Table, Tr, Th, Td } from './Table'

const SkeletonRow = ({ width }) => (
  <Box as="tr">
    <Td>
      <Skeleton height="10px" w={width} my={4} />
    </Td>
    <Td>
      <Skeleton height="10px" w={width} my={4} />
    </Td>
    <Td>
      <Skeleton height="10px" w={width} my={4} />
    </Td>
    <Td>
      <Skeleton height="10px" w={width} my={4} />
    </Td>
  </Box>
)

export const TableSkeleton = (props) => {
  return (
    <Table>
      <thead>
        <Tr>
          {props.heads.map((head)=><Th key={head} >{head}</Th>)}
        </Tr>
      </thead>
      <tbody>
      {props.heads.map((head)=><SkeletonRow width="75px" />)}
      </tbody>
    </Table>
  )
}

