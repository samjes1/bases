import {ModelsHome} from 'src/app/models/home.interface';
import {ModelStore} from 'src/app/models/store.interface';
import {ModelNotifications} from 'src/app/models/notifications.interface';

export namespace Models {

    export import Home = ModelsHome;
    export import Store = ModelStore;
    export import Notification = ModelNotifications;

}