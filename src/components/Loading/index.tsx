import { HStack, Heading, Spinner } from "native-base";

interface LoadingProps {
    isLoading: boolean;
}

const Loading: React.FC<LoadingProps> = ({ isLoading }) => {
    if (isLoading)
        return <HStack space={2} justifyContent="center">
            <Spinner accessibilityLabel="Loading posts" />
            <Heading color="primary.500" fontSize="md">
                Carregando
            </Heading>
        </HStack>;
    return null
};

export default Loading