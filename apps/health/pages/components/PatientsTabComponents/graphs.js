import {
  Box,
  Center,
  Image,
  Text,
  Button,
  Input,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Spacer,
  useColorModeValue
} from '@chakra-ui/react';
import { MdSpaceDashboard, } from "react-icons/Md";
import { FaMinusCircle, FaPlusCircle, FaEquals } from "react-icons/Fa";
import { TbEqual } from "react-icons/Tb"


export default function Graphs() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        borderRadius={8}
        mr={50}
        w='100%'
        p={4}
        h={"42vh"}
        color='white'
        mt={"21px"}
      >
        <Center>
          <Box
            boxSize='140px'
          >
            <Center>
              <Image
                mt={-34}
                boxSize='100px'
                borderRadius={8}
                src='https://bit.ly/dan-abramov'
                alt='Dan Abramov'
              />
            </Center>
            <Center>
              <Text
                fontSize='20px'
                color={useColorModeValue('black', 'white')}
                mt={5}
                fontWeight="500"
              >
                Krishna Goel</Text>
            </Center>
            <Center>
              <Text
                color="#7f8383"
                font-size="14px"
              >
                01 / 01 / 2023</Text>
            </Center>
            <Center>
              <Button
                font-weight='700'
                fontSize={"14px"}
                pl={5}
                pr={5}
                h={"6vh"}
                mt={8}
                bg="#e1f7f7"
                variant='solid'
                color={"#00abaf"}
              >
                My Profile
              </Button>
            </Center>

          </Box>

        </Center>

      </Box >
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        display="flex"
        w='100%'
      >
        <Box
          h={"17vh"}
          w='50%'
          p={4}
          borderTop="1px" borderRight="1px" borderColor={useColorModeValue('gray.100', 'gray.100')}
        >

          <Center>
            <Text
              mt={"13px"}
              color={"#00b0db"}
              fontSize={"12px"}
              fontWeight="500"
            >
              Weight</Text>
          </Center>
          <Center>
            <Text
              fontWeight="600"
              color={useColorModeValue('black', 'white')}
              fontSize="13px"
              mt={"5px"}
            >
              -- {'   '} kg
            </Text>
          </Center>

        </Box>

        <Box

          h={"17vh"}
          w='50%'
          p={4}
          borderTop="1px" borderColor={useColorModeValue('gray.100', 'gray.100')}
        >
          <Center>
            <Text
              mt={"13px"}
              color={"#00b0db"}
              fontSize={"12px"}
              fontWeight="500"
            >
              Height</Text>
          </Center>
          <Center>
            <Text
              fontWeight="600"
              color={useColorModeValue('black', 'white')}
              fontSize="13px"
              mt={"6px"}
            >
              -- cm
            </Text>
          </Center>
        </Box>

      </Box>
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        display="flex"
        w='100%'
      >
        <Box

          h={"17vh"}
          w='50%'
          p={4}
          borderTop="1px" borderRight="1px" borderColor={useColorModeValue('gray.100', 'gray.100')}
        >
          <Center>
            <Text
              mt={"13px"}
              color={"#00b0db"}
              fontSize={"12px"}
              fontWeight="500"
            >
              BMI</Text>
          </Center>
          <Center>
            <Text
              fontWeight="600"
              color={useColorModeValue('black', 'white')}
              fontSize="13px"
              mt={"5px"}
            >
              --</Text>
          </Center>
        </Box>
        <Box
          h={"17vh"}
          w='50%'
          p={4}
          borderTop="1px" borderColor={useColorModeValue('gray.100', 'gray.100')}
        >
          <Center>
            <Text
              mt={"13px"}
              color={"#00b0db"}
              fontSize={"12px"}
              fontWeight="500"
            >
              Blood</Text>
          </Center>
          <Center>
            <Text
              fontWeight="500"
              color={useColorModeValue('black', 'white')}
              fontSize="22px"
              mt={"5px"}
            >
              A +</Text>
          </Center>
        </Box>
      </Box>

      <Box
        mt={8} mb={8}>
        <Center>
          <Box> <MdSpaceDashboard color='#00b0db' size={"3vh"} /></Box>

          {/* <Image mr={"10px"} boxSize='20px' src='pages\images\bpupr.png' alt='Dan Abramov' /> */}
          <Text
            ml={"8px"}
            color={"#00b0db"}
            fontSize={"13px"}
            font-weight="700"
            onClick={onOpen}  >
            Personalized dashboard
          </Text>
        </Center>

      </Box>
      {/* const sizes = ["xs", "sm", "md", "lg", "xl", "full"] */}
      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior={"inside"} size={['xs', 'md']}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader borderBottom={"1px"} borderColor={"gray.200"}><Text fontSize={"20px"} fontWeight={"600"} mb={"2px"}>Personalized dashboard</Text>
            <Text color="#7f8383" fontSize={"14px"} fontWeight="500" >Personalize your dashboard by adding or removing cards. Drag to reorder.</Text>

          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>

            <Box mt={"22px"}>
              <Box display={"flex"} mb={"17px"}><FaMinusCircle mt={"2px"} size={"14px"} color={"Red"} /> <Text ml={"10px"} fontSize={"13px"} fontWeight={"500"}>Last Doctor Visit</Text>  <Spacer /><TbEqual color='gray' /></Box>
              <Box display={"flex"} ><  FaMinusCircle mt={"2px"} size={"14px"} color={"Red"} /><Text ml={"10px"} fontSize={"13px"} fontWeight={"500"}>Graph-Blood Pressure</Text><Spacer /><TbEqual color='gray' /></Box>
            </Box>
            <Box mt={"22px"}>
              <Text fontSize={"12px"} fontWeight={"400"} color={"gray.500"}>Add more cards</Text>
            </Box>
            <Box mt={"15px"}>
              <Box display={"flex"} mb={"17px"}><  FaPlusCircle mt={"2px"} size={"14px"} color='#00b0db' /> <Text ml={"10px"} fontSize={"13px"} fontWeight={"500"}>Graph-Blood Sugar</Text></Box>
              <Box display={"flex"} mb={"17px"}><  FaPlusCircle mt={"2px"} size={"14px"} color='#00b0db' /> <Text ml={"10px"} fontSize={"13px"} fontWeight={"500"}>Creatinine</Text></Box>
              <Box display={"flex"} mb={"17px"}><  FaPlusCircle mt={"2px"} size={"14px"} color='#00b0db' /> <Text ml={"10px"} fontSize={"13px"} fontWeight={"500"}>Hemoglobine</Text></Box>
              <Box display={"flex"} mb={"17px"}><  FaPlusCircle mt={"2px"} size={"14px"} color='#00b0db' /> <Text ml={"10px"} fontSize={"13px"} fontWeight={"500"}>Leucocytes</Text></Box>
              <Box display={"flex"} mb={"17px"}><  FaPlusCircle mt={"2px"} size={"14px"} color='#00b0db' /> <Text ml={"10px"} fontSize={"13px"} fontWeight={"500"}>Pancreatic lipase</Text></Box>
              <Box display={"flex"} mb={"17px"}><  FaPlusCircle mt={"2px"} size={"14px"} color='#00b0db' /> <Text ml={"10px"} fontSize={"13px"} fontWeight={"500"}>Graph-Blood Sugar</Text></Box>
              <Box display={"flex"} mb={"17px"}><  FaPlusCircle mt={"2px"} size={"14px"} color='#00b0db' /> <Text ml={"10px"} fontSize={"13px"} fontWeight={"500"}>Creatinine</Text></Box>
              <Box display={"flex"} mb={"17px"}><  FaPlusCircle mt={"2px"} size={"14px"} color='#00b0db' /> <Text ml={"10px"} fontSize={"13px"} fontWeight={"500"}>Hemoglobine</Text></Box>
              <Box display={"flex"} mb={"17px"}><  FaPlusCircle mt={"2px"} size={"14px"} color='#00b0db' /> <Text ml={"10px"} fontSize={"13px"} fontWeight={"500"}>Leucocytes</Text></Box>
              <Box display={"flex"} mb={"17px"}><  FaPlusCircle mt={"2px"} size={"14px"} color='#00b0db' /> <Text ml={"10px"} fontSize={"13px"} fontWeight={"500"}>Pancreatic lipase</Text></Box>
            </Box>
          </ModalBody>

          <ModalFooter>
            {/* <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box mt={"10px"} p={"30"} borderRadius={"8px"}>

        <Text mb={"30px"} fontWeight={"500"} fontSize={"14px"}>Last doctor visits</Text>
        <Center>
          <Text mb={"12px"} fontSize={"13px"} fontWeight={"500"} color={"gray.400"}>No data available</Text>
        </Center>
        <Center>
          <Text fontSize={"12px"} fontWeight={"500"} color={"#00abaf"}>+ Add new entry</Text>
        </Center>
      </Box>
      <Box mt={"10px"} p={"30"} borderRadius={"8px"}>

        <Text mb={"30px"} fontWeight={"300"} fontSize={"12px"}>The Graph is not available yet!</Text>

      </Box>
    </>

  );
}

