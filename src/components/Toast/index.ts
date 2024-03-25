import { createRef } from 'react';
import GlobalDropdownAlert, {
    DropdownAlertData,
    DropdownAlertType,
} from 'react-native-dropdownalert';


class AlertService {

    public static _dropdown = createRef<any>();
    public static showAlert(type: DropdownAlertType, title?: string, message?: string) {
        this._dropdown.current?.alertWithType(
            type,
            title || "ERTreorereo",
            message || "rerer",
        )
    }



    // public static showSuccess(title: string, message: string) {
    //     this.showAlert(DropdownAlertType.Success, title, message);
    // }

    // public static showError(title: string, message: string) {
    //     this.showAlert(DropdownAlertType.Error, title, message);
    // }
}

export default AlertService;