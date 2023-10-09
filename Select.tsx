import React from 'react'

interface ISelect<T> {
    items: T[];
    optionTitle: string;
    optionValue: string;
    onSelect?: () => void;
    onChange?: () => void;
    
}

export function Select<T>({items, optionTitle, optionValue, onSelect, onChange}: ISelect<T>) {
  return (
    <select onChange={onChange}>
        {items.map(x => <option value={x[optionValue]}>{x[optionTitle]}</option>)}
    </select>
  );
}
