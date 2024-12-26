import React from 'react';
import { Box, Heading, Paragraph } from 'grommet';

import RunePriceTab from '../components/RunePriceTab';

const Home = () => {
    return (
        <Box align="center" pad="large">
            <Heading level={1}>Kamarune</Heading>
            <Paragraph>
                Votre assistant de brisage
            </Paragraph>
            <Box direction="row" gap="medium">

                <RunePriceTab />
            </Box>
        </Box>
    );
};

export default Home;