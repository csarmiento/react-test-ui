import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./users";
import { PostCreate, PostEdit, PostList } from "./posts";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import { Dashboard } from './dashboard/Dashboard';
import { authProvider } from './authProvider';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import englishMessages from './i18n/en';

const i18nProvider = polyglotI18nProvider(locale => {
  if (locale === 'fr') {
    return import('./i18n/fr').then(messages => messages.default);
  }

  // Always fallback on english
  return englishMessages;
}, 'en');

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin authProvider={authProvider} dataProvider={dataProvider} dashboard={Dashboard} i18nProvider={i18nProvider}>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name="users" list={UserList} icon={UserIcon} recordRepresentation="name" />
  </Admin>
);

export default App;
