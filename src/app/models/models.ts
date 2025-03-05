import {ModelsHome} from 'src/app/models/home.interface';
import {ModelStore} from 'src/app/models/store.interface';
import {ModelNotifications} from 'src/app/models/notifications.interface';
import {ModelsContact} from 'src/app/models/contact.interface';

export namespace Models {

    export import Home = ModelsHome;
    export import Store = ModelStore;
    export import Notification = ModelNotifications;
    export import Contact = ModelsContact;
}