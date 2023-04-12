import {
    Box,
    Text,
    Modal,
    useDisclosure,
    ModalOverlay,
    ModalContent,
    Input,
    Flex,
    Divider,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { FiCornerDownLeft, FiHash } from "react-icons/fi";

export const SearchModal = ({ posts }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const sizes = ["xs", "sm", "md", "lg", "xl"];
    const [state, setstate] = useState({
        query: "",
        list: [],
    });

    const handleChange = (e) => {
        const results = posts.filter((post) => {
            if (e.target.value === "") return posts;
            return post.title.toLowerCase().includes(e.target.value.toLowerCase());
        });
        setstate({
            query: e.target.value,
            list: results,
        });
    };
    return (
        <Box>
            <Input onClick={onOpen} h="35px" placeholder="Search" />
            <Modal size={sizes} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <Box py="15px" px="15px">
                        <Flex alignItems="center" px="10px">
                            <SearchIcon color="#00abaf" />
                            <Input
                                onChange={handleChange}
                                variant="unstyled"
                                pl="10px"
                                h="40px"
                            />
                        </Flex>

                        {state.query === ""
                            ? ""
                            : state.list.map((post, key) => {
                                return (
                                    <>
                                        {key === 0 && (
                                            <Divider
                                                orientation="horizontal"
                                                mb="15px"
                                                mt="10px"
                                            />
                                        )}
                                        <Flex
                                            cursor="pointer"
                                            border="0.5px solid"
                                            _hover={{
                                                background: "#00abaf",
                                                border: "none",
                                                transition: "160ms ease-in-out",
                                            }}
                                            alignItems="center"
                                            justifyContent="space-between"
                                            py="8px"
                                            px="16px"
                                            borderRadius="0.5rem"
                                            mt="8px"
                                            minHeight="3.5rem">
                                            <Flex alignItems="center">
                                                <FiHash size="18px" />
                                                <Flex flexDirection="column">
                                                    <Text
                                                        fontSize="12px"
                                                        ml="10px"
                                                        fontWeight="500">
                                                        Flex
                                                    </Text>
                                                    <Text ml="10px" fontWeight="600">
                                                        {post.title}
                                                    </Text>
                                                </Flex>
                                            </Flex>
                                            <FiCornerDownLeft />
                                        </Flex>
                                    </>
                                );
                            })}
                    </Box>
                </ModalContent>
            </Modal>
        </Box>
    );
}
