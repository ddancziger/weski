import React from 'react';
import { Box, Image, Text, VStack, HStack, Badge } from '@chakra-ui/react';

const HotelList = ({ hotels }) => {
  return (
    <VStack spacing="24px" align="stretch">
      {hotels.map((hotel, index) => (
        <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
          <HStack spacing={4}>
            <Image
              src={
                hotel.HotelDescriptiveContent.Images[0]?.URL ||
                'https://via.placeholder.com/150'
              }
              alt={hotel.HotelName}
              boxSize="150px"
            />
            <Box p={4}>
              <HStack justifyContent="space-between">
                <Text fontWeight="bold" fontSize="xl">
                  {hotel.HotelName}
                </Text>
                <Badge colorScheme="green" fontSize="1em">
                  £{hotel.PricesInfo.AmountAfterTax} /per person
                </Badge>
              </HStack>
              <Text mt={2}>Rating: {hotel.HotelInfo.Rating} stars</Text>
              <Text mt={2}>Beds: {hotel.HotelInfo.Beds}</Text>
              <Text mt={2}>
                Position: {hotel.HotelInfo.Position.Latitude},{' '}
                {hotel.HotelInfo.Position.Longitude}
              </Text>
            </Box>
          </HStack>
        </Box>
      ))}
    </VStack>
  );
};

export default HotelList;
