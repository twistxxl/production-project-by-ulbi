import { memo } from 'react';
import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;

export const VStack = memo((props: VStackProps) => {
    const { className, align = 'start'} = props;
    return (
        <Flex {...props} align={align} direction="column" />
    );
});
