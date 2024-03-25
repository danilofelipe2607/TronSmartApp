
import GlobalDropdownAlert from 'react-native-dropdownalert';
import AlertService from './';

const AlertWrapper = () => {

    return (
        <>
            <GlobalDropdownAlert
                updateStatusBar
                messageNumOfLines={10}
                ref={AlertService._dropdown}
            />
        </>
    )
}

export default AlertWrapper;