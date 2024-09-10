import React from 'react';
import {
  Heading,
  Text,
  Card, CardBody,
  Box, Flex, Image, Center, VStack, HStack, Button, Link, Spacer,
  AspectRatio,
  CardHeader
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function Home(props) {

  const navigate = useNavigate();


  return (
    <Box
      backgroundImage="background.png"
      backgroundSize="cover"
      backgroundPosition="center"
      height="1000px"
      width="450px"
      border-radius="24"
      overflow="hidden" // Prevents any content overflow
    >
      <VStack alignItems="center" margin="20px" spacing="15px">
        <Text fontSize="2xl" color="white" fontWeight="bold">
          Philadelphia, PA
        </Text>
        <Text fontSize="l" color="white">
          Today, 10 Sep
        </Text>
        <HStack width="100%">
          <Card backgroundColor="rgba(0, 0, 0, 0.15)" width="100%">
            <CardBody>
              <HStack>
                <Box width="110px">
                  <VStack>
                    <Text fontSize="xl" fontWeight="bold" color="white">3PM</Text>
                    <HStack>
                      <Image src="rainy.png" boxSize="40px"></Image>
                      <Text color="white">Heavy</Text>
                    </HStack>
                    <HStack>
                      <Image src="sun.png" boxSize="40px"></Image>
                      <Text color="white">7/10</Text>
                    </HStack>
                    <Text color="white" fontSize="xl">64°</Text>
                  </VStack>
                </Box>
                <Box width="110px">
                  <VStack>
                    <Text fontSize="xl" fontWeight="bold" color="white">4PM</Text>
                    <HStack>
                      <Image src="rainy.png" boxSize="40px"></Image>
                      <Text color="white">Heavy</Text>
                    </HStack>
                    <HStack>
                      <Image src="sun.png" boxSize="40px"></Image>
                      <Text color="white">2/10</Text>
                    </HStack>
                    <Text color="white" fontSize="xl">58°</Text>
                  </VStack>
                </Box>
                <Box width="110px">
                  <VStack>
                    <Text fontSize="xl" fontWeight="bold" color="white">5PM</Text>
                    <HStack>
                      <Image src="rainy.png" boxSize="40px"></Image>
                      <Text color="white">Light</Text>
                    </HStack>
                    <HStack>
                      <Image src="sun.png" boxSize="40px"></Image>
                      <Text color="white">3/10</Text>
                    </HStack>
                    <Text color="white" fontSize="xl">60°</Text>
                  </VStack>
                </Box>
              </HStack>
            </CardBody>
          </Card>
        </HStack>
        <Card backgroundColor="rgba(0, 0, 0, 0.15)" width="100%">
          <CardBody>
            <VStack align="left" spacing="20px">
              <HStack>
                <Image src="wind.png" boxSize="40px"></Image>
                <Text color="white">Strong winds expected from 3-5PM</Text>
              </HStack>
              <HStack>
                <Image src="storm.png" boxSize="40px"></Image>
                <Text color="white">Thunderstorm expected around 4PM</Text>
              </HStack>
            </VStack>
          </CardBody>
        </Card>
        <Flex width="100%" gap="4">
          <Card backgroundColor="rgba(0, 0, 0, 0.15)" width="140px">
            <CardBody>
              <Flex direction="column" gap="2">
                <Text fontSize="l" fontWeight="bold" textAlign="center" color="white">Bordentown Beach</Text>
                <Flex spacing="50px">
                  <VStack>
                    <Text color="white">11 Sep</Text>
                    <Image src="sun.png" boxSize="40px"></Image>
                  </VStack>
                  <Spacer />
                  <VStack spacing="0px">
                    <Text color="white">3PM</Text>
                    <Text color="white">~</Text>
                    <Text color="white">7PM</Text>
                  </VStack>
                </Flex>
              </Flex>
            </CardBody>
          </Card>
          <Card backgroundColor="rgba(0, 0, 0, 0.15)" width="140px">
            <CardBody>
              <Flex direction="column" gap="31">
                <Text fontSize="l" fontWeight="bold" textAlign="center" color="white">Old City</Text>
                <Flex spacing="50px">
                  <VStack>
                    <Text color="white">11 Sep</Text>
                    <Image src="cloudy-3.png" boxSize="40px"></Image>
                  </VStack>
                  <Spacer />
                  <VStack spacing="0px">
                    <Text color="white">3PM</Text>
                    <Text color="white">~</Text>
                    <Text color="white">7PM</Text>
                  </VStack>
                </Flex>
              </Flex>
            </CardBody>
          </Card>
          <Card backgroundColor="rgba(0, 0, 0, 0.15)">
            <CardBody>
              <Flex direction="column" justify="center" align="center" gap="5">
                <Text fontSize="2xl" fontWeight="bold" textAlign="center" color="white">+</Text>
                <Text fontSize="l" textAlign="center" color="white">Add snapshot</Text>
              </Flex>
            </CardBody>
          </Card>
        </Flex>
        <Card backgroundColor="rgba(0, 0, 0, 0.15)" width="100%">
          <CardBody>
            <VStack align="left" spacing="20px">
              <HStack>
                <Text color="white" fontWeight="Bold">11 Sep</Text>
                <Text color="white">Wed</Text>
                <Spacer />
                <Text color="white">64°</Text>
                <Text color="white">72°</Text>
                <Image src="sun.png" boxSize="30px"></Image>
              </HStack>
              <HStack>
                <Text color="white" fontWeight="Bold">12 Sep</Text>
                <Text color="white">Thurs</Text>
                <Spacer />
                <Text color="white">64°</Text>
                <Text color="white">72°</Text>
                <Image src="sun.png" boxSize="30px"></Image>
              </HStack>
              <HStack>
                <Text color="white" fontWeight="Bold">13 Sep</Text>
                <Text color="white">Fri</Text>
                <Spacer />
                <Text color="white">64°</Text>
                <Text color="white">72°</Text>
                <Image src="sun.png" boxSize="30px"></Image>
              </HStack>
              <HStack>
                <Text color="white" fontWeight="Bold">14 Sep</Text>
                <Text color="white">Sat</Text>
                <Spacer />
                <Text color="white">64°</Text>
                <Text color="white">72°</Text>
                <Image src="sun.png" boxSize="30px"></Image>
              </HStack>
              <HStack>
                <Text color="white" fontWeight="Bold">15 Sep</Text>
                <Text color="white">Sun</Text>
                <Spacer />
                <Text color="white">64°</Text>
                <Text color="white">72°</Text>
                <Image src="sun.png" boxSize="30px"></Image>
              </HStack>
            </VStack>
          </CardBody>
        </Card>
        <Flex direction="row" justify="flex-start" width="100%"> 
          <HStack width="100%" justify="center">
            <Image src="ellipse 1.png" boxSize="8px"></Image>
            <Image src="ellipse 2.png" boxSize="8px"></Image>
            <Image src="ellipse 2.png" boxSize="8px"></Image>
          </HStack>
          <Text fontSize="2xl" color="white" alignSelf="flex-end">+</Text>
        </Flex>
      </VStack>
    </Box>

  );
}

export default Home;