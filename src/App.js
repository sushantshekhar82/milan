
import { Box, Button, Grid, GridItem, Image, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react';
import './App.css';
import CountdownTimer from './components/CountdownTimer';

function App() {
  return (
    <Box backgroundColor={'#f48221'}>
    <Box position={'relative'} display={{base:'none',md:'block',lg:'block'}}>
      <Grid gridTemplateColumns={'30% 70%'} paddingTop={'20px'} paddingRight={'1px'}>
        <GridItem><Image src="./milanlogo.png" alt="milanlogo"/></GridItem>
        <GridItem><Image src="./coverimage.webp" alt="milancoverimage"/></GridItem>

      </Grid>
      
      <Image  src="./lauchsoonbanner.png"  alt="launch soon banner" width={'500px'} position={'absolute'} top={'180px'} left={'140px'}/>
      <Box position={'absolute'} top={'330px'} left={'160px'}>
      <CountdownTimer/>
      </Box>
      <Box position={'absolute'} bottom={'10px'} right={'10px'}>
      <a href='#notifyme'>  <Image src="./arrowbutton.png" alt="arrow button" width={'100px'}/></a>
      
      </Box>
      </Box>
  
      <Box display={{base:'block',md:'none',lg:'none'}} >
      <Image src="./coverimage.webp" alt="milancoverimage"/>
      <Image src="./milanlogo.png" alt="milanlogo" marginTop={'20px'}/>
      <Text textAlign={'center'} fontSize={'17px'} fontFamily={'calibri'} marginTop={'5px'}paddingTop={'8px'} marginBottom={'-20px'} color={'white'}>Lauching Soon</Text>
        <CountdownTimer/>
      </Box>
    <Box marginTop={{base:'5px',lg:'70px'}} paddingBottom={'70px'} id='notifyme'>
    <Text as={'h1'} color={'white'} fontSize={{base:'17px',lg:'30px'}} fontFamily={'calibri'} marginBottom={{base:'10px',lg:'10px'}} textAlign={'center'}>We’ll let you know when we are Launching</Text>
    <form action="mailto:rahulsundesha2@gmail.com" method="post" enctype="text/plain" autoComplete='off'>
      <InputGroup width={{base:'85%',md:'80%',lg:'600px'}} margin={'auto'}>
       
      <Input
        type="email"
        name="Subscriber Email"
        backgroundColor={'white'}
        placeholder="Enter your Email..."
        fontWeight={'bold'}
        color="black" // Text color
        borderRadius="5px" // Border radius
        required
      />
      <InputRightElement width="100px">
        <Button
        type="Submit"
        value={'Notify Me'}
          bgGradient="linear(to-r, orange.400, green.400)"
          borderRadius={'0px 5px 5px 0px'}
          color="white" // Button text color
         _hover={
         {
          cursor:'pointer'
         }
         }
        >
         Notify Me
        </Button>
      </InputRightElement>
    </InputGroup>
    </form>
    </Box>
   
      </Box>
  );
}

export default App;
