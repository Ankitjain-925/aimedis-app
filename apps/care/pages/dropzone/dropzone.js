import { useState, useEffect } from 'react';
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import {
    Box,
    Button,
    Flex,
    Center,
    FormControl,
    FormLabel,
    Icon,
    HStack,
    VStack,
    Image,
    IconButton,
    Input,
    SimpleGrid,
    Square,
    Stack,
    Text,
    useColorModeValue,
    useToast,
    Container,
    Progress
} from '@chakra-ui/react';
import { FiUploadCloud } from 'react-icons/fi'
// import { truncate } from 'fs';


const CDNURL = "https://jvogqxcgreynqmmenkqo.supabase.co/storage/v1/object/public/demo/";

// CDNURL + user.id + "/" + image.name

export default function App(props) {
    const { path } = props;
    const [email, setEmail] = useState("");
    const [images, setImages] = useState([]);
    const [message, setmessage] = useState("");
    const [empty, setEmpty] = useState("")
    const [UpdProcessing, setUpdProcessing] = useState(true)

    const user = useUser();
    const supabase = useSupabaseClient();

    async function getImages() {
        setUpdProcessing(true);
        const { data, error } = await supabase
            .storage
            .from('demo')
            .list();
        if (data !== null) {
            setImages(data);
            setUpdProcessing(false);
        } else {
            alert("Error loading images");
            console.log(error);
        }
    }

    useEffect(() => {
        getImages();
    }, []);

    const reset = () => {
        setEmpty(null)
    }
    async function uploadImage(e) {
        setUpdProcessing(true);
        let file = e.target.files[0];

        if (file) {
            const { data, error } = await supabase
                .storage
                .from('demo')
                .upload(`${file?.name}`, file)
            if (data) {
                setmessage()

                getImages();
                setUpdProcessing(false);
            } else {
                setmessage(error.message)
            }
        }
        reset()
    }

    async function deleteImage(imageName) {
        setUpdProcessing(true);
        const { error } = await supabase
            .storage
            .from('demo')
            .remove([imageName])

        if (error) {
            alert(error);
        } else {
            getImages();
            setUpdProcessing(false);
        }
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
                    position="absolute"
                    bottom="14px"
                    opacity={"0"}
                    minHeight="100px"
                    type="File"
                    placeholder="extra small size"
                    height="40px"
                    width="100%"
                    value={empty}
                    onChange={(e) => uploadImage(e)}

                />
            </Center>
            {UpdProcessing &&
                <Progress colorScheme='teal' size='sm' isIndeterminate />}
            <SimpleGrid spacing={2} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' py="4">
                {
                    images.map((image) => {
                        return (
                            <>
                                <Center borderWidth="10px">
                                    <Center>
                                        <Image variant="top" src={CDNURL + image?.name} />
                                    </Center>
                                    <Center>
                                        <Button variant="danger" onClick={() => deleteImage(image?.name)}>Delete Image</Button>
                                    </Center>
                                </Center>

                            </>

                        )
                    })
                }
            </SimpleGrid>
        </>
    );
}