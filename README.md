# better-react-select v1.0.0
// TODO: complete / update documentation

Install via npm:
`npm i better-react-select`

```
// Import
import {Select} from "better-react-select/Select.tsx";

// example usage

interface IUser {
    id: number;
    name: string;
}

function App() {
    const [users, setUsers] = useState<IUser[]>([]);
    const [selectedUser, setSelectedUser] = useState<IUser>();


    return (
        <Select<IUser> items={users} optionTitle={"name"} optionValue={"id"} setSelectedItem={setSelectedUser} bg={"black"}/>
    ) 
}
```
