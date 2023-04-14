import { useState } from 'react';
import {
    Button,
    Center,
    Icon,
    HStack,
    VStack,
    Image,
    Spinner,
    Input,
    SimpleGrid,
    Square,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { FiUploadCloud } from 'react-icons/fi'



export const DropZone = (props)=> {
    const [message, setmessage] = useState("");
    const [empty, setEmpty] = useState("");
    const [file, setFile] = useState([]);
    let [loading, setLoading] = useState(false);
    let [color, setColor] = useState("#008080");

    async function handleChange(e) {
        setLoading(true)
        setFile([
            ...file,
            URL.createObjectURL(e.target.files[0])
        ]);

        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }

    return (

        <>
            <Text fontSize="xs" color='tomato'> {message}</Text>
            <Center
                borderWidth="1px"
                borderRadius="lg"
                px="6"
                py="4"
                bg={useColorModeValue('white', 'gray.800')}
                position="relative"
                flexDirection="column"
            >

                <VStack spacing="3">
                    <Square size="10" bg="bg-subtle" borderRadius="lg">
                        <Icon as={FiUploadCloud} boxSize="5" color="muted" />
                    </Square>
                    <VStack spacing="1">

                        <HStack spacing="1" whiteSpace="nowrap">

                            <Button variant="link" colorScheme="blue" size="sm">
                                Click to upload
                            </Button>
                            <Text fontSize="sm" color="muted">
                                or drag and drop
                            </Text>
                        </HStack>
                        <Text fontSize="xs" color="muted">
                            PNG, JPG or GIF up to 2MB
                        </Text>
                    </VStack>
                </VStack>
                <Input
                    multiple
                    position="absolute"
                    bottom="14px"
                    opacity={"0"}
                    minHeight="100px"
                    type="File"
                    placeholder="extra small size"
                    height="40px"
                    width="100%"
                    value={empty}
                    onChange={(e) => handleChange(e)}

                />

            </Center>
            {loading &&
                <Center mt="3px">
                    <Spinner />
                </Center>
            }


            <SimpleGrid spacing={2} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' py="4">
                {file.map((room, i) => (
                    <Center borderWidth="10px">
                        <Center>
                            <Image variant="top" src={room} />
                        </Center>
                    </Center>
                ))}
            </SimpleGrid>
        </>
    );
}