import { memo } from 'react';
import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;

export const VStack = memo((props: VStackProps) => {
    const { className, align = 'start', ...otherProps } = props;
    return (
        <Flex {...otherProps} align={align} direction="column" />
    );
});
