import React from 'react';

interface ISelect<T> {
    items: T[];
    optionTitle: string;
    optionValue: string;
    setSelectedItem?: (item: T) => void;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    bg?: string;
}

interface IIndexable<T> {
    [key: string]: T;
}

export function Select<T>({items, optionTitle, optionValue, setSelectedItem, onChange, bg}: ISelect<T>) {
    const doesPropertyExist = (property: string, object: T): boolean => {
        return Object.prototype.hasOwnProperty.call(object, property);
    }

    const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (onChange !== undefined) {
            onChange(e);
        } else if (setSelectedItem !== undefined) {
            setSelectedItem(items.find(x => e.currentTarget.value === ("" + (x as IIndexable<T>)[optionValue]))!);
        }
    }

    return (
        <select style={{backgroundColor: bg}} onChange={handleOnChange}>
            {items.map((x, index) => {
                if (!doesPropertyExist(optionValue, x)) {
                    throw new Error(`better-react-select: Property ${optionValue} does not exist on item.`);
                }
                return (<option key={index} value={"" + (x as IIndexable<T>)[optionValue]}>{"" + (x as IIndexable<T>)[optionTitle]}</option>)
            })}
        </select>
    );
}