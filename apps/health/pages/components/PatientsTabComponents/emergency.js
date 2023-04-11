import {
    Divider,
    Text,
    Grid,
    Card,
    CardFooter,
    UnorderedList,
    ListItem,
    CardBody,
    SimpleGrid,
} from '@chakra-ui/react'
import React from 'react'

export default function Emergency() {
    return (
        <>
            <Text fontSize='19px' fontWeight='600' pl="10px">
                Your Emergency Access
            </Text>
            <Grid pl="10px">
                <Text fontWeight='600' mt="15px" mb="18px">
                    Health status
                </Text>
                <SimpleGrid spacing={6} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
                    <Card boxShadow='lg' borderRadius={'12px'}>
                        <Text p="10px" pl="16px" color="teal" fontWeight='500' fontSize='14px'>  Medicine</Text>
                        <Divider borderColor="teal"/>
                        <CardBody pl="16px">
                            <UnorderedList fontSize="13px">
                                <ListItem>Paracetamole</ListItem>
                                <ListItem>Crossin</ListItem>
                                <ListItem>Combiflame</ListItem>
                            </UnorderedList>
                        </CardBody>
                    </Card>
                    <Card boxShadow='lg' borderRadius={'12px'}>
                        <Text p="10px" pl="16px" color="teal" fontWeight='500' fontSize='14px'> Allergies </Text>
                        <Divider borderColor="teal"/>
                        <CardBody pl="16px">
                            <Text fontSize="13px">No. Allergies</Text>
                        </CardBody>
                    </Card>
                    <Card boxShadow='lg' borderRadius={'12px'}>
                        <Text p="10px" pl="16px" color="teal" fontWeight='500' fontSize='14px'> Diagnose</Text>
                        <Divider borderColor="teal"/>                       
                         <CardBody pl="16px">
                            <Text fontSize="13px">No. Diagnosis</Text>
                        </CardBody>
                    </Card>
                </SimpleGrid>
            </Grid>
            <Grid pl="10px">
                <Text fontWeight='600' mt="40px" mb="18px">
                    Contacts & Other info
                </Text>
                <SimpleGrid spacing={6} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
                    <Card boxShadow='lg' borderRadius={'12px'}>
                        <Text p="10px" pl="16px" color="teal" fontWeight='500' fontSize='14px'>  Family Doctor</Text>
                        <Divider borderColor="teal"/>
                        <CardBody pl="16px">
                            <Text fontSize="13px" as="b">RUPALI GUPTA</Text>
                            <Text fontSize="13px">IN-9140024571</Text>
                            <Text fontSize="13px">rupali89@gmail.com</Text>
                        </CardBody>
                        <Divider borderColor="teal"/>
                        <CardFooter>
                            <Text fontSize="13px">ALLERGY & IMMUNOLOGY, FAMILY MEDICINE</Text>
                        </CardFooter>
                    </Card>
                    <Card boxShadow='lg' borderRadius={'12px'}>
                        <Text p="10px" pl="16px" color="teal" fontWeight='500' fontSize='14px'>  Emergancy Contact</Text>
                        <Divider borderColor="teal"/>
                        <CardBody pl="16px">
                            <Text fontSize="13px" as="b">Rheya</Text>
                            <Text fontSize="13px">Cousine</Text>
                            <Text fontSize="13px">IN-9898778786</Text>
                            <Text fontSize="13px">rheya34@gmail.com</Text>
                        </CardBody>
                    </Card>
                    <Card boxShadow='lg' borderRadius={'12px'}>
                        <Text p="10px" pl="16px" color="teal" fontWeight='500' fontSize='14px'>  Organ Donor Status</Text>
                        <Divider borderColor="teal"/>
                        <CardBody pl="16px">
                            <Text fontSize="13px">NOT allow a transplantation of any of my organs or tissues</Text>
                        </CardBody>
                        <Divider borderColor="teal"/>
                        <CardFooter>
                            <Text fontSize="13px">rtyryrty rtyrty</Text>
                        </CardFooter>
                    </Card>
                </SimpleGrid>
            </Grid>

        </>
    );
}