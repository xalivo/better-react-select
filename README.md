# better-react-select v1.0.0

A React Select component

### Installation

`npm i better-react-select`



### Code example

```tsx
// import
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



### Properties

##### Required

| Name        | Description                                                                                              | Type   |
| ----------- | -------------------------------------------------------------------------------------------------------- | ------ |
| items       | array of objects that will be displayed in the select element                                            | T[]    |
| optionTitle | name of the property that will be displayed as the **text inside the option elements**                   | string |
| optionValue | name of the property that will be used as the **value attribute** of the option elements; must be unique | string |

##### Optional

| Name                                              | Description                                      | Type |
| ------------------------------------------------- | ------------------------------------------------ | ---- |
| setSelectedItem(item: T)                          | function that sets the current selectedItem      | void |
| onChange(e: React.ChangeEvent<HTMLSelectElement>) | allows you to specify a custom onChange function | void |

##### Style

| Name | Description                                                    | Type   |
| ---- | -------------------------------------------------------------- | ------ |
| bg   | allows you to specify a backgroundColor for the select element | string |
