import { Box, Image, Badge } from '@chakra-ui/react' 

const Card = props => {
    const { image, name, power, color, isAlive, age } = props.hero

    return (
        <>
            <Box 
            maxW='sm' 
            borderWidth='1px' 
            borderRadius='lg' 
            overflow='hidden'
            marginBottom='20px'
            marginLeft='40px'
            >
                <Image src={image} alt={""} height='50vh'
                />
        
                <Box p='6'>
                    <Box display='flex' alignItems='baseline'>
                        <Badge borderRadius='full' px='2' colorScheme='teal'>
                        {name}
                        </Badge>
                    </Box>
            
                    <Box
                        mt='1'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'
                        isTruncated
                    >
                        <Box>{power}</Box> 
                        <Box>{color}</Box>
                        <Box>{isAlive}</Box>
                        <Box>{age}</Box>
                    </Box>
                </Box>
            </Box>
        </>
    )}
export default Card